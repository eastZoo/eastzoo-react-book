import styled, { css } from "styled-components";

interface TitleProps {
  $underline?: boolean;
}

export const ContentGridItem = styled.div`
  overflow: hidden;
  display: grid;
  width: 100%;
  grid-template-rows: 64px auto;

  & + div {
    border-left: 1px solid ${(props) => props.theme.colors.black12};
  }
`;

export const ContentGridTitle = styled.div<TitleProps>`
  display: flex;
  padding: 16px 20px;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.4rem;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  ${(props) =>
    props.$underline &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.colors.black12};
    `}
`;

export const ContentBox = styled.div`
  overflow: auto;
  display: flex;
  padding: 0 20px 20px;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    outline: none;
    border-radius: 10px;
    border: 4px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.black30};
    border: 4px solid ${(props) => props.theme.colors.white100};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
