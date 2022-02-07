import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

export const AboutTitle = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;