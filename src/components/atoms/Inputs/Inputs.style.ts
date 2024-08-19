import styled, { css } from "styled-components";
import { InputProps } from "./Inputs";
import { SelectBox } from "./InputSelect/InputSelect.style";

export const InputBox = styled.div<InputProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  flex-shrink: 0;

  // DIRECTION
  ${(props) =>
    props.direction === "column" &&
    css`
      flex-direction: column;
      gap: 4px;
    `}

  ${(props) =>
    props.direction === "row" &&
    css`
      align-items: center;
      flex-direction: row;
      gap: 8px;
    `}
`;

export const InputLabel = styled.label<InputProps>`
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;

  // DIRECTION
  ${(props) =>
    props.direction === "column" &&
    css`
      line-height: 18px;
    `}
`;

export const Input = styled.div<InputProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white100};
  border-radius: 6px;
  flex-direction: column;
  gap: 4px;

  // Input, Select 공통
  input,
  ${SelectBox}, textarea {
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.black12};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme.colors.black38};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.primary100};
    }
  }

  // SIZE
  ${(props) =>
    props.size === "sm" &&
    css`
      input,
      select,
      ${SelectBox} {
        height: 30px;
        padding: 0 10px;
        font-size: 1.2rem;
      }
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      input,
      select,
      ${SelectBox} {
        height: 32px;
        padding: 0 10px;
        font-size: 1.2rem;
      }
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      input,
      select,
      ${SelectBox} {
        height: 48px;
        padding: 0 16px;
        font-size: 1.4rem;
      }
    `}

    //ERRORED 
    ${(props) =>
    props.errored &&
    css`
      input,
      ${SelectBox} {
        color: ${(props) => props.theme.colors.redStatus};
        border: 1px solid ${(props) => props.theme.colors.redStatus};

        &::placeholder {
          color: ${(props) => props.theme.colors.redStatus};
        }
      }
    `}
`;

export const InputErroredTxt = styled.p`
  color: ${(props) => props.theme.colors.redStatus};
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
`;

export const InputExplainTxt = styled.p`
  color: ${(props) => props.theme.colors.black60};
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
`;
