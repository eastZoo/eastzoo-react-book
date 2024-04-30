import TagsInput from "react-tagsinput";
import { Input, InputProps } from "..";
import * as S from "../input.styles";

export const InputTags = ({
  label,
  necessary,
  value,
  onChange = () => {},
  disabled,
}: InputProps) => {
  return (
    <Input label={label}>
      <>
        {label && (
          <S.InputLabelBox>
            {label && label} {necessary && <span>*</span>}
          </S.InputLabelBox>
        )}
        {undefined !== disabled ? (
          <S.InputTagBox1>
            <TagsInput
              value={value}
              onChange={onChange}
              disabled={disabled}
              inputProps={{ placeholder: "" }}
            />
          </S.InputTagBox1>
        ) : (
          <S.InputTagBox>
            <TagsInput value={value} onChange={onChange} />
          </S.InputTagBox>
        )}
      </>
    </Input>
  );
};
