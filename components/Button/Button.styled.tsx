import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.neutral0};
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: 500;
  line-height: 19.2px;
  display: flex;
  padding-top: 2.3rem;
  justify-content: center;

  &:disabled {
    background-color: ${({ theme }) => theme.color.neutral300};
  }
`;
