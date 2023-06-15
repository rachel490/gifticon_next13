import styled, { css } from "styled-components";

const gridItemTypeStyle = {
  category: {
    iconSize: "4.3rem",
    rowGap: "1.4rem",
  },
  brand: {
    iconSize: "3.6rem",
    rowGap: "1.5rem",
  },
};

export const GridContainer = styled.div`
  width: 100%;
  padding: 1.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 11fr));
  grid-gap: 0.2rem;
`;

export const Container = styled.div<{ type: "category" | "brand" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.neutral0};
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  overflow: hidden;

  ${({ type }) => css`
    row-gap: ${gridItemTypeStyle[type].rowGap};

    ${ImageWrap} {
      max-width: ${gridItemTypeStyle[type].iconSize};
    }
  `}
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;
