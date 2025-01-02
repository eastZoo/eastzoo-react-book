import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginForm } from "../../components/organisms/LoginForm";
import { AuthTemplate } from "../../components/template/AuthTemplate";

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
    userId: yup.string().nullable().required("아이디를 입력해주세요"),
    password: yup.string().nullable().required("비밀번호를 입력해주세요"),
  })
  .required();

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<LoginInputs>({
    // resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginInputs) => {
    // TODO: 로그인 로직 추가
    localStorage.setItem(
      `${process.env.PROJECT_NAME}-access-token`,
      "tempAccessToken"
    );
    window.location.replace("/");
  };

  return (
    <AuthTemplate>
      <LoginForm onSubmit={handleSubmit(onSubmit)} control={control} />
    </AuthTemplate>
  );
};
