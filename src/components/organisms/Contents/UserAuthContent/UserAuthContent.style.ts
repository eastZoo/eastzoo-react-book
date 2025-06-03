import styled from "styled-components";

export const UserAuthContent = styled.div`
  display: grid;
  height: calc(100svh - 168px);
  border: 1px solid ${(props) => props.theme.colors.black12};
  border-collapse: collapse;
  grid-template-columns: 220px 1fr;
`;
