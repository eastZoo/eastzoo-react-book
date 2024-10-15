import styled, { css } from "styled-components";

interface SideTabStyleProps {
  $depth?: number;
}

export const SideTabList = styled.ul<SideTabStyleProps>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$depth === 1 &&
    css`
      overflow: auto;
    `}

  ${(props) =>
    props.$depth === 2 &&
    css`
      overflow: auto;
      background: ${(props) => props.theme.colors.primary5};
      padding: 4px 0;
    `}
`;
