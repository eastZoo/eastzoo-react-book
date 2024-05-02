import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: space-between;
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  font-size: 13px;
  align-items: center;
  justify-content: flex-end;
  a {
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const functionGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: auto;
`;
