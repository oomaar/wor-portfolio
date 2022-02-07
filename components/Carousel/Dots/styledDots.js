import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 800;
`;

export const Span = styled.span`
    display: inline-block;
    cursor: pointer;
    height: 0.8rem;
    width: 0.8rem;
    margin: 0 5px;
    background-color: #808080;
    border-radius: 50%;
    transition: all 0.5s ease;

    &.active-dot {
        background-color: ${({ theme }) => theme.colors.firstColor};

        &:hover {
            background-color: ${({ theme }) => theme.colors.firstColorAlt};
        }
    }
    
    &:hover {
        transform: scale(1.2);
    }
`;