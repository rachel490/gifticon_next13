"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

function GlobalStyleProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default GlobalStyleProvider;
