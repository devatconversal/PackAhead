"use client";

import { useEffect, useRef } from "react";
import styles from "./ParallaxAurora.module.css";

const FACTOR = 0.15;
const MAX_OFFSET = 70; // px, stays within the oversized layer's buffer

/**
 * Like AuroraBackground, but the image drifts at a fraction of the
 * page's scroll speed instead of staying fully static or scrolling
 * 1:1 with its panel — a parallax "depth" version of the header's
 * fixed window, for panels where a subtler shift reads better.
 */
export default function ParallaxAurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = ref.current;
      const panel = el?.parentElement;
      if (!el || !panel) {
        ticking = false;
        return;
      }
      const rect = panel.getBoundingClientRect();
      const offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rect.top * FACTOR));
      el.style.transform = `translateY(${offset}px)`;
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

  return <div ref={ref} className={styles.aurora} aria-hidden="true" />;
}
