import Reveal from "./Reveal";
import styles from "./Deliverables.module.css";

const ITEMS = [
  "Tailor-made enzymes designed with in silico engineering and de novo design, built on genomic, proteomic and structural databases.",
  "Regenerated cellulose films demonstrated at TRL 7 using three cellulose feedstocks.",
  "Robotic automated strain construction through the IBISBA accelerator.",
  "Molecular simulations on European supercomputer infrastructure to screen plasticisers faster.",
  "Machine learning models and a cost modelling framework that optimise film production conditions.",
  "An AI impact assessment and a regulatory monitoring tool covering the project tools.",
];

export default function Deliverables() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <Reveal>
            <h2 className={styles.heading}>What the project will deliver</h2>
          </Reveal>
          <div className={styles.grid}>
            {ITEMS.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 90}>
                <p className={styles.item}>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
