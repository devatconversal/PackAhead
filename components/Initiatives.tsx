import Reveal from "./Reveal";
import styles from "./Initiatives.module.css";

const ITEMS = [1, 2, 3];

export default function Initiatives() {
  return (
    <section id="initiatives" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {ITEMS.map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <a href="#" className={styles.card}>
                <span className={styles.badge} style={{ width: 84 + i * 16 }} />
                <h3 className={styles.title}>Connected initiative</h3>
                <p className={styles.text}>
                  One line on how this project relates to PackAhead, with a link to
                  its website.
                </p>
                <span className={styles.arrow}>→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
