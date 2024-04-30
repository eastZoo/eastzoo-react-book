import { useRecoilValue } from "recoil";
import { Input, InputProps } from "..";
import { keyboardInputMode } from "../../../../state/keyboard";
import * as S from "../input.styles";

export const InputText = ({
  autoComplete = "off",
  disabled,
  invisible,
  size,
  children,
  label,
  placeholder,
  value,
  register,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  maxLength,
  name,
  type = "text",
  errors,
  step,
  necessary,
  refs,
  inputMode,
  onKeyDown,
}: InputProps) => {
  const inputModeRecoil = useRecoilValue(keyboardInputMode);
  return (
    <Input
      disabled={disabled}
      size={size}
      label={label}
      // style={{ visibility: invisible ? "hidden" : "visible" }}
    >
      <>
        {label && (
          <S.InputLabelBox>
            {label && label} {necessary && <span className="necessary">*</span>}
          </S.InputLabelBox>
        )}
        <S.InputTypeBox style={{ border: invisible ? "none" : "" }}>
          <input
            autoComplete={autoComplete}
            spellCheck={false}
            inputMode={inputMode ? inputMode : inputModeRecoil}
            style={{
              color: invisible ? "transparent" : "",
              outline: invisible ? "none" : "",
            }}
            type={type}
            name={name}
            ref={refs}
            {...register}
            onChange={(e) => {
              register?.onChange(e);
              onChange(e);
            }}
            onFocus={(e) => {
              onFocus(e);
            }}
            onBlur={(e) => {
              onBlur(e);
            }}
            onKeyDown={onKeyDown}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            step={step}
            maxLength={maxLength}
          />
        </S.InputTypeBox>
        {errors ? <p className="err-message">{errors[name!]?.message}</p> : ""}
      </>
    </Input>
  );
};
