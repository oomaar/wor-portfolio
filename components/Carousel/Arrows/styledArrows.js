import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    display: flex;
    z-index: 800;

    @media screen and (max-width: 768px) {
      top: 20%;
    }
`;

export const Arrow = styled.span`
    cursor: pointer;
    border: 0;
    z-index: 800;
    width: auto;
    padding: 1rem;
    font-size: clamp(26px, 10vw, 40px);
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.firstColor};

    &:hover {
        color: ${({ theme }) => theme.colors.firstColorAlt};
    }

    &.prev {
        margin-right: auto;
    }

    &.next {
        margin-left: auto;
    }
`;