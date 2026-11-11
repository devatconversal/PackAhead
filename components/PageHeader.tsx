import Link from "next/link";
import AuroraBackground from "./AuroraBackground";
import SiteNav from "./SiteNav";
import styles from "./PageHeader.module.css";

export type Fact = { value: string; label: string; href?: string };

/**
 * Header for the inner pages: the dark aurora card from the homepage,
 * holding the navigation, a large title, an intro line and optionally
 * a row of key facts (which can double as jump links).
 */
export default function PageHeader({
  title,
  intro,
  facts,
}: {
  title: React.ReactNode;
  intro: string;
  facts?: Fact[];
}) {
  return (
    <header id="top" className={styles.outer}>
      <div className={styles.frame}>
        <AuroraBackground />
        <div className={`${styles.inner} ${facts ? styles.withFacts : ""}`}>
          <SiteNav />

          <div className={styles.copy}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.intro}>{intro}</p>
          </div>

          {facts && (
            <div className={styles.facts}>
              {facts.map((fact) =>
                fact.href ? (
                  <Link key={fact.value} href={fact.href} className={`${styles.fact} ${styles.jump}`}>
                    <span className={styles.factValue}>{fact.value}</span>
                    <span className={styles.factLabel}>
                      {fact.label} <span aria-hidden="true">↓</span>
                    </span>
                  </Link>
                ) : (
                  <div key={fact.value} className={styles.fact}>
                    <span className={styles.factValue}>{fact.value}</span>
                    <span className={styles.factLabel}>{fact.label}</span>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
