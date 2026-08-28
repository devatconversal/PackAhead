"use client";

import { useEffect, useState } from "react";
import AuroraBackground from "./AuroraBackground";
import SiteNav from "./SiteNav";
import styles from "./HeroFrame.module.css";

/**
 * Wraps the hero and the intro section in one shared background. The
 * outer padding and rounded corners fall away as soon as the visitor
 * starts scrolling, so the framed card becomes a full-bleed background
 * that both sections sit on. Past the intro section the background ends
 * and the page continues normally.
 */
export default function HeroFrame({ children }: { children: React.ReactNode }) {
  const [flat, setFlat] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setFlat(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="top" className={`${styles.outer} ${flat ? styles.flat : ""}`}>
      <div className={styles.frame}>
        <AuroraBackground />
        <div className={`container ${styles.navRow}`}>
          <SiteNav />
        </div>
        {children}
      </div>
    </div>
  );
}
