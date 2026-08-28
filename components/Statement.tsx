"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Statement.module.css";

const TEXT =
  "PackAhead brings artificial intelligence into a bio-based packaging value chain. The project designs high-performance enzyme variants, produces recyclable cellulose films from three feedstocks, and optimises every step from raw material composition to end-of-life sorting.";

const START_COLOR = [220, 220, 220] as const; // #DCDCDC
const END_COLOR = [55, 127, 255] as const; // #377FFF

function mixColor(t: number) {
  const clamped = Math.min(1, Math.max(0, t));
  const r = Math.round(START_COLOR[0] + (END_COLOR[0] - START_COLOR[0]) * clamped);
  const g = Math.round(START_COLOR[1] + (END_COLOR[1] - START_COLOR[1]) * clamped);
  const b = Math.round(START_COLOR[2] + (END_COLOR[2] - START_COLOR[2]) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  const letters = useMemo(() => TEXT.split(""), []);
  const letterIndex = useMemo(() => {
    let count = 0;
    return letters.map((char) => (char.trim() === "" ? -1 : count++));
  }, [letters]);
  const totalLetters = useMemo(
    () => letterIndex.reduce((max, i) => Math.max(max, i), 0) + 1,
    [letterIndex]
  );

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = ref.current;
      if (!el) {
        ticking = false;
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.min(1, Math.max(0, p)));
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

  return (
    <section className={styles.section}>
      <div className="container">
        <p ref={ref} className={styles.text}>
          {letters.map((char, i) => {
            const li = letterIndex[i];
            if (li === -1) return char;
            const t = progress * totalLetters - li;
            return (
              <span key={i} style={{ color: mixColor(t) }}>
                {char}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
