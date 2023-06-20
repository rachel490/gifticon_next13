import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.neutral0};
  margin-bottom: 0.9rem;

  span {
    margin-left: 1.7rem;
  }
`;
