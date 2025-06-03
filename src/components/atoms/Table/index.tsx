import React from "react";
import * as S from "./Table.style";

interface TableProps {
  thead?: any;
  children?: React.ReactElement;
}

export const Table = ({ thead, children }: TableProps) => {
  return (
    <S.Table>
      <S.Thead>
        <tr>
          {thead.map((item: any, idx: number) => {
            return <th key={idx}>{item.name}</th>;
          })}
        </tr>
      </S.Thead>
      <S.Tbody>{children}</S.Tbody>
    </S.Table>
  );
};
