import styled from "styled-components";
import { transition } from "../../../global/GlobalStyle";

export const Container = styled.div`
  position: relative;
  z-index: 1;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: ${transition};

  &.active {
    height: auto;
    width: auto;
    visibility: visible;
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SlideImage = styled.img`
  width: 200px;
  object-fit: contain;
`;

export const CarouselFeature = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.092rem, 5vw, 4rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const SubTitle = styled.h1`
  max-width: 450px;
  text-transform: uppercase;
  font-size: clamp(1.125rem, 3vw, 1.625rem);
  color: ${({ theme }) => theme.colors.textColor};
`;