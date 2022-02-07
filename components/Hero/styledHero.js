import styled from 'styled-components';

export const HeroContainer = styled.div`
    position: relative;
    top: 100px;
    max-width: 100%;
    margin-bottom: 20px;
    padding: 0 10px;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 50vh;
    }
`;