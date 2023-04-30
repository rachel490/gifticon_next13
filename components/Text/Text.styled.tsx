import styled from "styled-components";

export const CustomText = styled.span<{
  color: string;
  weight: "regular" | "medium" | "semiBold";
  size: number;
}>`
  color: ${({ color }) => color};
  font-weight: ${({ theme, weight }) => theme.fontWeight[weight]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
`;
