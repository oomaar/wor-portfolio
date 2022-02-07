import { About, Hero } from "../components";
import { Head } from "../global/Head";
import websiteData from "../data/websiteData.json";
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 32rem;

  @media screen and (max-width: 768px) {
    margin-top: 25rem;
  }
`;

export default function Home() {
  return (
    <div>
      <Head title="Worex Landing Page" />

      <Hero data={websiteData.hero} />
      <Main>
        <About />
      </Main>
    </div>
  );
};
