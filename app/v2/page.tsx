import V2HeroFrame from "@/components/v2/V2HeroFrame";
import V2Hero from "@/components/v2/V2Hero";
import About from "@/components/About";
import Statement from "@/components/Statement";
import Pillars from "@/components/Pillars";
import Numbers from "@/components/Numbers";
import Deliverables from "@/components/Deliverables";
import Newsroom from "@/components/Newsroom";
import Partners from "@/components/Partners";
import Initiatives from "@/components/Initiatives";
import SiteFooter from "@/components/SiteFooter";

export default function HomeV2() {
  return (
    <main>
      <V2HeroFrame>
        <V2Hero />
      </V2HeroFrame>
      <About />
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
