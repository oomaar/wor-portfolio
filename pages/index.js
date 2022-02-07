import { About, Hero, Solutions } from "../components";
import { Head } from "../global/Head";
import websiteData from "../data/websiteData.json";
import styled from 'styled-components';

const Main = styled.main`
  padding: 0 1rem;
  width: 70%;
  margin: 32rem auto 0;

  @media screen and (max-width: 768px) {
    margin-top: 28rem;
    margin: 28rem auto 0;
    padding: 0 0.5rem;
    width: 90%;
  }
`;

export default function Home() {
  return (
    <div>
      <Head title="Worex Landing Page" />

      <Hero data={websiteData.hero} />
      <Main>
        <About data={websiteData.about} />
        <Solutions data={websiteData.solutions} />
      </Main>
    </div>
  );
};
