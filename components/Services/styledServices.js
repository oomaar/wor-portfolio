import styled from 'styled-components';

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  li {
    color: #f9c81e;

    span {
        color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;