import Image from "next/image";
import Nav from "./Header/Nav";
import LandingPage from "../app/landingpage/page";
import Section2 from "./section2/page";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="px-[96px]">
        <LandingPage />
        <Section2 />
      </main>
    </>
  );
}
