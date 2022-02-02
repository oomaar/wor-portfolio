import { Hero } from "../components";
import { Head } from "../global/Head";
import websiteData from "../data/websiteData.json";

export default function Home() {
  return (
    <div>
      <Head title="Worex Landing Page" />

      <Hero data={websiteData.hero} />
    </div>
  );
};
