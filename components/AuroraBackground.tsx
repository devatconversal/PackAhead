import styles from "./AuroraBackground.module.css";

export default function AuroraBackground({
  variant = "default",
}: {
  variant?: "default" | "deep";
}) {
  return (
    <div
      className={`${styles.aurora} ${variant === "deep" ? styles.deep : ""}`}
      aria-hidden="true"
    >
      <div className={styles.noise} />
    </div>
  );
}
