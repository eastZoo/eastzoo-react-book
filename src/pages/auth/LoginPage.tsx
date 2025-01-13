import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginForm } from "../../components/organisms/LoginForm";
import { AuthTemplate } from "../../components/template/AuthTemplate";
import { useMutation } from "@tanstack/react-query";
import { writeAccessToken } from "@/common/functions/authFunctions";
import { request } from "@/common/api";
import { ResponseType } from "@/types/response.types";

export interface LoginInputs {
  userId: string;
  password: string;
}

interface LoginData {
  accessToken?: string;
  refreshToken?: string;
}

const schema = yup
  .object({
    email: yup.string().nullable().required("이메일을 입력해주세요"),
    password: yup.string().nullable().required("비밀번호를 입력해주세요"),
  })
  .required();

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<LoginInputs>({
    // resolver: yupResolver(schema),
  });

  /** 로그인 요청 */
  const { mutateAsync: login } = useMutation({
    mutationFn: (data: any) => {
      return request<any>({
        method: "POST",
        url: `/auth/login`,
        data: data,
      });
    },
    onSuccess: (res: { accessToken: string }) => {
      console.log(res);
      if (res && res.accessToken) {
        writeAccessToken(res.accessToken);
        window.location.replace("/");
      }
    },
    onError: (error) => {
      console.log("로그인 에러:", error);
      // TODO: 에러 처리 로직 추가
    },
  });

  const onSubmit = async (data: LoginInputs) => {
    console.log(data);
    await login(data);
  };

  return (
    <AuthTemplate>
      <LoginForm onSubmit={handleSubmit(onSubmit)} control={control} />
    </AuthTemplate>
  );
};
