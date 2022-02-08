import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 5rem 0;

  img {
    border-radius: 0.5rem;
    width: 100px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;