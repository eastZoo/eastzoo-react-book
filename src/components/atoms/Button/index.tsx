import { ButtonHTMLAttributes } from "react";
import * as S from "./button.styles";
import { DefaultTheme } from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  color?: string | "primary";
  size?: "xsm" | "lg" | "mlg" | "md";
  width?: string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  padding?: number;
  icon?: any;
  label?: string;
  array?: string;
  disable?: boolean;
  onClick?: any;
  disabled?: boolean;
  children?: React.ReactElement;
  direction?: string;
  theme?: any; // styled type
}

export const Button = ({
  type,
  color,
  size,
  width,
  height,
  icon,
  onClick,
  disabled,
  padding,
  label,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonBox
      type={type} // submit | button | reset
      color={color} // 배결 컬러
      size={size} // custom size 디자인 css 세팅 필요
      width={width}
      height={height}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      padding={padding}
      label={label}
      {...rest}
    >
      <>
        {children}
        {label}
      </>
    </S.ButtonBox>
  );
};

export const ButtonGroup = ({
  array,
  marginBottom,
  marginTop,
  children,
  width,
  direction,
}: ButtonProps) => {
  return (
    <S.ButtonGroupBox
      direction={direction}
      array={array}
      marginBottom={marginBottom}
      marginTop={marginTop}
      width={width}
    >
      {children}
    </S.ButtonGroupBox>
  );
};
