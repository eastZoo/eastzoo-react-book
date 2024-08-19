import * as S from "./SearchBar.style";
import React, { FormEvent } from "react";
import { Buttons } from "../../atoms/Buttons";
import { ReactComponent as IconFind } from "../../../styles/assets/svg/icon_find.svg";

export interface SearchProps {
  searchTitle?: string | React.ReactElement;
  fileInfo?: React.ReactElement;
  searchInput?: React.ReactElement;
  titleButtons?: React.ReactElement;
  gridButtons?: React.ReactElement;
  onSearch?: (e: FormEvent<HTMLFormElement>) => void;
}

export const SearchBar = ({
  searchTitle,
  fileInfo,
  searchInput,
  titleButtons,
  gridButtons,
  onSearch,
}: SearchProps) => {
  return (
    <S.SearchBarBox>
      {searchTitle && (
        <S.SearchTitBox>
          <S.SearchTit>{searchTitle}</S.SearchTit>
          {titleButtons && (
            <S.SearchTitButtons>{titleButtons}</S.SearchTitButtons>
          )}
        </S.SearchTitBox>
      )}
      {(searchInput || gridButtons) && (
        <S.SearchBarForm onSubmit={onSearch}>
          {fileInfo && fileInfo}
          <S.SearchInputBox>
            {searchInput && (
              <>
                <S.SearchBarTit>조회조건</S.SearchBarTit>
                {searchInput}
                <Buttons type="submit" size="md" layout="find">
                  <IconFind />
                </Buttons>
              </>
            )}
          </S.SearchInputBox>

          {gridButtons && (
            <S.SearchBarGridButtons>{gridButtons}</S.SearchBarGridButtons>
          )}
        </S.SearchBarForm>
      )}
    </S.SearchBarBox>
  );
};
