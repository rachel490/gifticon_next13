import { Color, DefaultTheme, FontSize, FontWeight } from "styled-components";

const color: Color = {
  neutral0: "#FFFFFF",
  neutral100: "#F1F3F4",
  neutral300: "#CCCCCC",
  neutral400: "#C4C4C4",
  neutral500: "#808080",
  neutral600: "#000000",

  primary: "#FF5757",
};

const fontSize: FontSize = {
  12: "12px",
  13: "13px",
  14: "14px",
  15: "15px",
  16: "16px",
};

const fontWeight: FontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
};

const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
};

export default theme;
