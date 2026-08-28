import HeroFrame from "@/components/HeroFrame";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statement from "@/components/Statement";
import Pillars from "@/components/Pillars";
import Numbers from "@/components/Numbers";
import Deliverables from "@/components/Deliverables";
import Newsroom from "@/components/Newsroom";
import Partners from "@/components/Partners";
import Initiatives from "@/components/Initiatives";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <HeroFrame>
        <Hero />
        <About />
      </HeroFrame>
      <Statement />
      <Pillars />
      <Numbers />
      <Deliverables />
      <Newsroom />
      <Partners />
      <Initiatives />
      <SiteFooter />
    </main>
  );
}
