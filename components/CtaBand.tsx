import SwapButton from "./SwapButton";
import ui from "./ui.module.css";
import styles from "./CtaBand.module.css";

/** Light blue call-to-action block that closes most inner pages. */
export default function CtaBand({
  title,
  text,
  href,
  label,
  flushTop = false,
}: {
  title: React.ReactNode;
  text: React.ReactNode;
  href: string;
  label: string;
  flushTop?: boolean;
}) {
  return (
    <section className={`${ui.section} ${styles.section} ${flushTop ? ui.flushTop : ""}`}>
      <div className="container">
        <div className={styles.band}>
          <div className={styles.copy}>
            <h2 className={ui.h2Sm}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
          <SwapButton href={href} label={label} variant="light" />
        </div>
      </div>
    </section>
  );
}
