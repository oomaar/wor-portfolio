import { About, Hero } from "../components";
import { Head } from "../global/Head";
import websiteData from "../data/websiteData.json";
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 32rem;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 28rem;
    padding: 0 0.5rem;
  }
`;

export default function Home() {
  return (
    <div>
      <Head title="Worex Landing Page" />

      <Hero data={websiteData.hero} />
      <Main>
        <About data={websiteData.about} />
      </Main>
    </div>
  );
};
