import { Input, InputProps } from "..";
import * as S from "../input.styles";

export const InputRadio = ({
  size,
  label,
  color,
  name,
  items = [],
  register,
  disabled,
  onChange = () => {},
  value,
  errors,
  necessary,
  keyExpr = "id",
  displayExpr = "display",
}: InputProps) => {
  return (
    <Input disabled={disabled} size={size} label={label} type="radio">
      <>
        {label && (
          <S.InputLabelBox>
            {label && label} {necessary && <span className="necessary">*</span>}
          </S.InputLabelBox>
        )}
        <S.InputRadioGroup itemLength={items.length} color="search">
          {items &&
            items.map((item: any, idx: number) => {
              return (
                <S.InputTypeBox key={idx}>
                  <input
                    disabled={disabled}
                    type="radio"
                    value={item[keyExpr]}
                    name={name}
                    {...register}
                    onChange={(e) => {
                      register?.onChange(e);
                      onChange(e);
                    }}
                    defaultChecked={
                      item[displayExpr] === "일반사용자" ? true : false
                    }
                    id={name + item[keyExpr]}
                  />
                  <label htmlFor={name + item[keyExpr]}>
                    {item[displayExpr]}
                  </label>
                </S.InputTypeBox>
              );
            })}
          {errors ? (
            <p className="err-message">{errors[name!]?.message}</p>
          ) : (
            ""
          )}
        </S.InputRadioGroup>
      </>
    </Input>
  );
};
