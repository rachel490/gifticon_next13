import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  padding: 1.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 11fr));
  grid-gap: 0.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.neutral0};
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  overflow: hidden;
  row-gap: 1.4rem;
`;

export const ImageWrap = styled.div`
  position: relative;
  max-width: 4.3rem;
  width: 100%;
  aspect-ratio: 1/1;
`;
