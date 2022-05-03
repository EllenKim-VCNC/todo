import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  :root {
    --color__primary: darkcyan;
    --color__second: #e8f1f1;
    --color__open: #4e4e4e;
    --color__dark: #154747;
    --color__gray: #8C9694;
  }
`;
