import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Summary from "@/components/Summary";
import Timeline from "@/components/Timeline";
import Awards from "@/components/Awards";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Summary />
        <Timeline />
        <Awards />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
