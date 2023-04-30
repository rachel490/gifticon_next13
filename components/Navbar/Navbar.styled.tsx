import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBox = styled.button`
  display: flex;
  align-items: center;
  min-width: 30px;
  height: 100%;
`;

export const NavLeft = styled(NavBox)`
  justify-content: flex-start;
`;

export const NavTitle = styled(NavBox)`
  justify-content: center;
`;

export const NavRight = styled(NavBox)`
  justify-content: flex-end;
`;
