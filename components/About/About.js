import { Section, SectionTitle } from "../../global/GlobalStyle";
import {
    Container,
    AboutDescription,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Section>
            <Container>
                <SectionTitle>About us</SectionTitle>
                <AboutDescription>{data}</AboutDescription>
            </Container>
        </Section>
    );
};