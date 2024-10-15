import styled, { css } from "styled-components";

interface PageContentStyleProps {
  $shipInfoSet?: boolean;
}

export const PageContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
`;

export const PageTitBox = styled.h3`
  display: flex;
  height: 28px;
  padding: 0 4px;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.9rem;
  font-weight: 600;
  align-items: center;
  gap: 4px;
`;

export const PageContentBox = styled.div<PageContentStyleProps>`
  display: flex;
  height: calc(100svh - 128px);
  padding: 20px;
  background: ${(props) => props.theme.colors.white100};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.shadows.field};
  flex-direction: column;
  gap: 16px;

  ${(props) =>
    props.$shipInfoSet === true &&
    css`
      height: calc(100svh - 176px);
    `}

  .content-init {
    overflow: auto;
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 16px;

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
  }
`;

export const textContetnt = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
`;
