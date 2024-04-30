"use client";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const ButtonBox = styled.button<ButtonProps>`
  display: -webkit-box;
  display: flex;
  padding: ${(props) => (props.padding ? props.padding + "px" : 0)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "px" : 0)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : 0};
  color: ${(props) =>
    props.color === "white"
      ? props.theme.colors.icon
      : props.color === "whitePrimary"
      ? props.theme.colors.primary
      : props.color === "black"
      ? props.theme.colors.black
      : props.color
      ? props.theme.colors.white
      : props.theme.colors.secondary};
  background: ${(props) =>
    props.color === "white"
      ? props.theme.colors.white
      : props.color === "whitePrimary"
      ? props.theme.colors.white
      : props.color === "transparent" || props.color === "black"
      ? "none"
      : props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary};
  border: ${(props) =>
    props.color === "white"
      ? "1px solid " + props.theme.colors.icon
      : props.color === "whitePrimary"
      ? "1px solid " + props.theme.colors.primary
      : "1px solid " + props.color
      ? "none"
      : "1px solid " + props.theme.colors.secondary};
  border-radius: 5px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 4px;

  // 너비 props지정 [width]
  ${(props) =>
    props.width &&
    css`
      width: ${props.width} !important;
    `}

  // 높이 props지정 [height]
  ${(props) =>
    props.height &&
    css`
      height: ${props.height + "px"} !important;
      font-size: ${props.height >= 40 ? "1.8rem" : "1.6rem"} !important;
    `}

  //#region icon props 설정
  ${(props) =>
    props.icon === true &&
    css`
      display: -webkit-box;
      display: flex;
      padding: 0;
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.iconNavTxt};
      font-size: 1rem;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-orient: vertical;
      flex-direction: column;
      gap: 6px;

      //IOS, safari 14 이하 버전 gap 적용
      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        & > *:not(:last-child) {
          margin-bottom: 6px;
        }
      }
    `}

    
  ${(props) =>
    props.icon === true &&
    !props.form &&
    css`
      &:active {
        color: ${(props) => props.theme.colors.iconNavActiveTxt};
        background: ${(props) => props.theme.colors.whiteActive};

        svg {
          path {
            fill: ${(props) => props.theme.colors.iconNavActiveTxt};
          }
        }
      }
    `}

 //#endregion

  &:disabled,
  &[disabled] {
    color: ${(props) => props.theme.colors.function};
    background: ${(props) => props.theme.colors.disabled};
    border: none;

    &:active {
      background: ${(props) => props.theme.colors.disabled};
      font-weight: inherit;
    }
  }

  //IOS, safari 14 이하 버전 gap 적용
  @supports (-webkit-touch-callout: none) and (not (translate: none)) {
    & > *:not(:last-child) {
      margin-bottom: 2px;
    }
  }

  // 버튼 클릭시 효과
  &:active {
    font-weight: bold;
    background: ${(props) =>
      props.color === "transparent"
        ? props.theme.colors.whiteActive
        : props.color
        ? props.theme.colors[props.color + "Active"]
        : props.theme.colors.primaryActive};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    outline: none !important;
  }

  &:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -tap-highlight-color: rgba(0, 0, 0, 0) !important;
    outline: none !important;
  }

  // xsm 사이즈(높이 30px, 폰트사이즈 14px)
  ${(props) =>
    props.size === "xsm" &&
    css`
      padding: 0 10px;
      color: ${props.color === "transparent"
        ? props.theme.colors.white
        : props.color === "white"
        ? props.theme.colors.secondary
        : props.color === "black"
        ? props.theme.colors.black
        : props.theme.colors.white};
      font-size: 1.6rem !important;

      &:hover,
      &:active {
        background: ${props.color === "transparent"
          ? props.theme.colors.black + "7f"
          : props.theme.colors[props.color + "Active"]};
      }
    `}

  // lg 사이즈(높이 48px, 폰트사이즈 18px)
  ${(props) =>
    props.size === "lg" &&
    css`
      width: 100%;
      height: 60px;
      font-size: 2rem;
      font-weight: bold;
    `}
    
  ${(props) =>
    props.size === "lg" &&
    props.disabled &&
    css`
      width: 100%;
      background: ${(props) => props.theme.colors.disabled};
    `}
  

      // mlg 사이즈(높이 28px, 폰트사이즈 16px)
  ${(props) =>
    props.size === "mlg" &&
    css`
      width: 100%;
      height: 40px;
      font-size: 1.6rem;
      font-weight: bold;
    `}
    
  ${(props) =>
    props.size === "mlg" &&
    props.disabled &&
    css`
      width: 100%;
      background: ${(props) => props.theme.colors.disabled};
    `}


    // md 사이즈(높이 28px, 폰트사이즈 16px)
    ${(props) =>
    props.size === "md" &&
    css`
      width: 100%;
      height: 48px;
      font-size: 2rem;
      font-weight: bold;
    `}
      
    ${(props) =>
    props.size === "md" &&
    props.disabled &&
    css`
      width: 100%;
      background: ${(props) => props.theme.colors.disabled};
    `}
     

    // disabled 처리
  ${(props) =>
    props.disabled === true &&
    css`
      background-color: ${(props) => props.theme.shadow.btn} !important;

      &:active {
        background-color: ${(props) => props.theme.shadow.btn} !important;
      }
    `}

    // 모바일 환경(640px 이하) 설정
  @media (max-width: 640px) {
    // lg 사이즈(높이 48px, 폰트사이즈 18px)
    ${(props) =>
      props.size === "lg" &&
      css`
        width: 100%;
        height: 50px;
        font-size: 1.8rem;
        font-weight: bold;
      `}
  }
`;

export const ButtonGroupBox = styled.div<ButtonProps>`
  overflow: hidden;
  grid-area: BT;
  display: -webkit-box;
  display: flex;
  width: ${(props) => (props.width ? props.width + "%" : "100%")};
  -webkit-box-pack: ${(props) => props.array};
  justify-content: ${(props) =>
    props.array === "start" || props.array === "end"
      ? "flex-" + props.array
      : props.array};
  gap: 5px;

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}px;
    `}

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}px;
    `}
    
    ${(props) =>
    props.direction === "vertical" &&
    css`
      -webkit-box-orient: vertical;
      flex-direction: column;
    `}

  //IOS, safari 14 이하 버전 gap 적용
  @supports (-webkit-touch-callout: none) and (not (translate: none)) {
    & > *:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
