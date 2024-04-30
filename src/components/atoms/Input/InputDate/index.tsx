import { Input, InputProps } from "..";
import * as S from "../input.styles";

export const InputDate = ({
  disabled,
  label,
  size,
  placeholder,
  value,
  register,
  onChange = () => {},
  maxLength,
  name,
  type = "text",
  errors,
  step,
  necessary,
  defaultValue,
}: InputProps) => {
  return (
    <Input disabled={disabled} size={size} label={label}>
      <>
        {label && (
          <S.InputLabelBox>
            {label && label} {necessary && <span className="necessary">*</span>}
          </S.InputLabelBox>
        )}
        <S.InputDateBox>
          <input
            type="date"
            name={name}
            {...register}
            onChange={(e) => {
              register?.onChange(e);
              onChange(e);
            }}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            step={step}
            maxLength={maxLength}
            defaultValue={defaultValue}
          />
        </S.InputDateBox>
        {errors ? <p className="err-message">{errors.message}</p> : ""}
      </>
    </Input>
  );
};
