import * as S from "./ContentGridItem.style";

interface ContentGridProps {
  title?: React.ReactElement;
  underline?: boolean;
  tabList?: React.ReactElement;
  children?: React.ReactElement;
}

export const ContentGridItem = ({
  title,
  underline,
  tabList,
  children,
}: ContentGridProps) => {
  return (
    <S.ContentGridItem>
      <S.ContentGridTitle $underline={underline}>{title}</S.ContentGridTitle>
      {tabList && tabList}
      {children && <S.ContentBox>{children}</S.ContentBox>}
    </S.ContentGridItem>
  );
};
