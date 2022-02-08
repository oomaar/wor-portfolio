import { Section, SectionTitle } from "../../global/GlobalStyle";
import {
    Container,
    AboutDescription,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Section id="about">
            <Container>
                <SectionTitle>About us</SectionTitle>
                <AboutDescription>{data}</AboutDescription>
            </Container>
        </Section>
    );
};