import styled, { css } from "styled-components";
import { Pagination } from "../../containers/Grid/Pagination/Pagination.style";

interface GridStyleProps {
  $height?: any;
  $pagingShow?: boolean;
}

export const GridBox = styled.div<GridStyleProps>`
  overflow: auto;
  display: flex;
  width: 100%;
  height: ${(props) => (props.$height ? props.$height + "px" : "100%")};
  min-height: 147px;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;

  .ag-theme-quartz {
    height: calc(100% - 48px);
    min-height: 100px;

    .ag-overlay-panel {
      padding-top: 40px;
    }
  }

  ${(props) =>
    props.$height &&
    css`
      flex-shrink: 0;
    `}

  ${(props) =>
    props.$pagingShow === false &&
    css`
      .ag-theme-quartz {
        height: calc(100%);
      }

      ${Pagination} {
        display: none;
      }
    `}
`;

export const GridTit = styled.h4`
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Grid = styled.div<GridStyleProps>`
  height: 100%;

  .ag-root-wrapper {
    border-color: ${(props) => props.theme.colors.black12};
    border-right: none;
    border-left: none;
    border-radius: 0;

    // GRID 헤더 배경색/높이 변경
    .ag-header {
      background: ${(props) => props.theme.colors.black5};
      border-color: ${(props) => props.theme.colors.black12};
      border-left: none;
      border-right: none;

      .ag-header-row {
        .ag-header-cell {
          padding: 0 12px;

          .ag-header-cell-resize {
            &::after {
              width: 1px;
              background: ${(props) => props.theme.colors.black5};
            }
          }

          .ag-header-cell-label {
            display: flex;
            align-items: center;
            justify-content: center;

            .ag-header-cell-text {
              color: ${(props) => props.theme.colors.black80};
              font-size: 1.2rem;
              font-weight: 700;
              letter-spacing: 0;
            }
          }
        }
      }
    }

    // GRID 내용 높이/border color 지정
    .ag-body {
      min-height: 40px;

      .ag-row {
        border-color: ${(props) => props.theme.colors.black12};

        &.ag-row-hover:not(.ag-full-width-row)::before,
        &.ag-row-hover.ag-full-width-row.ag-row-group::before {
          background-color: ${(props) => props.theme.colors.black2} !important;
        }

        .ag-cell {
          padding: 0 12px;
          color: ${(props) => props.theme.colors.black80};
          font-size: 1.2rem;
          letter-spacing: 0;
        }
      }
    }
  }
`;
