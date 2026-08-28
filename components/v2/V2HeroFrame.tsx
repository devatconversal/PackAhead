import styles from "./V2HeroFrame.module.css";

/**
 * Frames the header in the same inset, rounded card used on the main
 * homepage. Unlike there, the border never animates away: the header
 * stays pinned in place as the visitor scrolls, and the light
 * background of the section that follows slides up and over it,
 * covering it like a curtain, instead of the header scrolling off.
 */
export default function V2HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.stickyWrap}>
      <div className={styles.outer}>
        <div className={styles.frame}>{children}</div>
      </div>
    </div>
  );
}
