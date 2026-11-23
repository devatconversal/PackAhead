import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./Initiatives.module.css";

const ITEMS = [
  {
    label: "Food packaging network",
    title: "S3 Partnership Food Packaging",
    text: "A European network of clusters and regions that gives PackAhead a direct line to companies across the food packaging sector.",
    href: "/connected-initiatives#network",
  },
  {
    label: "Sister project · same EU call",
    title: "BioValueAI",
    text: "A Horizon Europe project that brings AI and digital twins to other climate-neutral, bio-based value chains.",
    href: "/connected-initiatives#projects",
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <Link href={item.href} className={styles.card}>
                <span className={styles.label}>{item.label}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
