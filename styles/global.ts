import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    line-height: 120%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }
  
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
