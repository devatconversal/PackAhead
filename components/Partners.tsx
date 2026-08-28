import SwapButton from "./SwapButton";
import Reveal from "./Reveal";
import styles from "./Partners.module.css";

const LOGO_WIDTHS = [96, 120, 84, 110, 92, 126, 108, 88, 118, 96, 132, 100];

export default function Partners() {
  return (
    <section id="partners" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Research institutions and companies, working on the same value chain
            </h2>
            <div className={styles.copy}>
              <p className={styles.text}>
                The consortium covers enzyme engineering, film production, recycling
                and market implementation. PackAhead also works with the S3
                Partnership Food Packaging, a European network of cluster
                organisations.
              </p>
              <SwapButton href="#partners" label="SEE ALL PARTNERS" variant="light" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.grid}>
            {LOGO_WIDTHS.map((width, i) => (
              <div key={i} className={styles.cell}>
                <span className={styles.placeholder} style={{ width }} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
