import styled from 'styled-components';

export const TechnoTitle = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 5rem 0;

  img {
    width: 200px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
