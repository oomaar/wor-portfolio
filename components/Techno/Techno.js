import { Section, SectionTitle } from "../../global/GlobalStyle";
import {
    Container, TechnoTitle
} from "./styledTechno";

export const Techno = ({ data }) => {
    const images = data.images.map(image => (
        <img
            key={image.id}
            src={image.img}
            alt="Image"
        />
    ));

    return (
        <Section>
            <SectionTitle>Technologies</SectionTitle>
            <TechnoTitle>{data.title}</TechnoTitle>
            <Container>
                {images}
            </Container>
        </Section>
    );
};