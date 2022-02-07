import {
    Container,
    AboutTitle,
    AboutDescription,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Container>
            <AboutTitle>About us</AboutTitle>
            <AboutDescription>{data}</AboutDescription>
        </Container>
    );
};