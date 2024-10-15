import * as S from "./LoginForm.style";
import { Control } from "react-hook-form";
import { FormEventHandler } from "react";
import { Buttons } from "../../atoms/Buttons";
import { ControlText } from "../../atoms/Controls/ControlText";
import { LoginInputs } from "../../../pages/auth/LoginPage";

interface LoginFormProps {
  onSubmit: FormEventHandler;
  control: Control<LoginInputs>;
}

export const LoginForm = ({ onSubmit, control }: LoginFormProps) => {
  return (
    <S.LoginFormBox>
      <S.LoginFormTit>LOGIN</S.LoginFormTit>
      <S.LoginForm onSubmit={onSubmit}>
        <ControlText
          control={control}
          size="lg"
          placeholder="아이디를 입력하세요"
          name="mbrUserId"
        />
        <ControlText
          type="password"
          control={control}
          size="lg"
          placeholder="비밀번호를 입력하세요"
          name="mbrUserPwd"
        />
        <Buttons type="submit" layout="primary" size="lg" label="Login" />
      </S.LoginForm>
      <S.LoginFormExp>
        * 비밀번호를 모를 경우에는 관리자에게 문의하세요.
      </S.LoginFormExp>
    </S.LoginFormBox>
  );
};
