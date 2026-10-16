import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutSections from "../AboutSections";
import styles from "../about.module.css";

export const metadata: Metadata = {
  title: "About (V1) — PackAhead",
  description:
    "PackAhead is a four year research and innovation project that uses artificial intelligence to improve how cellulose films are produced and recycled.",
};

const FACTS = [
  { value: "4 years", label: "PROJECT DURATION" },
  { value: "1 Sep 2026", label: "OFFICIAL START" },
  { value: "18 partners", label: "RESEARCH AND INDUSTRY" },
  { value: "TRL 7", label: "DEMONSTRATED IN PRACTICE" },
];

export default function AboutV1Page() {
  return (
    <main>
      <header id="top" className={styles.heroOuter}>
        <div className={styles.heroFrame}>
          <div className={`container ${styles.heroInner}`}>
            <SiteNav active="/about" />
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                About <br />
                Pack Ahead.
              </h1>
              <p className={styles.heroText}>
                PackAhead is a four year research and innovation project that uses
                artificial intelligence to improve how cellulose films are produced and
                recycled, so food packaging can be bio-based, affordable and circular.
              </p>
            </div>
            <dl className={styles.heroFacts}>
              {FACTS.map((fact) => (
                <div key={fact.label} className={styles.heroFact}>
                  <dt className={styles.heroFactLabel}>{fact.label}</dt>
                  <dd className={styles.heroFactValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      <AboutSections withIntroCopy />
      <SiteFooter />
    </main>
  );
}
