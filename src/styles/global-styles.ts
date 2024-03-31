import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;
