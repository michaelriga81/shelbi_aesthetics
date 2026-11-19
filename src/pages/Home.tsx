import Hero from "../components/Hero";
import LogoBar from "../components/LogoBar";
import Services from "../components/Services";
import Specials from "../components/Specials";
import About from "../components/About";
import Financing from "../components/Financing";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoBar />
      <Services />
      <Specials />
      <About />
      <Financing />
      <Testimonials />
    </main>
  );
}
