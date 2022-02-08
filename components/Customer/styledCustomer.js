import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  img {
    border-radius: 1rem;
    width: 50px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;