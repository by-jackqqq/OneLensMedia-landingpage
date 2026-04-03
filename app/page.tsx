import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import EventMarquee from "@/components/EventMarquee";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio"


export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <EventMarquee />
      <Portfolio />
      <HowItWorks />
      <Faq />
      <Contact />
    </>
  );
}