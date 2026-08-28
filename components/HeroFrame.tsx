"use client";

import { useEffect, useRef, useState } from "react";
import AuroraBackground from "./AuroraBackground";
import styles from "./HeroFrame.module.css";

const MAX_INSET = 14; // px, the light border shown on every side at rest
const MAX_RADIUS = 22; // px

/**
 * Wraps the hero and the intro section in one shared, pinned background.
 * At rest the background sits inset by an even border on all four sides
 * with rounded corners, like a framed card. As the visitor scrolls from
 * the hero into the intro section, the border and corners shrink away
 * (the background "grows" to fill the screen) while the background
 * itself stays fixed in the viewport. Only once the intro section has
 * fully scrolled past does the background release and scroll away with
 * it, handing off to the next section.
 */
export default function HeroFrame({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const distance = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / distance));
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const inset = MAX_INSET * (1 - progress);
  const radius = MAX_RADIUS * (1 - progress);

  return (
    <div id="top" ref={sectionRef} className={styles.section}>
      <div className={styles.stickyBg}>
        <div
          className={styles.bgBox}
          style={{ inset: `${inset}px`, borderRadius: `${radius}px` }}
        >
          <AuroraBackground />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
