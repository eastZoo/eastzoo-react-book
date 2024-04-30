import { Input, InputProps } from "..";
import * as S from "../input.styles";

export const InputCheckbox = ({
  label,
  size,
  items,
  name,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <Input disabled={disabled} size={size} label={label}>
      <>
        {label && label}
        <S.InputCheckGroup>
          {items &&
            items.map((item: any, idx: number) => {
              return (
                <>
                  <S.InputCheckBox>
                    <input
                      type="checkbox"
                      value={item.id}
                      checked={item.id}
                      name={name}
                      id={name + item.id}
                      onChange={onChange}
                    />
                    {item.display && (
                      <label htmlFor={name + item.id}>{item.display}</label>
                    )}
                  </S.InputCheckBox>
                </>
              );
            })}
        </S.InputCheckGroup>
      </>
    </Input>
  );
};
