import { useState } from "react";
import { InputProps } from "../Inputs";
import { Buttons } from "../../Buttons";
import * as S from "./InputFileList.style";
import { ReactComponent as IconAttach } from "../../../../styles/assets/svg/icon_attach.svg";
import { ReactComponent as IconDownload } from "../../../../styles/assets/svg/icon_edit_download.svg";
import { ReactComponent as IconDelete } from "../../../../styles/assets/svg/icon_edit_delete.svg";
import { ColDef } from "ag-grid-community";
import { Grid } from "../../../molecules/Grid";

interface InputFileProps extends InputProps {
  inputRef?: any;
}

export const InputFileList = (props: InputFileProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const downloadButtonRender = (e: any) => {
    return (
      <Buttons
        type="button"
        size="sm"
        layout="icon"
        icon={<IconDownload />}
        onClick={() => {}}
      />
    );
  };

  const deleteButtonRender = (e: any) => {
    return (
      <Buttons
        type="button"
        size="sm"
        layout="icon"
        icon={<IconDelete />}
        onClick={() => {}}
      />
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(e.target.files || []));
  };

  const columnDefs: ColDef[] = [
    {
      headerName: "파일명",
      field: "name",
      minWidth: 400,
      cellStyle: { "text-align": "left" },
    },

    {
      headerName: "다운로드",
      width: 80,
      cellRenderer: downloadButtonRender,
    },

    {
      headerName: "삭제",
      width: 80,
      cellRenderer: deleteButtonRender,
    },
  ];

  return (
    <S.InputFileListBox $width={props.width}>
      <S.InputFileListHeader>
        <S.InputFileListContent
          htmlFor={props.id}
          // onClick={() => props.inputRef.current.click()}
        >
          <input
            type="file"
            ref={props.inputRef}
            id={props.id && props.id}
            multiple
            onChange={handleChange}
          />
          <p>
            {/* {props.inputRef.current?.value
              ? props.inputRef.current?.value
              : "업로드할 파일을 선택하세요."} */}
          </p>
          <IconAttach />
        </S.InputFileListContent>
        <Buttons type="button" size="md" layout="secondary" label="업로드" />
      </S.InputFileListHeader>

      <S.InputFileList>
        {props.label}
        <Grid
          rowData={files}
          // rowSelection={`single`}
          columnDefs={columnDefs}
        />
      </S.InputFileList>

      {props.errored && (
        <S.InputFileListErroedTxt>
          파일을 등록해주세요.
        </S.InputFileListErroedTxt>
      )}
    </S.InputFileListBox>
  );
};
