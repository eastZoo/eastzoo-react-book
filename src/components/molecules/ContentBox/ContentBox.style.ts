import styled, { css } from "styled-components";

interface ContentBoxStyleProps {
  $title?: boolean;
  $shade?: boolean;
  $gridColumn?: string;
  $gridRow?: string;
}

export const ContentBox = styled.div<ContentBoxStyleProps>`
  display: grid;
  height: 100%;
  padding: 20px;
  border-radius: 6px;
  gap: 20px;

  ${(props) =>
    props.$title === true &&
    css`
      grid-template-rows: 28px calc(100% - 48px);
    `}

  ${(props) =>
    props.$shade === true &&
    css`
      background: ${(props) => props.theme.colors.primary5};
    `}

  ${(props) =>
    props.$shade === false &&
    css`
      border: 1px solid ${(props) => props.theme.colors.black8};
    `}

  ${(props) =>
    props.$gridColumn &&
    css`
      grid-column: ${props.$gridColumn};
    `}

  ${(props) =>
    props.$gridRow &&
    css`
      grid-row: ${props.$gridRow};
    `}
`;

export const ContentTopbar = styled.div`
  display: flex;
  height: 26px;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.4rem;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
