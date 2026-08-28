import AuroraBackground from "./AuroraBackground";
import styles from "./FramedPanel.module.css";

/**
 * The permanent version of the dark, rounded, inset panel used by the
 * hero. Unlike the hero frame this one never flattens on scroll — it is
 * the standard treatment for a dark full-bleed moment inside an
 * otherwise light page (stats block, footer).
 */
export default function FramedPanel({
  children,
  id,
  variant = "default",
  flushTop = false,
}: {
  children: React.ReactNode;
  id?: string;
  variant?: "default" | "deep";
  flushTop?: boolean;
}) {
  return (
    <div className={styles.outer} style={flushTop ? { paddingTop: 0 } : undefined}>
      <div id={id} className={styles.panel}>
        <AuroraBackground variant={variant} />
        <div className={`container ${styles.inner}`}>{children}</div>
      </div>
    </div>
  );
}
