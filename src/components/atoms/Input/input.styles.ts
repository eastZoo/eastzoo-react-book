"use client";
import styled, { css } from "styled-components";
import { InputProps } from ".";

interface InputLabelProps {
  itemLength?: number;
  textInput?: boolean;
  color?: string;
}

export const InputLabelBox = styled.div`
  display: flex;
  align-items: center;

  .necessary {
    margin-left: 2px;
    color: ${(props) => props.theme.colors.dottedTxt};
    font-weight: bold;
  }
`;

export const InputTypeBox = styled.div`
  display: flex;
  padding: 2px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};

  // 텍스트, 비밀번호
  input[type="text"],
  input[type="tel"],
  input[type="number"],
  input[type="password"] {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    color: ${(props) => props.theme.colors.black};
    font-size: 1.6rem;
    border: none;
    background: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.placeHolderTxt};
    }
  }

  // 라디오 버튼
  input[type="radio"] {
    display: none;
  }

  // 콤보박스
  select {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    color: ${(props) => props.theme.colors.black};
    border: none;
    background: none;
  }

  // 텍스트영역
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.black};
    border: none !important;

    &::placeholder {
      color: ${(props) => props.theme.colors.placeHolderTxt};
    }
  }

  .icon-arrow-select {
    position: relative;
    top: 4px;
    right: 10px;
  }
`;

export const InputBox = styled.div<InputProps>`
  display: grid;
  width: 100%;
  height: ${(props) =>
    props.size === "lg"
      ? "60px"
      : props.type === "radio"
      ? "100%"
      : props.type === "textarea"
      ? "100%"
      : "40px"};
  color: ${(props) => props.theme.colors.labelTxt};
  font-size: 1.4rem;
  gap: 5px;
  ${(props) =>
    props.disabled === true &&
    css`
      ${InputTypeBox} {
        background: ${(props) => props.theme.colors.inputBg} !important;

        input {
          &::placeholder {
            color: ${(props) => props.theme.colors.black};
          }
        }
      }
    `}

  ${InputLabelBox} {
    font-size: ${(props) => (props.size === "lg" ? "1.8rem" : "1.6rem")};
    color: ${(props) =>
      props.size === "lg" ? "white" : props.theme.colors.labelTxt};
  }

  ${InputTypeBox} {
    font-size: ${(props) => (props.size === "lg" ? "1.8rem" : "1.6rem")};
    border: ${(props) =>
      props.size === "lg"
        ? "1px solid " + props.theme.colors.white
        : "1px solid " + props.theme.colors.inputBorder};
  }

  .err-message {
    color: ${(props) => props.theme.colors.dottedTxt};
  }

  // 모바일 환경(640px 이하) 설정
  @media (max-width: 640px) {
    grid-template-columns: ${(props) =>
      props.label === undefined
        ? "1fr"
        : props.size === "lg"
        ? "80px 1fr"
        : "80px 1fr"};
    gap: 2px;

    ${InputLabelBox} {
      font-size: 1.4rem;
    }
  }
`;

//라디오 라벨 스타일(사이드 태그 타입) 설정
export const InputSidetagRadioGroup = styled.div<InputLabelProps>`
  display: flex !important;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  ${InputTypeBox} {
    display: flex;
    width: 100%;
    padding: 0;
    border: none;
    flex-direction: column;

    label {
      width: 100%;
      padding: 14px 5%;
      font-size: 1.5rem;
      background: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.divideBorder};
      border-radius: 4px;
      cursor: pointer;
    }
  }

  // 레이블 버튼 선택 활성화
  input[type="radio"]:checked + label {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow.primary};
  }

  // 모바일 환경(640px 이하) 설정
  @media (max-width: 640px) {
    label {
      padding: 10px 5%;
    }
  }
`;

//라디오 라벨 스타일(버튼타입) 설정
export const InputRadioGroup = styled.div<InputLabelProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) => "repeat(" + props.itemLength + ", 1fr)"};
  gap: 2px;

  ${InputTypeBox} {
    padding: 0;
    border: none;

    // 레이블 버튼
    label {
      display: -webkit-box;
      display: flex;
      width: 100%;
      min-height: 60px;
      padding: 6px;
      font-size: 1.8rem;
      text-align: center;
      color: ${(props) => props.theme.colors.labelTxt};
      background: ${(props) => props.theme.colors.whiteActive};
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
    }

    &:first-of-type {
      label {
        border-radius: 5px 0 0 5px;
      }
    }

    &:last-of-type {
      label {
        border-radius: 0 5px 5px 0;
      }
    }
  }

  // 레이블 버튼 선택 활성화
  input[type="radio"]:checked + label {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    background: ${(props) =>
      props.color === "search"
        ? props.theme.colors.grid
        : props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow.primary};
  }

  // 모바일 환경(640px 이하) 설정
  @media (max-width: 640px) {
    label {
      height: 30px !important;
      min-height: 30px !important;
      font-size: 1.2rem !important;
    }
  }
`;

//체크박스 일반형
export const InputCheckBox = styled.div`
  display: flex;
  padding: 2px;
  font-size: 1.6rem;
  border-radius: 5px;
  align-items: center;
  gap: 10px;
`;

//체크박스 라벨 스타일(버튼타입) 설정
export const InputCheckGroup = styled.div<InputLabelProps>`
  display: flex;
  width: 100%;
  border-radius: 5px;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 10px;

  ${InputTypeBox} {
    display: flex;
    height: 100%;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
    gap: 10px;

    //체크박스
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }

    // 레이블 버튼
    label {
      display: -webkit-box;
      display: flex;
      color: ${(props) => props.theme.colors.black};
      font-size: 1.6rem;
    }
  }
`;

export const InputDateBox = styled.div`
  display: flex;
  padding: 2px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: ${(props) => props.theme.colors.black};
    font-size: 1.6rem;
    border: none;
    background: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.inputBorder};
      font-weight: 300;
    }
  }
`;

export const InputTagBox = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};

  .react-tagsinput {
    overflow: scroll;
    display: flex;
    padding: 5 15px;
    height: 100%;
    max-height: 40px;
    border: none;
    background: none;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none;
    }

    & > span {
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      & > span {
        margin: 0;
      }
    }

    input {
      display: none;
    }
  }
`;
export const InputTagBox1 = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};

  .react-tagsinput {
    overflow: scroll;
    display: flex;
    padding: 5 15px;
    height: 100%;
    max-height: 40px;
    border: none;
    background: none;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none;
    }

    & > span {
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      & > span {
        margin: 0;
      }
    }
  }
`;
