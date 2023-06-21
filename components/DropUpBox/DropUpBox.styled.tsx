import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const OptionList = styled.div<{ optionModalOpen: boolean }>`
  background-color: ${({ theme }) => theme.color.neutral0};
  display: ${({ optionModalOpen }) => (optionModalOpen ? "block" : "none")};
`;

export const Title = styled.div`
  height: 5rem;
  background-color: ${({ theme }) => theme.color.neutral100};
  display: flex;
  align-items: center;
  padding-inline: 1.7rem;
`;

export const CurrentOptionWrap = styled.div`
  background-color: ${({ theme }) => theme.color.neutral0};
  padding: 1.7rem;
  height: 6.4rem;
  bottom: 8rem;
`;

export const CurrentOption = styled.div`
  background-color: ${({ theme }) => theme.color.neutral100};
  border-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.7rem;

  img {
    width: 16px;
    height: 16px;
  }
`;
