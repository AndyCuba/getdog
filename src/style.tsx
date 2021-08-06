import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto
  }
  body {
    width: 1280px;
    height: 720px;
    overflow: hidden;
  }
`;

export { GlobalStyle };