import { Section, SectionTitle } from "../../global/GlobalStyle";
import Image from "next/image";
import {
    Container,
} from "./styledCustomer";

export const Customer = ({ data }) => {
    const images = data.map(image => (
        <Image
            key={image.id}
            src={image.img}
            alt="Image"
            width={80}
            height={80}
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