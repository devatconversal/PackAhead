import V2Hero from "@/components/v2/V2Hero";
import V2About from "@/components/v2/V2About";
import Statement from "@/components/Statement";
import Pillars from "@/components/Pillars";
import Numbers from "@/components/Numbers";
import Deliverables from "@/components/Deliverables";
import Newsroom from "@/components/Newsroom";
import Partners from "@/components/Partners";
import Initiatives from "@/components/Initiatives";
import V2Footer from "@/components/v2/V2Footer";

export default function HomeV2() {
  return (
    <main>
      <V2Hero />
      <V2About />
      <Statement />
      <Pillars />
      <Numbers />
      <Deliverables />
      <Newsroom />
      <Partners />
      <Initiatives />
      <V2Footer />
    </main>
  );
}
