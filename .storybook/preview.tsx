import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [{ name: "dark", value: "#202020" }],
      default: "dark",
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div style={{ maxWidth: "480px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
