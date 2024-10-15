import * as S from "./PageContent.style";
import { ReactComponent as IconArrow } from "../../../../styles/assets/svg/icon_title_arrow.svg";

interface PageContentProps {
  depth01Title: string;
  depth02Title?: string;
  depth03Title?: string;
  searchBox?: React.ReactElement;
  children: React.ReactElement;
}

export const PageContent = ({
  depth01Title,
  depth02Title,
  depth03Title,
  searchBox,
  children,
}: PageContentProps) => {
  return (
    <S.PageContent>
      <S.PageTitBox>
        {depth01Title}
        {depth02Title && (
          <>
            <IconArrow />
            {depth02Title}
          </>
        )}
        {depth03Title && (
          <>
            <IconArrow />
            {depth03Title}
          </>
        )}
      </S.PageTitBox>
      {searchBox && searchBox}
      <S.PageContentBox $shipInfoSet={searchBox ? true : false}>
        {children}
      </S.PageContentBox>
    </S.PageContent>
  );
};
