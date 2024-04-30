import { InputHTMLAttributes } from "react";
import { Input } from "..";
import * as S from "../input.styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
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
}

export const InputTextarea: React.FC<TextProps> = ({
  size,
  label,
  name,
  items,
  register,
  disabled,
  onChange = () => {},
  placeholder,
  value,
  errors,
  necessary,
}) => {
  return (
    <Input disabled={disabled} size={size} label={label} type="textarea">
      {label && <S.InputLabelBox>{label && label}</S.InputLabelBox>}
      <S.InputTypeBox>
        <textarea
          disabled={disabled}
          placeholder={placeholder}
          {...register}
          style={{
            background: "white",
            display: "flex",
            border: "1px solid gray",
          }}
        />
      </S.InputTypeBox>
      {errors ? <p className="err-message">{errors[name!]?.message}</p> : ""}
    </Input>
  );
};
