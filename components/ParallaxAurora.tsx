"use client";

import { useEffect, useRef } from "react";
import styles from "./ParallaxAurora.module.css";

const RANGE = 90; // px, total drift from the panel entering to leaving view

/**
 * Like AuroraBackground, but the image drifts a little as the panel
 * travels through the viewport — a parallax "depth" version of the
 * header's fixed window, for panels where a subtler shift reads better.
 *
 * Driven by how far the panel itself has scrolled through the viewport
 * (0 = just entering from the bottom, 1 = fully scrolled past the top),
 * not by raw page scroll position — a panel near the end of a page
 * (like the footer) can never scroll past itself, so tying the drift to
 * absolute scroll distance leaves most of the range stuck at its clamp
 * before the panel is even on screen.
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
      const vh = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      const offset = (progress - 0.5) * RANGE;
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
