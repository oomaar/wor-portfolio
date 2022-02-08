import { Section, SectionTitle } from "../../global/GlobalStyle";
import Image from "next/image";
import {
    Container,
    Description,
    List,
} from "./styledServices";

export const Services = ({ data }) => {
    const servicesPoints = data.points.map((point, i) => (
        <li key={i}><span>{point}</span></li>
    ));

    return (
        <Section>
            <SectionTitle>{data.title}</SectionTitle>
            <Description>{data.text}</Description>
            <Container>
                <List>
                    {servicesPoints}
                </List>
                <Image
                    src={data.img}
                    alt="Image"
                    width={400}
                    height={400}
                    objectFit="contain"
                />
            </Container>
        </Section>
    );
};