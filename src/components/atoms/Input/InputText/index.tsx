"use client";
import { Input, InputProps } from "..";
import * as S from "../input.styles";

/**
 *
 * @param disabled bool
 * @param size string(사용자 커스텀 사이즈)
 * @param label string(라벨 텍스트)
 * @param necessary bool(필수 입력값 red start표시유무)
 * @param invisible bool(라벨 제외 인풋태그 표시유무)
 * @param autoComplete string( "on"/"off"[default] ) 자동완성태그
 * @param inputMode string (none|text|decimal|numeric|tel|search|email|url)
 * @param type string (text|password|email|number|checkbox|radio)
 * @param name string 이름정의
 * @param refs
 * @param register register (react-hook-form)
 * @param onChange Func
 * @returns
 */
export const InputText = ({
  disabled,
  size,
  label,
  necessary,
  invisible,
  autoComplete = "off",
  inputMode,
  type = "text",
  name,
  refs,
  register,
  onChange = () => {},

  children,
  placeholder,
  value,
  onFocus = () => {},
  onBlur = () => {},
  maxLength,
  errors,
  step,
  onKeyDown,
}: InputProps) => {
  return (
    <Input disabled={disabled} size={size} label={label}>
      <>
        {label && (
          <S.InputLabelBox>
            {necessary && <span className="necessary">*</span>} {label && label}
          </S.InputLabelBox>
        )}
        <S.InputTypeBox style={{ border: invisible ? "none" : "" }}>
          <input
            autoComplete={autoComplete}
            spellCheck={false} // 맞춤법 검사 유무
            inputMode={inputMode ? inputMode : "text"}
            style={{
              color: invisible ? "transparent" : "",
              outline: invisible ? "none" : "",
            }}
            type={type}
            name={name}
            ref={refs}
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
            {...register}
          />
        </S.InputTypeBox>
        {errors ? <p className="err-message">{errors[name!]?.message}</p> : ""}
      </>
    </Input>
  );
};
