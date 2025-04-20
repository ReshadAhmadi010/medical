import Image from "next/image";
import Nav from "./Header/Nav";
import LandingPage from "./landingpage/landing-page";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";
import Footer from "./Footer/footer";

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
      <Footer/>
    </>
  );
}
