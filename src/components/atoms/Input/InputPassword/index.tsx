import { Input, InputProps } from "..";
import * as S from "../input.styles";

export const InputPassword = ({
  label,
  size,
  disabled,
  register,
  onChange = () => {},
  value,
  errors,
  name,
  necessary,
}: InputProps) => {
  return (
    <Input disabled={disabled} size={size} label={label}>
      <>
        <S.InputLabelBox>
          {label && label} {necessary && <span className="necessary">*</span>}
        </S.InputLabelBox>
        <S.InputTypeBox>
          <input
            type="password"
            disabled={disabled}
            {...register}
            onChange={(e) => {
              register?.onChange(e);
              onChange(e);
            }}
            value={value}
          />
        </S.InputTypeBox>
        {errors ? <p className="err-message">{errors[name!]?.message}</p> : ""}
      </>
    </Input>
  );
};
