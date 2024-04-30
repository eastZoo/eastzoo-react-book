import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
  items?: any;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  invisible?: boolean;
  children?: React.ReactElement | any;
  register?: UseFormRegisterReturn;
  size?: string | any;
  errors?: any;
  step?: string;
  necessary?: boolean;
  refs?: any;
  autoComplete?: "on" | "off";
  type?: string;
  value?: any;
  onChange?: any;
  keyExpr?: string;
  displayExpr?: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  items?: any;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  invisible?: boolean;
  children?: React.ReactElement;
  register?: UseFormRegisterReturn;
  size?: string | any;
  errors?: any;
  step?: string;
  necessary?: boolean;
  refs?: any;
  autoComplete?: "on" | "off";
  addNullItem?: boolean;
}

export interface InputSelectProps extends SelectProps {
  displayExpr: string | string[];
  keyExpr: string;
}

export const Input = ({
  disabled,
  children,
  type,
  size,
  label,
}: InputProps) => {
  return (
    <S.InputBox disabled={disabled} type={type} size={size} label={label}>
      {children}
    </S.InputBox>
  );
};

export const Select = ({
  disabled,
  children,
  style,
  size,
  label,
}: SelectProps) => {
  return (
    <S.InputBox disabled={disabled} style={style} size={size} label={label}>
      {children}
    </S.InputBox>
  );
};
