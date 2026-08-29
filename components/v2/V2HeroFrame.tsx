import styles from "./V2HeroFrame.module.css";

/**
 * Frames the header as a permanently bordered, rounded card — top and
 * bottom corners alike — that scrolls with the page like any normal
 * section. Its background is attached to the viewport (background-
 * attachment: fixed), so the card acts like a window onto a backdrop
 * that doesn't move: as the card scrolls up and off, the scenery
 * showing through it stays put. Unlike position:fixed, this is
 * naturally clipped to the card's own rounded shape as it scrolls.
 */
export default function V2HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className={styles.outer}>
      <div className={styles.frame}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
