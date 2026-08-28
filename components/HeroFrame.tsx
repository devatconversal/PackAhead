"use client";

import { useEffect, useState } from "react";
import AuroraBackground from "./AuroraBackground";
import styles from "./HeroFrame.module.css";

const MAX_PADDING = 14; // px, the light border shown on every side at rest
const MAX_RADIUS = 22; // px

/**
 * Frames the header in an inset, rounded card with an even light border
 * on every side. As the visitor starts scrolling, the border and
 * corners shrink away so the header becomes a full-bleed background.
 * The header then scrolls away normally like any other section, and
 * whatever comes after it sits on the plain page background.
 */
export default function HeroFrame({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const distance = window.innerHeight || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / distance)));
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

  const padding = MAX_PADDING * (1 - progress);
  const radius = MAX_RADIUS * (1 - progress);

  return (
    <div id="top" className={styles.outer} style={{ padding: `${padding}px` }}>
      <div className={styles.frame} style={{ borderRadius: `${radius}px` }}>
        <AuroraBackground />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
