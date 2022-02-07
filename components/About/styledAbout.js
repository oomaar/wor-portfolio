import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;