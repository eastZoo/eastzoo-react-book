import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  tr {
    background: ${(props) => props.theme.colors.black5};
    border-top: 1px solid ${(props) => props.theme.colors.black12};
    border-bottom: 1px solid ${(props) => props.theme.colors.black12};

    th {
      height: 40px;
      padding: 0 12px;
      color: ${(props) => props.theme.colors.black80};
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid ${(props) => props.theme.colors.black12};

    td {
      height: 40px;
      padding: 8px 12px;
      color: ${(props) => props.theme.colors.black80};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.6rem;

      .td_center {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .td_left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
      }
    }
  }
`;
