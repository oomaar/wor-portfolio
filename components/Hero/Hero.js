import { useState } from "react";
import {
    SliderImage,
    Dots,
    Arrows
} from "../Carousel";
import {
    HeroContainer,
} from "./styledHero";

export const Hero = ({ data }) => {
    const len = data.length - 1;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <HeroContainer>
            <SliderImage imgsData={data} activeIndex={activeIndex} />
            <Dots imgsData={data} activeIndex={activeIndex} onclick={active => setActiveIndex(active)} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
        </HeroContainer>
    );
};