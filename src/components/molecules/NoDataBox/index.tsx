import * as S from "./NoDataBox.style";

interface NoDataBoxProps {
  title?: string;
  subtitle?: string;
}

export const NoDataBox = ({
  title = "데이터가 없습니다.",
  subtitle,
}: NoDataBoxProps) => {
  return (
    <S.NoDataBox>
      <S.Title>{title}</S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.NoDataBox>
  );
};
