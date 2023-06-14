import styled, { css } from "styled-components";

const cardTypeStyle = {
  menuListItem: {
    padding: "1.3rem",
    imageSize: "7.4rem",
  },
  lastSaleItem: {
    padding: "1.7rem",
    imageSize: "7.4rem",
  },
  menuDetailItem: {
    padding: "1.7rem",
    imageSize: "9rem",
  },
};

export const CardContainer = styled.div<{
  type: "menuListItem" | "lastSaleItem" | "menuDetailItem";
}>`
  width: 100%;
  padding-inline: 1.7rem;
  display: flex;
  column-gap: 1.7rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  margin-bottom: 0.1rem;

  ${({ type }) => css`
    padding-block: ${cardTypeStyle[type].padding};

    ${ImageWrap} {
      max-width: ${cardTypeStyle[type].imageSize};
    }

    ${Info} {
      max-width: calc(100% - 1.7rem - ${cardTypeStyle[type].imageSize});
    }
  `}
`;

export const ImageWrap = styled.div`
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
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
