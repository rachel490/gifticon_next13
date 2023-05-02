import styled from "styled-components";

export const CardContainer = styled.div<{ size: "m" | "l" }>`
  width: 100%;
  padding-inline: 1.7rem;
  padding-block: ${({ size }) => (size === "m" ? "1.3rem" : "1.7rem")};
  display: flex;
  column-gap: 1.7rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  margin-bottom: 0.1rem;
`;

export const ImageWrap = styled.div<{ size: "m" | "l" }>`
  max-width: ${({ size }) => (size === "m" ? "7.4rem" : "9rem")};
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Info = styled.div<{ size: "m" | "l" }>`
  display: flex;
  max-width: ${({ size }) => `calc(100% - 3.4rem - (${size === "m" ? "7.4rem" : "9rem"}))`};
  flex-direction: column;
  justify-content: center;

  .brand {
    margin-bottom: 0.7rem;
  }

  .menu {
    margin-bottom: 1.3rem;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;

  span:first-child {
    margin-right: 0.3rem;
  }
`;
