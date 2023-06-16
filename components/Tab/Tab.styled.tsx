import styled, { css } from "styled-components";

export const Wrap = styled.div<{ type: "category" | "faq" }>`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.neutral0};

  ${({ type }) => tabVariantCSS[type]};
`;

export const MenuList = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral400};
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-shrink: 0;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;

  &.isSelected {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

const tabVariantCSS = {
  category: css`
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    ${MenuList} {
      height: 4rem;
    }

    ${MenuItem} {
      padding-inline: 0.9rem;
    }
  `,
  faq: css`
    overflow: hidden;

    ${MenuList} {
      width: 100%;
      padding-inline: 1.7rem;
      height: 5rem;
    }

    ${MenuItem} {
      width: calc(100% / 2);

      > * {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  `,
};
