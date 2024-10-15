import { useMemo, useRef, useState } from "react";
import {
  ColDef,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Pagignation } from "../../containers/Grid/Pagination";
import * as S from "./Grid.style";

interface GridProps {
  gridTitle?: string;
  width?: number;
  height?: any;
  defaultPageSize?: number;
  paging?: boolean;
  pagingShow?: boolean;
  rowData?: any[];
  columnDefs?: ColDef[];
  rowSelection?: "single" | "multiple";
  onSelectionChanged?: (row: any) => void;
  onContextMenu?: (event: React.MouseEvent, target: any) => void;
}

const defaultColDef: ColDef = {
  cellStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  headerClass: "custom-header",
};

export const Grid = ({
  gridTitle,
  width,
  height,
  defaultPageSize = 10,
  paging = true,
  pagingShow = true,
  rowData,
  columnDefs,
  rowSelection,
  onSelectionChanged,
}: GridProps) => {
  const gridRef = useRef<AgGridReact>(null);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  // const autoSizeStrategy = useMemo<
  //   | SizeColumnsToFitGridStrategy
  //   | SizeColumnsToFitProvidedWidthStrategy
  //   | SizeColumnsToContentStrategy
  // >(() => {
  //   return {
  //     type: "fitGridWidth",
  //     defaultMinWidth: 40,
  //   };
  // }, []);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value, 10);
    if (gridRef.current && gridRef.current.api) {
      setPageSize(newSize);
    }
  };

  return (
    <S.GridBox $pagingShow={pagingShow} $height={height}>
      {gridTitle && <S.GridTit>{gridTitle}</S.GridTit>}
      <div className="ag-theme-quartz">
        <S.Grid $height={height}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={paging}
            headerHeight={40}
            suppressPaginationPanel={paging}
            paginationPageSize={pageSize}
            rowSelection={rowSelection}
            defaultColDef={defaultColDef}
            overlayNoRowsTemplate="조회 결과가 없습니다"
            // autoSizeStrategy={autoSizeStrategy}
            onSelectionChanged={onSelectionChanged}
          />
        </S.Grid>
      </div>
      {paging && (
        <Pagignation
          gridRef={gridRef}
          total={rowData?.length ?? 0}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </S.GridBox>
  );
};

// export const Grid = (props: GridProps) => {
//   return (
//     <S.GridBox>
//       {props.gridTitle && <S.GridTit>{props.gridTitle}</S.GridTit>}
//       <S.Grid>
//         <DataGrid
//           keyExpr={props.id ? props.id : "id"}
//           width={props.width ? props.width : "100%"}
//           height={props.height ? props.height : "100%"}
//           columnAutoWidth={true}
//           columnMinWidth={50}
//           showBorders={true}
//           showRowLines={true}
//           hoverStateEnabled={true}
//           allowColumnResizing={true}
//           columnResizingMode="widget"
//           dataSource={props.data || []}
//         >
//           {props.infiniteScrolling ? (
//             <Scrolling mode="infinite" />
//           ) : (
//             <Paging
//               defaultPageSize={
//                 props.defaultPageSize ? props.defaultPageSize : 15
//               }
//             />
//           )}
//           {props.selectColumn && (
//             <Selection
//               mode="multiple"
//               selectAllMode={true}
//               showCheckBoxesMode="always"
//             />
//           )}

//           <Pager
//             visible={props.paging === false ? false : true}
//             allowedPageSizes={[5, 10, 15, 20, "all"]}
//             displayMode="full"
//             showPageSizeSelector={true}
//             showNavigationButtons={true}
//           />

//           {props.children && props.children}
//         </DataGrid>
//       </S.Grid>
//     </S.GridBox>
//   );
// };
