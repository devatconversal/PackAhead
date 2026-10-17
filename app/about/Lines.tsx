import styles from "./about.module.css";

/** Title lines that break on wide screens and run on as one line on phones. */
export default function Lines({ lines }: { lines: string[] }) {
  return lines.map((line, i) => (
    <span key={line}>
      {i > 0 && <br className={styles.br} />}
      {i > 0 && " "}
      {line}
    </span>
  ));
}
