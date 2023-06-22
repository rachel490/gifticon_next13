import styled from "styled-components";

export const ButtonWrap = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  height: 4rem;
  column-gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral100};

  button {
    border-bottom: 2px solid transparent;
    width: 10rem;
    height: 100%;

    &.isSelected {
      color: ${({ theme }) => theme.color.primary};
      border-bottom-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const NoticeInfoContainer = styled.div`
  /* height: 100%; */
  background-color: ${({ theme }) => theme.color.neutral0};
  /* overflow-y: scroll; */
  padding: 1.7rem;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const NoticeInfo = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.7rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  img {
    height: auto;
  }
`;
