import styles from "./SwapButton.module.css";

export default function SwapButton({
  href,
  label,
  variant = "dark",
}: {
  href: string;
  label: string;
  variant?: "dark" | "light";
}) {
  return (
    <a
      href={href}
      className={`${styles.group} ${variant === "light" ? styles.light : styles.dark}`}
    >
      <span className={styles.main}>{label}</span>
      <span className={styles.arrow}>
        <span className={styles.track}>
          <span className={styles.arrowIcon}>→</span>
          <span className={styles.arrowIcon}>→</span>
        </span>
      </span>
    </a>
  );
}
