import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustedBy from "@/components/TrustedBy";
import Problem from "@/components/Problem";
import EcosystemFlow from "@/components/EcosystemFlow";
import Capabilities from "@/components/Capabilities";
import Framework from "@/components/Framework";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import WorkWithMe from "@/components/WorkWithMe";
import WhyMe from "@/components/WhyMe";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import Awards from "@/components/Awards";
import Moments from "@/components/Moments";
import Insights from "@/components/Insights";
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
        <Problem />
        <EcosystemFlow />
        <Capabilities />
        <Framework />
        <WhoIWorkWith />
        <WorkWithMe />
        <WhyMe />
        <Timeline />
        <CaseStudies />
        <Awards />
        <Moments />
        <Insights />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
