import styled from 'styled-components';

export const Container = styled.div``;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  margin: 2rem 0;
`;

export const ContactInfo = styled.div`
  color: ${({ theme }) => theme.colors.firstColor};
  display: flex;
  gap: 0 2rem;
  align-items: center;
  font-size: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    flex-direction: column;
    gap: 2rem 0;
    text-align: center;
  }
`;