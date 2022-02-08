import styled from 'styled-components';

export const HeroContainer = styled.div`
    position: relative;
    margin-bottom: 20px;
    padding: 0 1rem 1rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.heroColor};
`;