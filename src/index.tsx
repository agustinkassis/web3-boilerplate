import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import { globalStyle } from "./styles";

import { createRoot } from "react-dom/client";

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

// @ts-ignore
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    Box: any;
    box: any;
    space: any;
  }
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
