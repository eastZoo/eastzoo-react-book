import * as yup from "yup";
import { ModalPassword } from "../../molecules/Modals/ModalPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { request } from "../../../common/api";
import { BaseResponse } from "../../../common/types/baseRespones";
import { showAlert } from "../Alert";

export interface ChangePasswordInputs {
  currentPassword: string;
  newPassword: string;
  newPasswordCheck: string;
}

interface ChangePasswordModalProps {
  formId: string;
  setModalShow: any;
}

const schema = yup
  .object({
    currentPassword: yup
      .string()
      .nullable()
      .required("기존 비밀번호를 입력해주세요"),
    newPassword: yup
      .string()
      .nullable()
      .required("새 비밀번호를 입력해주세요")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/,
        "비밀번호는 숫자, 영문, 특수기호를 조합해서 9글자 이상으로 입력해주세요."
      ),
    newPasswordCheck: yup
      .string()
      .nullable()
      .required("새 비밀번호 확인을 입력해주세요")
      .oneOf([yup.ref("newPassword")], "비밀번호가 일치하지 않습니다."),
  })
  .required();

export const ChangePasswordModal = ({
  formId,
  setModalShow,
}: ChangePasswordModalProps) => {
  const { control, handleSubmit } = useForm<ChangePasswordInputs>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (inputs: ChangePasswordInputs) => {
      const { currentPassword, newPassword } = inputs;
      return request<BaseResponse>({
        method: "POST",
        url: "/auth/change-password",
        data: { currentPassword, newPassword },
      });
    },
    onSuccess: (res: BaseResponse) => {
      showAlert("비빌번호가 변경되었습니다.");
      setModalShow(false);
    },
  });

  const onSubmit = (inputs: ChangePasswordInputs) => {
    mutation.mutate(inputs);
  };

  return (
    <ModalPassword
      formId={formId}
      setModalShow={setModalShow}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};
