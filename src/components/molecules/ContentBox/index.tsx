import * as S from "./ContentBox.style";

interface CurrentBoxProps {
  title?: string | null;
  topbar?: React.ReactElement;
  shade?: boolean;
  gridColumn?: string;
  gridRow?: string;
  children?: React.ReactElement;
}

export const ContentBox = ({
  title,
  topbar,
  shade,
  gridColumn,
  gridRow,
  children,
}: CurrentBoxProps) => {
  return (
    <S.ContentBox
      $shade={shade}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      $title={title ? true : false}
    >
      {title && (
        <S.ContentTopbar>
          <span>{title}</span>
          {topbar && topbar}
        </S.ContentTopbar>
      )}
      <S.Content>{children}</S.Content>
    </S.ContentBox>
  );
};
