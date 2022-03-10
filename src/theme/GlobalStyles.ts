import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: darkcyan;
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
    --color__second: #878c8c;
  }
`;
