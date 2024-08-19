import { ChangeEvent } from "react";
import { InputProps, Inputs } from "../Inputs";
import * as S from "./InputSelect.style";

interface InputSelectProps extends InputProps {
  ref?: React.LegacyRef<HTMLSelectElement>;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  classname?: string;
  displayKey?: string;
  valueKey?: string;
  value?: string;
  placeholderDisabled?: boolean;
  isPlaceholder?: boolean;
}

export const InputSelect = ({
  value,
  id,
  ref,
  label,
  size,
  width,
  direction,
  errored,
  erroredTxt,
  name,
  placeholder,
  options,
  onChange,
  disabled,
  displayKey,
  valueKey,
  placeholderDisabled = false,
  isPlaceholder = true,
}: InputSelectProps) => {
  return (
    <Inputs
      id={id}
      label={label}
      size={size}
      width={width}
      direction={direction}
      errored={errored}
      erroredTxt={erroredTxt}
    >
      <S.SelectBox>
        <S.Select
          ref={ref}
          name={name}
          onChange={onChange}
          disabled={disabled}
          value={value}
        >
          {isPlaceholder && (
            <S.Placeholder value="" disabled={placeholderDisabled}>
              {placeholder}
            </S.Placeholder>
          )}
          {options &&
            options.map((item: any) => {
              const itemValue = valueKey ? item[valueKey] : item.value;
              return (
                <option key={`${item.label}_${itemValue}`} value={itemValue}>
                  {displayKey ? item[displayKey] : item.label}
                </option>
              );
            })}
        </S.Select>
      </S.SelectBox>
    </Inputs>
  );
};
