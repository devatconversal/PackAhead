import HeroFrame from "@/components/HeroFrame";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statement from "@/components/Statement";
import Pillars from "@/components/Pillars";
import Numbers from "@/components/Numbers";
import Deliverables from "@/components/Deliverables";
import MediaCorner from "@/components/MediaCorner";
import Partners from "@/components/Partners";
import Initiatives from "@/components/Initiatives";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <HeroFrame>
        <Hero />
      </HeroFrame>
      <About />
      <Statement />
      <Pillars />
      <Numbers />
      <Deliverables />
      <Partners />
      <Initiatives />
      <MediaCorner />
      <SiteFooter />
    </main>
  );
}
