import { Section, SectionTitle } from "../../global/GlobalStyle";
import {
    Container,
} from "./styledCustomer";

export const Customer = ({ data }) => {
    const images = data.map(image => (
        <img
            key={image.id}
            src={image.img}
            alt="Image"
        />
    ));

    return (
        <Section>
            <SectionTitle>Our Customers</SectionTitle>
            <Container>
                {images}
            </Container>
        </Section>
    );
};