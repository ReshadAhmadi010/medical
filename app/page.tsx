import Image from "next/image";
import Nav from "./Header/Nav";
import LandingPage from "../app/landingpage/page";
import Section2 from "./section2/page";
import Section3 from "./section3/page";
import Section4 from "./section4/page";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="px-[96px]">
        <LandingPage />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}
