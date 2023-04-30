import "styled-components";

declare module "styled-components" {
  export interface Color {
    neutral0: string;
    neutral100: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    primary: string;
  }

  export interface FontSize {
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
  }

  export interface FontWeight {
    regular: number;
    medium: number;
    bold: number;
  }

  export interface DefaultTheme {
    color: Color;
    fontWeight: FontWeight;
    fontSize: FontSize;
  }
}
