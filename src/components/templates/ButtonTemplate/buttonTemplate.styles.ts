import styled, { css } from "styled-components";
import { InputLabelBox } from "../../atoms/Input/input.styles";

interface MainTemplateProps {
  stateTheme?: string | undefined;
  loading?: boolean | undefined;
}

export const MainTemplate = styled.div<MainTemplateProps>`
  overflow: auto;
  display: grid;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.white};
  grid-template-rows: 48px calc(100vh - 48px);

  ${(props) =>
    props.stateTheme === "START" &&
    css`
      background: ${(props) => props.theme.colors.startStatusBg};
    `}

  ${(props) =>
    props.stateTheme === "CONTINUE" &&
    css`
      background: ${(props) => props.theme.colors.contiStatusBg};
    `}

    ${(props) =>
    props.stateTheme === "PAUSE" &&
    css`
      background: ${(props) => props.theme.colors.pauseStatusBg};
    `}

    ${(props) =>
    props.loading === true &&
    css`
      &::after {
        content: "";
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: ${(props) => props.theme.colors.black}7f;
      }
    `}

  // 모바일 환경(640px 이하) 설정
  @media (max-width: 640px) {
  }
`;

export const MainContentSection = styled.section`
  overflow: auto;
  display: flex;
  width: 100vw;
  max-height: calc(100vh - 48px);
  align-items: center;
  justify-content: center;
`;
