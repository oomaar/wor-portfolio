import {
  Container,
  Slide,
  ImageContainer,
  SlideImage,
  Title,
  SubTitle,
  CarouselFeature,
} from "./styledSliderImage";

export const SliderImage = ({ activeIndex, imgsData }) => {
  return (
    <Container>
      {imgsData.map((image) => (
        <Slide
          direction={image.direction}
          key={image.id}
          className={image.id === activeIndex ? "active" : "inactive"}
        >
          <ImageContainer>
            <SlideImage src={image.src} alt="Image" />
          </ImageContainer>
          <CarouselFeature>
            <Title>{image.title}</Title>
            <SubTitle>{image.subTitle}</SubTitle>
          </CarouselFeature>
        </Slide>
      ))}
    </Container>
  );
};
