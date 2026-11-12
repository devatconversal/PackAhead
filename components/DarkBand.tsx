import AuroraBackground from "./AuroraBackground";
import styles from "./DarkBand.module.css";

/** A full-width dark aurora section with rounded corners, for one dark moment mid-page. */
export default function DarkBand({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div id={id} className={styles.outer}>
      <div className={styles.panel}>
        <AuroraBackground />
        <div className={`frame-container ${styles.inner}`}>{children}</div>
      </div>
    </div>
  );
}
