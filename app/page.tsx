import Nav from "./components/Nav";
import Hero from "./components/Hero";
import What from "./components/What";
import Chiefs from "./components/Chiefs";
import HowItWorks from "./components/HowItWorks";
import Why from "./components/Why";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen w-full">
      <Nav />
      <Hero />
      <What />
      <Chiefs />
      <HowItWorks />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
