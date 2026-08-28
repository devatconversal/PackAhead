import styles from "./AuroraBackground.module.css";

export default function AuroraBackground({
  variant = "default",
}: {
  variant?: "default" | "deep";
}) {
  return (
    <div className={styles.aurora} aria-hidden="true">
      <div className={`${styles.vignette} ${variant === "deep" ? styles.deep : ""}`} />
      <div className={styles.noise} />
    </div>
  );
}
