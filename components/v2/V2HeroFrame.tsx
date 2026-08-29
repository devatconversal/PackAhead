import styles from "./V2HeroFrame.module.css";

/**
 * Frames the header as a permanently bordered, rounded card — top and
 * bottom corners alike — that scrolls with the page like any normal
 * section. The backdrop is a real position:fixed layer, clipped to the
 * card's rounded shape by the card's own overflow:hidden, so it acts
 * like a window onto scenery that doesn't move as the card scrolls up
 * and off. This intentionally avoids the background-attachment:fixed
 * shorthand — Chrome paints it on the main thread instead of
 * compositing it, so it stutters out of sync during scroll and is easy
 * to break by accident from unrelated layout changes elsewhere on the
 * card. A real fixed-position element composites cleanly instead.
 */
export default function V2HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className={styles.outer}>
      <div className={styles.frame}>
        <div className={styles.backdrop} aria-hidden="true" />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
