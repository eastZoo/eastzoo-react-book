import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  letter-spacing: -0.5px;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}

ul, li {
  padding: 0;
  margin: 0; 
  list-style: none;
}

* {
  box-sizing: border-box;
}

.err-message {
  color: red;
  font-size: 1.4rem;
  font-weight: 300;
}

.holiday {
  color: #d10000;
}

abbr{
  font-size: 1.4rem;
  font-weight: 500;
  text-align: start;
}
`;
