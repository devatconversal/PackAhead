import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import DarkBand from "@/components/DarkBand";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import ui from "@/components/ui.module.css";
import styles from "./initiatives.module.css";

export const metadata: Metadata = {
  title: "Connected initiatives — PackAhead",
  description:
    "PackAhead plugs into the European S3 Partnership on Food Packaging and works alongside its sister project BioValueAI, funded under the same EU call.",
};

const FACTS = [
  { value: "S3 Partnership", label: "Food packaging network" },
  { value: "Sister project", label: "Same EU call" },
  { value: "Horizon Europe", label: "EU framework" },
];

const FIVE_RS = ["REFUSE", "REDUCE", "REUSE", "RECYCLE", "RENEWABLE"];

const S3_FACTS = [
  { label: "Established", value: "2022" },
  { label: "Lead", value: "Pack4Food, Flanders, Belgium" },
  { label: "Leading partner", value: "Flanders' FOOD, Flanders, Belgium" },
  { label: "Co-lead", value: "Natureef, Zachodniopomorskie, Poland" },
  {
    label: "Countries",
    value: "Belgium, Finland, France, Hungary, Italy, Latvia, Lithuania, Poland, Slovenia, Spain and Sweden",
  },
];

// Source: CORDIS fact sheet, grant agreement 101290181.
const SISTER_PROJECT_URL = "https://cordis.europa.eu/project/id/101290181";
const USE_CASES = [
  "Cacao valorisation",
  "Bio-based coatings",
  "Precision fermentation",
  "Hemp chain intelligence",
  "Biorefinery feedstock optimisation",
];

const SISTER_FACTS = [
  { label: "Coordinator", value: "Wageningen Research, the Netherlands" },
  { label: "Duration", value: "June 2026 – May 2030" },
  { label: "Call", value: "HORIZON-CL6-2025-01-CIRCBIO-09" },
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
        intro="PackAhead does not work alone. It plugs into a European food packaging network and works alongside a sister project that tackles the same challenge from another angle."
        facts={FACTS}
      />

      {/* S3 Partnership */}
      <section id="network" className={ui.section}>
        <div className={`container ${ui.stack}`}>
          <div className={ui.two}>
            <h2 className={ui.h2}>
              A direct line to the <br />
              food packaging sector
            </h2>
            <p className={ui.leadAside}>
              The S3 Partnership on Food Packaging connects clusters and regions that want to
              make Europe&apos;s food packaging value chain sustainable and resilient.
              Pack4Food, one of the PackAhead partners, is among its driving forces. That gives
              the project a direct line to companies across the sector, and a way to bring its
              results to the people who will use them.
            </p>
          </div>

          <Reveal>
            <div className={styles.panel}>
              <div className={styles.panelCopy}>
                <h3 className={ui.cardTitleLg}>
                  Sustainable food packaging in a circular economy, <br />
                  built on five R&apos;s
                </h3>
                <ul className={styles.rs} aria-label="The five R's">
                  {FIVE_RS.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <a
                    href="https://ec.europa.eu/regional_policy/policy/communities-and-networks/s3-community-of-practice/partnership_agrifood_food_packaging_en"
                    className={ui.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the partnership <span className={ui.arr} aria-hidden="true">→</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/s3foodpackaging"
                    className={ui.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow S3FP on LinkedIn <span className={ui.arr} aria-hidden="true">→</span>
                  </a>
                </div>
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

      {/* Sister project: the one dark moment on this page. Left: what and who
          (columns 1–5). Right: where it is tested (columns 7–12). */}
      <DarkBand id="projects">
        <div className={styles.sister}>
          <div className={styles.sisterCopy}>
            <h2 className={`${ui.h2} ${ui.onDark}`}>
              A sister project <br />
              from the same call
            </h2>
            <p className={`${ui.lead} ${ui.onDarkSoft}`}>
              BioValueAI is funded under the same Horizon Europe topic as PackAhead. It uses AI
              and digital twins to build climate-neutral, circular bio-based value chains.
            </p>
            <dl className={styles.sisterFacts}>
              {SISTER_FACTS.map((row) => (
                <div key={row.label} className={styles.sisterFact}>
                  <dt className={styles.sisterFactLabel}>{row.label}</dt>
                  <dd className={styles.sisterFactValue}>{row.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={SISTER_PROJECT_URL}
              className={`${ui.visit} ${ui.visitDark}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View BioValueAI on CORDIS <span className={ui.arr} aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.useCasePanel}>
            <div className={styles.useCaseHead}>
              <h3 className={`${ui.cardTitleLg} ${ui.onDark}`}>Five industry use cases</h3>
              <p className={`${ui.body} ${ui.onDarkSoft}`}>
                The bio-based value chains where BioValueAI tests its tools.
              </p>
            </div>
            <ol className={styles.useCaseList}>
              {USE_CASES.map((useCase, i) => (
                <li key={useCase} className={styles.useCaseItem}>
                  <span className={ui.glassNumber}>{pad(i)}</span>
                  <span className={styles.useCaseName}>{useCase}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </DarkBand>

      <CtaBand
        title="Working on something related?"
        text="If your project or cluster works on bio-based packaging, cellulose or AI for bioprocessing, we would like to hear from you. Let's find out where our work connects."
        href="/contact"
        label="GET IN TOUCH"
      />

      <SiteFooter />
    </main>
  );
}
