import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SolutionsList = styled.ul`
  margin: 0 auto;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1.5rem;
    margin: 1rem auto 0;
  }
`;

export const SolutionsItem = styled.li`
  color: #f9c81e;
  margin: 1rem 0;

  span {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;