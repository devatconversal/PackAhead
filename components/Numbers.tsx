import FramedPanel from "./FramedPanel";
import Reveal from "./Reveal";
import styles from "./Numbers.module.css";

const STATS = [
  { value: "18", label: "partners across Europe" },
  { value: "4", label: "years, starting September 2026" },
  { value: "TRL 7", label: "demonstration of the cellulose films" },
  { value: "2032", label: "target for deployment at scale" },
];

export default function Numbers() {
  return (
    <section className={styles.section}>
      <FramedPanel flushTop>
        <div className={styles.content}>
          <Reveal>
            <h2 className={styles.heading}>An innovation action, built on collaboration</h2>
          </Reveal>
          <div className={styles.grid}>
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className={styles.stat}>
                  <span className={styles.value}>{stat.value}</span>
                  <span className={styles.label}>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </FramedPanel>
    </section>
  );
}
