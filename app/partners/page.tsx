import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import ui from "@/components/ui.module.css";
import { COORDINATOR, PARTNERS } from "./data";
import PartnerMap from "./PartnerMap";
import styles from "./partners.module.css";

export const metadata: Metadata = {
  title: "Partners — PackAhead",
  description:
    "Universities, research centres and companies that each cover a link in the chain, from enzymes and biotechnology to film production, packaging and recycling.",
};

const FACTS = [
  { value: "13 partners", label: "One consortium" },
  { value: "VTT", label: "Coordinator, Finland" },
  { value: "Europe + Korea", label: "Geographical reach" },
  { value: "Research + industry", label: "Side by side" },
];

export default function PartnersPage() {
  return (
    <main>
      <PageHeader
        title={
          <>
            The partners <br />
            behind PackAhead.
          </>
        }
        intro="Universities, research centres and companies that each cover a link in the chain, from enzymes and biotechnology to film production, packaging and recycling."
        facts={FACTS}
      />

      {/* Coordinator */}
      <section className={`${ui.section} ${ui.flushBottom}`}>
        <div className={`container ${ui.stackSm}`}>
          <Reveal>
            <h2 className={ui.h2}>Led from Finland</h2>
          </Reveal>
          <Reveal>
            <div className={styles.coord}>
              {/* Placeholder until the VTT visual is supplied. */}
              <div className={`${styles.logo} ${styles.coordVisual}`}>VTT visual</div>
              <div className={styles.coordCopy}>
                <span className={ui.label}>{COORDINATOR.kind}</span>
                <h3 className={ui.cardTitleLg}>{COORDINATOR.name}</h3>
                <p className={`${ui.body} ${styles.coordText}`}>
                  VTT coordinates PackAhead and keeps the partners working towards one goal.
                  In the lab, its automated biofoundry builds the production strains and
                  screens them for the best enzyme activity.
                </p>
                <a href={COORDINATOR.url} className={ui.visit}>
                  Visit website <span className={ui.arr} aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All partners */}
      <section id="partners" className={`${ui.section} ${styles.allPartners}`}>
        <div className={`container ${ui.stackMd}`}>
          <Reveal>
            <h2 className={ui.h2}>Every link in the chain</h2>
          </Reveal>
          <ul className={styles.grid}>
            {PARTNERS.map((p) => (
              <li key={p.id}>
                <a href={p.url} className={`${ui.linkCard} ${styles.card}`}>
                  {/* Placeholder until partner logos are supplied. */}
                  <div className={styles.logo}>{p.logo}</div>
                  <span className={ui.label}>{p.kind}</span>
                  <h3 className={ui.cardTitle}>{p.name}</h3>
                  <p className={ui.body}>{p.role}</p>
                  <span className={ui.visit}>
                    Visit website <span className={ui.arr} aria-hidden="true">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where we are */}
      <section className={`${ui.section} ${styles.where}`}>
        <div className={`container ${ui.stackMd}`}>
          <div className={ui.two}>
            <h2 className={ui.h2}>
              From Finland <br />
              to South Korea
            </h2>
            <p className={`${ui.leadAside} ${styles.whereText}`}>
              The consortium spans Europe from north to south, with a link to South Korea
              through Ghent University Global Campus. Pick a partner to see where it is
              based.
            </p>
          </div>
          <PartnerMap />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Connected to the S3 <br />
            Partnership Food Packaging
          </>
        }
        text="PackAhead works with this European network of cluster organisations to bring its results to companies across the food packaging sector."
        href="/connected-initiatives"
        label="SEE CONNECTED INITIATIVES"
      />

      <SiteFooter />
    </main>
  );
}
