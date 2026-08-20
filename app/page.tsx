import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustedBy from "@/components/TrustedBy";
import Problem from "@/components/Problem";
import Capabilities from "@/components/Capabilities";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import WorkWithMe from "@/components/WorkWithMe";
import WhyMe from "@/components/WhyMe";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import Awards from "@/components/Awards";
import Moments from "@/components/Moments";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <TrustedBy />
        <Moments />
        <Problem />
        <Capabilities />
        <WhoIWorkWith />
        <WorkWithMe />
        <WhyMe />
        <Timeline />
        <CaseStudies />
        <Awards />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
