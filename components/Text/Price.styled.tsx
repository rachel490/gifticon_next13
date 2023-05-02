import styled, { css } from "styled-components";
import Text from "./Text";

export const PriceText = styled(Text)<{ type: "discount" | "original" }>`
  ${({ type, theme }) => {
    switch (type) {
      case "discount":
        return css`
          font-weight: ${theme.fontWeight.regular};
          color: ${theme.color.neutral500};
          text-decoration: line-through;
        `;
      case "original":
      default:
        return css`
          font-size: ${theme.fontSize[16]};
        `;
    }
  }}
`;
