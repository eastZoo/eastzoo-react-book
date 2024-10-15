import { ChangeEvent } from "react";
import { InputProps, Inputs } from "../Inputs";

interface InputDateProps extends InputProps {
  startName?: string;
  endName?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputDate = ({
  id,
  label,
  size,
  width,
  direction,
  errored,
  erroredTxt,
  startName,
  endName,
  onChange,
  defaultValue,
  register,
  disabled,
}: InputDateProps) => {
  return (
    <Inputs
      id={id && id}
      label={label && label}
      size={size}
      width={width}
      direction={direction}
      errored={errored}
      erroredTxt={erroredTxt}
    >
      <input
        name={startName}
        type="date"
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register}
      />
    </Inputs>
  );
};
