import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.color.neutral0};
  padding: 1.2rem 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral100};
`;

export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const InfoRow = styled.div`
  column-gap: 0.9rem;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[16]};

  span:first-child {
    min-width: 4.4rem;
    display: inline-block;
    color: ${({ theme }) => theme.color.neutral500};
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;
