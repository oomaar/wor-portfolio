import { Section, SectionTitle } from "../../global/GlobalStyle";
import Image from "next/image";
import {
    Container,
    SolutionsList,
    SolutionsItem,
} from "./styledSolutions";

export const Solutions = ({ data }) => {
    const solutionsList = data.list.map((list, i) => (
        <SolutionsItem key={i}>
            <span>{list}</span>
        </SolutionsItem>
    ));

    return (
        <Section>
            <SectionTitle>Our Solutions</SectionTitle>
            <Container>
                <div>
                    <Image
                        src={data.img}
                        alt="Image"
                        width={400}
                        height={400}
                        objectFit="contain"
                    />
                </div>
                <SolutionsList>
                    {solutionsList}
                </SolutionsList>
            </Container>
        </Section>
    );
};