import Image from "next/image";
import SwapButton from "./SwapButton";
import Reveal from "./Reveal";
import styles from "./Newsroom.module.css";

const ITEMS = [
  {
    title: "PackAhead starts its four year programme",
    date: "01 SEP 2026",
    image:
      "https://images.unsplash.com/photo-1618053448748-b7251851d014?auto=format&fit=crop&w=400&q=80",
    alt: "Research team reviewing results in a laboratory",
  },
  {
    title: "Enzyme design work opens with the first database screening",
    date: "01 SEP 2026",
    image:
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=400&q=80",
    alt: "Pipette handling a sample for enzyme screening",
  },
  {
    title: "Joining forces with the S3 Partnership Food Packaging",
    date: "01 SEP 2026",
    image:
      "https://images.unsplash.com/photo-1630959299280-874fe62c7d83?auto=format&fit=crop&w=400&q=80",
    alt: "Researchers discussing project partnership",
  },
  {
    title: "First public deliverables available in the media corner",
    date: "01 SEP 2026",
    image:
      "https://images.unsplash.com/photo-1670291698937-f115debe9141?auto=format&fit=crop&w=400&q=80",
    alt: "Roll of packaging film in a production facility",
  },
];

export default function Newsroom() {
  return (
    <section id="media" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <h2 className={styles.heading}>Latest from the project</h2>
            <SwapButton href="#media" label="VISIT THE MEDIA CORNER" variant="light" />
          </div>
        </Reveal>
        <div className={styles.list}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <a href="#media" className={styles.row}>
                <div className={styles.thumb}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="200px"
                    className={styles.thumbImage}
                  />
                </div>
                <div className={styles.meta}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
