import styled from "styled-components";

interface InputFileProps {
  width?: number;
}

export const InputFileListBox = styled.div<InputFileProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  flex-direction: column;
  gap: 16px;
`;

export const InputFileListHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InputFileListContent = styled.label`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.black30};
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.black12};
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  input {
    display: none;

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.primary100};
    }
  }
`;

export const InputFileList = styled.div`
  display: flex;
  width: 560px;
  height: 100%;
  min-height: 80px;
  text-align: left;
  flex-direction: column;
  gap: 8px;

  .ag-theme-quartz {
    .ag-root.ag-layout-normal {
      height: 100%;
    }

    .ag-root-wrapper-body.ag-layout-normal {
      min-height: 100px;
    }
  }
`;

export const InputFileListErroedTxt = styled.p`
  color: ${(props) => props.theme.colors.redStatus};
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
`;
