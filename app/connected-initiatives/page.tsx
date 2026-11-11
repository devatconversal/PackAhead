import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DarkBand from "@/components/DarkBand";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import ui from "@/components/ui.module.css";
import styles from "./initiatives.module.css";

export const metadata: Metadata = {
  title: "Connected initiatives — PackAhead",
  description:
    "PackAhead plugs into European networks, shared research infrastructure and sister projects that tackle the same challenge from other angles.",
};

const JUMPS = [
  { value: "S3 Partnership", label: "Food packaging network", href: "#network" },
  { value: "IBISBA", label: "Biotech infrastructure", href: "#infrastructure" },
  { value: "Sister projects", label: "Same EU call", href: "#projects" },
  { value: "Horizon Europe", label: "EU framework", href: "#framework" },
];

const FIVE_RS = ["REFUSE", "REDUCE", "REUSE", "RECYCLE", "RENEWABLE"];

const S3_FACTS = [
  { label: "Established", value: "2022" },
  { label: "Lead region", value: "Flanders, Belgium, with Pack4Food and Flanders' FOOD" },
  { label: "Co-lead", value: "Natureef, Zachodniopomorskie, Poland" },
  {
    label: "Countries",
    value: "Belgium, Finland, France, Hungary, Italy, Latvia, Lithuania, Poland, Slovenia, Spain and Sweden",
  },
];

const CYCLE = [
  { title: "Design", text: "AI designs and improves the enzymes, from better variants to new designs from scratch." },
  { title: "Build", text: "Robots build the production strains, at a speed no lab team can match by hand." },
  { title: "Test", text: "Every strain is screened to find the ones with the best enzyme activity." },
  { title: "Learn", text: "The results feed back into the models, so each round starts closer to the goal." },
];

// Placeholder projects from the design; replace with the real sister projects and links.
const SISTER_PROJECTS = [
  {
    meta: "Finland · 2026 – 2030",
    title: "Digital twins for biorefineries",
    text: "Builds digital twins that let bio-based plants test process changes before making them.",
    url: "#",
  },
  {
    meta: "Spain · 2026 – 2029",
    title: "AI for bio-based fibres",
    text: "Uses machine learning to design stronger fibres from agricultural residues.",
    url: "#",
  },
  {
    meta: "The Netherlands · 2026 – 2030",
    title: "Smart sorting for bioplastics",
    text: "Develops sensors and AI that recognise and sort bio-based plastics at end of life.",
    url: "#",
  },
];

const FRAMEWORK = [
  {
    title: "Programme",
    text: "Horizon Europe, Cluster 6: Food, Bioeconomy, Natural Resources, Agriculture and Environment",
  },
  { title: "Area", text: "Bio-based innovation systems in the EU bioeconomy" },
  {
    title: "Topic",
    text: "Digitalisation and AI of climate-neutral bio-based value chains (HORIZON-CL6-2025-01-CIRCBIO-09)",
  },
  { title: "Action type", text: "Innovation Action" },
  { title: "Regulation", text: "Packaging designed to comply with the EU Packaging and Packaging Waste Regulation" },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function ConnectedInitiativesPage() {
  return (
    <main>
      <PageHeader
        title={
          <>
            Connected <br />
            initiatives.
          </>
        }
        intro="PackAhead does not work alone. It plugs into European networks, shared research infrastructure and sister projects that tackle the same challenge from other angles."
        facts={JUMPS}
      />

      {/* S3 Partnership */}
      <section id="network" className={`${ui.section}`}>
        <div className={`container ${ui.stack}`}>
          <div className={ui.two}>
            <h2 className={ui.h2}>
              A direct line to the <br />
              food packaging sector
            </h2>
            <p className={ui.leadAside}>
              The S3 Partnership on Food Packaging connects clusters, research centres and
              regions that want to make Europe&apos;s food packaging value chain sustainable
              and resilient. Pack4Food, one of the PackAhead partners, is among its driving
              forces. That gives the project a direct line to companies across the sector,
              and a way to bring its results to the people who will use them.
            </p>
          </div>

          <Reveal>
            <div className={styles.panel}>
              <div className={styles.panelCopy}>
                <h3 className={ui.cardTitleLg}>
                  Sustainable food packaging in a circular economy, built on five R&apos;s
                </h3>
                <ul className={styles.chips}>
                  {FIVE_RS.map((r) => (
                    <li key={r} className={`${styles.chip} ${r === "RENEWABLE" ? styles.chipOn : ""}`}>
                      {r}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ec.europa.eu/regional_policy/policy/communities-and-networks/s3-community-of-practice/partnership_agrifood_food_packaging_en"
                  className={ui.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the partnership <span className={ui.arr} aria-hidden="true">→</span>
                </a>
              </div>
              <div className={ui.rows}>
                {S3_FACTS.map((row) => (
                  <div key={row.label} className={`${ui.row} ${ui.rowNarrow}`}>
                    <span className={ui.label}>{row.label}</span>
                    <span className={ui.body}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IBISBA */}
      <DarkBand id="infrastructure">
        <div className={ui.two}>
          <h2 className={`${ui.h2} ${ui.onDark}`}>
            Built on European <br />
            research infrastructure
          </h2>
          <p className={`${ui.leadAside} ${ui.onDarkSoft}`}>
            IBISBA, the Industrial Biotechnology Innovation and Synthetic Biology
            Accelerator, is a European research infrastructure on the ESFRI roadmap. It
            opens up labs, robots and expertise to researchers and companies. PackAhead uses
            its automated facilities to build and test the production strains behind the
            project&apos;s enzymes.
          </p>
        </div>
        <div className={ui.glassGrid}>
          {CYCLE.map((step, i) => (
            <div key={step.title} className={ui.glassCard}>
              <span className={ui.glassNumber}>{pad(i)}</span>
              <h3 className={ui.cardTitle}>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className={ui.note}>
          <span className={ui.noteLabel}>ON ITS WAY TO AN ERIC</span>
          <p>
            Through the IBISBA-DIALS project (2024 to 2026), IBISBA is becoming a European
            Research Infrastructure Consortium: a permanent legal structure that keeps these
            facilities open to future projects.
          </p>
          <a
            href="https://www.ibisba.eu/"
            className={`${ui.visit} ${ui.visitDark}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit IBISBA <span className={ui.arr} aria-hidden="true">→</span>
          </a>
        </div>
      </DarkBand>

      {/* Sister projects */}
      <section id="projects" className={`${ui.section}`}>
        <div className={`container ${ui.stackMd}`}>
          <div className={ui.two}>
            <h2 className={ui.h2}>
              Sister projects <br />
              from the same call
            </h2>
            <p className={ui.leadAside}>
              PackAhead is funded under a Horizon Europe topic on digitalisation and
              artificial intelligence in climate-neutral, bio-based value chains. These
              projects work on the same challenge in other value chains.
            </p>
          </div>
          <ul className={styles.projects}>
            {SISTER_PROJECTS.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className={styles.projectWrap}>
                  <a href={p.url} className={`${ui.linkCard} ${styles.project}`}>
                    <span className={ui.label}>{p.meta}</span>
                    <h3 className={ui.cardTitleLg}>{p.title}</h3>
                    <p className={ui.body}>{p.text}</p>
                    <span className={ui.visit}>
                      Visit website <span className={ui.arr} aria-hidden="true">→</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EU framework */}
      <section id="framework" className={`${ui.section} ${ui.flushTop}`}>
        <div className={ui.greyBand}>
          <div className={`container ${ui.why}`}>
            <div className={ui.whyCopy}>
              <h2 className={ui.h2}>
                Part of a bigger <br />
                European picture
              </h2>
              <p className={ui.lead}>
                PackAhead is an Innovation Action funded by the European Union through
                Horizon Europe. Its results feed into Europe&apos;s move towards a circular,
                climate-neutral bioeconomy.
              </p>
              <a
                href="https://cordis.europa.eu/project/id/101287475"
                className={ui.visit}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the project on CORDIS <span className={ui.arr} aria-hidden="true">→</span>
              </a>
            </div>
            <div className={ui.whyList}>
              {FRAMEWORK.map((f) => (
                <div key={f.title} className={ui.whyItem}>
                  <h3 className={ui.cardTitleLg}>{f.title}</h3>
                  <p className={ui.body}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        flushTop
        title="Working on something related?"
        text="If your project or cluster works on bio-based packaging, cellulose or AI for bioprocessing, we would like to hear from you. Let's find out where our work connects."
        href="/contact"
        label="GET IN TOUCH"
      />

      <SiteFooter />
    </main>
  );
}
