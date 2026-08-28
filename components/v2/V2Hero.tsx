import AuroraBackground from "../AuroraBackground";
import SiteNav from "../SiteNav";
import SwapButton from "../SwapButton";
import styles from "./V2Hero.module.css";

const PARTNER_WIDTHS = [128, 96, 146, 110, 132, 88, 120, 104];

export default function V2Hero() {
  return (
    <section id="top" className={styles.section}>
      <AuroraBackground />
      <div className={`container ${styles.inner}`}>
        <SiteNav />

        <div>
          <h1 className={styles.heading}>Advancing circular cellophane packaging.</h1>
          <div className={styles.subRow}>
            <p className={styles.sub}>
              AI-driven enzyme design and cellulose films for recyclable food packaging,
              developed by 18 European partners.
            </p>
            <SwapButton href="#about" label="DISCOVER THE PROJECT" variant="dark" />
          </div>

          <div className={styles.marqueeMask}>
            <div className={styles.marqueeTrack}>
              <div className={styles.marqueeGroup}>
                {PARTNER_WIDTHS.map((width, i) => (
                  <span key={i} className={styles.chip} style={{ width }} />
                ))}
              </div>
              <div className={styles.marqueeGroup} aria-hidden="true">
                {PARTNER_WIDTHS.map((width, i) => (
                  <span key={i} className={styles.chip} style={{ width }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
