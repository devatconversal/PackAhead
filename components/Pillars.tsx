import Reveal from "./Reveal";
import styles from "./Pillars.module.css";

const PILLARS = [
  {
    n: "01",
    title: "Production",
    text: "Optimising the production process of regenerated cellulose films, from feedstock and enzyme selection to bioprocess scale-up with hybrid models and a digital twin.",
    dark: false,
  },
  {
    n: "02",
    title: "Recycling",
    text: "Opening up recycling pathways for the films, supported by an optical identification system that sorts packaging automatically at end of life.",
    dark: false,
  },
  {
    n: "03",
    title: "AI throughout",
    text: "Artificial intelligence runs through the whole project: raw material composition, enzyme design, molecular simulation, film production conditions and recycling.",
    dark: true,
  },
];

export default function Pillars() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <h2 className={styles.heading}>Three pillars carry the project</h2>
        </Reveal>
        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.n} delay={i * 90}>
              <div className={`${styles.card} ${pillar.dark ? styles.cardDark : ""}`}>
                <span className={styles.number}>{pillar.n}</span>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardText}>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
