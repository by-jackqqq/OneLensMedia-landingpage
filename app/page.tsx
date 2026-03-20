import AboutUs from "@/components/AboutUs";
import EventMarquee from "@/components/EventMarquee";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <EventMarquee />
      <Portfolio/>
    </>
  );
}