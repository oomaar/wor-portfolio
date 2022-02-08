import { Section, SectionTitle } from "../../global/GlobalStyle";
import { GoLocation } from "react-icons/go";
import { BsTelephoneForward, BsFillSignpost2Fill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import {
    Container,
    ContactList,
    ContactInfo,
} from "./styledContact";

export const Contact = ({ data }) => {
    return (
        <Section>
            <SectionTitle>Contact Us</SectionTitle>
            <Container>
                <ContactList>
                    <ContactInfo>
                        <GoLocation />
                        <span>{data.address}</span>
                    </ContactInfo>
                    <ContactInfo>
                        <BsTelephoneForward />
                        <span>{data.mobile}</span>
                    </ContactInfo>
                    <ContactInfo>
                        <BsTelephoneForward />
                        <span>{data.phone}</span>
                    </ContactInfo>
                    <ContactInfo>
                        <FaFax />
                        <span>{data.fax}</span>
                    </ContactInfo>
                    <ContactInfo>
                        <BsFillSignpost2Fill />
                        <span>{data.postalCode}</span>
                    </ContactInfo>
                </ContactList>
            </Container>
        </Section>
    );
};




