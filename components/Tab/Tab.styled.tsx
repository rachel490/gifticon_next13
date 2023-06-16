import styled from "styled-components";

export const Wrap = styled.div<{ type: "category" | "faq" }>`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.color.neutral0};
`;

export const MenuList = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral400};
  display: flex;
  align-items: center;
  height: 4rem;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-shrink: 0;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  padding-inline: 1rem;

  &.isSelected {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;
