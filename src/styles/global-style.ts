import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', Sans-serif;
    letter-spacing: -0.01rem;
  }

  html, body {
    font-size: 10px;
  }

  body {
    overflow-y: overlay;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
