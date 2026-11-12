import Link from "next/link";
import styles from "./SwapButton.module.css";

type Props = {
  label: string;
  /** Kept for existing call sites; both variants look the same. */
  variant?: "dark" | "light";
} & ({ href: string; type?: never } | { href?: never; type: "submit" | "button" });

/**
 * The two-part blue/mint button. Pass `href` for a link, or `type` to
 * render a real <button> (form submits).
 */
export default function SwapButton({ href, type, label }: Props) {
  const className = styles.group;
  const inner = (
    <>
      <span className={styles.main}>{label}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  );

  if (href === undefined) {
    return (
      <button type={type} className={`${className} ${styles.button}`}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
