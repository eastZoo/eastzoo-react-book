import styled from "styled-components";

export const SearchBarBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SearchTitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchTit = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 28px;
  align-items: center;
  gap: 8px;
`;

export const SearchTitButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  flex-flow: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const SearchInputBox = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const SearchBarTit = styled.div`
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const SearchBarGridButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
`;

// export const DataFileSearchInputBox = styled.div`
//   display: flex;
//   width: auto;
//   align-items: center;
//   gap: 8px;
// `;
