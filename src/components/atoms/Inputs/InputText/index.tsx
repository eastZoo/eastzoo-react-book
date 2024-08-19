import { ChangeEvent } from "react";
import { InputProps, Inputs } from "../Inputs";

interface InputTextProps extends InputProps {
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  type = "text",
  size = "md",
  direction = "column",
  id,
  label,
  placeholder,
  width,
  name,
  disabled,
  onChange,
  defaultValue,
  register,
}: InputTextProps) => {
  return (
    <Inputs
      id={id && id}
      label={label && label}
      size={size}
      width={width}
      direction={direction}
    >
      <input
        name={name}
        id={id && id}
        placeholder={placeholder && placeholder}
        type={type}
        disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue}
        {...register}
      />
    </Inputs>
  );
};
