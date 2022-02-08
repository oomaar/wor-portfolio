import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.firstColorSecond};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;
`;