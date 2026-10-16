import SwapButton from "./SwapButton";
import Reveal from "./Reveal";
import styles from "./MediaCorner.module.css";

const DOCUMENTS = [
  {
    title: "PackAhead project factsheet",
    category: "FACTSHEET",
    format: "PDF",
    date: "SEP 2026",
  },
  {
    title: "Press release: PackAhead starts its four year programme",
    category: "PRESS RELEASE",
    format: "PDF",
    date: "SEP 2026",
  },
  {
    title: "Public deliverable: data management plan",
    category: "DELIVERABLE",
    format: "PDF",
    date: "SEP 2026",
  },
  {
    title: "Logo and visual identity pack",
    category: "MEDIA KIT",
    format: "ZIP",
    date: "SEP 2026",
  },
];

export default function MediaCorner() {
  return (
    <section id="media" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <div>
              <h2 className={styles.heading}>Media corner</h2>
              <p className={styles.intro}>
                Public documents from the project: factsheets, press releases, public
                deliverables and visual material, free to download.
              </p>
            </div>
            <SwapButton href="#media" label="VIEW ALL DOCUMENTS" variant="light" />
          </div>
        </Reveal>
        <div className={styles.list}>
          {DOCUMENTS.map((doc, i) => (
            <Reveal key={doc.title} delay={i * 60}>
              <a href="#media" className={styles.row}>
                <div className={styles.thumb} aria-hidden="true">
                  <span className={styles.thumbCategory}>{doc.category}</span>
                  <span className={styles.thumbFormat}>{doc.format}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.title}>{doc.title}</span>
                  <span className={styles.date}>
                    {doc.category} · {doc.format} · {doc.date}
                  </span>
                </div>
                <span className={styles.arrow}>
                  <span className={styles.arrowTrack}>
                    <span className={styles.arrowIcon}>→</span>
                    <span className={styles.arrowIcon}>→</span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
