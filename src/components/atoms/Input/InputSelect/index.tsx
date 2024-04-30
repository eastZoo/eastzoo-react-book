import { Input, InputSelectProps } from "..";
import { ReactComponent as IconArrowSelect } from "../../../../styles/assets/svg/icon-arrow-select.svg";
import * as S from "../input.styles";

export const InputSelect = ({
  label,
  name,
  size,
  placeholder,
  register,
  onChange = () => {},
  items,
  displayExpr,
  keyExpr,
  disabled,
  necessary,
  addNullItem = false,
  value,
}: InputSelectProps) => {
  let addedItem = items;
  if (addNullItem && items) {
    // 조건부 빈값추가
    const addObject: any = {};
    addObject[keyExpr] = "";
    if (typeof displayExpr === "object") {
      for (let i = 0; i < displayExpr.length; i++) {
        addObject[displayExpr[i]] = " ";
      }
    } else {
      addObject[displayExpr] = " ";
    }
    addedItem = [addObject, ...items];
  }

  return (
    <Input disabled={disabled} size={size} label={label}>
      <>
        {label && (
          <S.InputLabelBox>
            {label && label} {necessary && <span className="necessary">*</span>}
          </S.InputLabelBox>
        )}
        <S.InputTypeBox>
          <select
            {...register}
            onChange={(e) => {
              register?.onChange(e);
              onChange(e);
            }}
            value={value}
            disabled={disabled}
          >
            {placeholder && <option>{placeholder}</option>}
            {addedItem &&
              addedItem?.map((item: any, idx: number) => {
                return (
                  <option key={idx} value={item[keyExpr]}>
                    {typeof displayExpr === "string" && item[displayExpr]}
                    {typeof displayExpr === "object" &&
                      `${displayExpr.map((cur) => item[cur]).join(" - ")}`}
                  </option>
                );
              })}
          </select>
          <IconArrowSelect className="icon-arrow-select" />
        </S.InputTypeBox>
      </>
    </Input>
  );
};
