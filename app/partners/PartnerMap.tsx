"use client";

/* eslint-disable @next/next/no-img-element -- the map layers are stacked SVGs that must line up pixel-perfect; next/image adds nothing here. */

import { useRef, useState } from "react";
import { COORDINATOR, KOREA_PIN, PARTNERS, PINS, type City, type Country, type Partner } from "./data";
import styles from "./partners.module.css";

const ALL: Partner[] = [COORDINATOR, ...PARTNERS];

const OVERLAYS: Exclude<Country, "korea">[] = [
  "finland",
  "belgium",
  "netherlands",
  "lithuania",
  "austria",
  "italy",
  "spain",
  "portugal",
];

/**
 * Partner list beside a map of Europe (plus a South Korea inset). Picking
 * a partner highlights its country and pin; clicking a pin selects the
 * partners in that city, cycling through them on repeat clicks.
 */
export default function PartnerMap() {
  const [selectedId, setSelectedId] = useState(COORDINATOR.id);
  const current = ALL.find((p) => p.id === selectedId) ?? COORDINATOR;
  const listRef = useRef<HTMLUListElement>(null);

  // After picking a pin, bring the selected partner card into view inside
  // the scrolling list (without scrolling the page itself).
  const scrollListTo = (id: string) => {
    requestAnimationFrame(() => {
      const list = listRef.current;
      const card = list?.querySelector<HTMLElement>(`[data-partner="${id}"]`);
      if (!list || !card || list.scrollHeight <= list.clientHeight + 2) return;
      const top = card.offsetTop;
      const bottom = top + card.offsetHeight;
      if (top < list.scrollTop || bottom > list.scrollTop + list.clientHeight) {
        list.scrollTo({
          top: Math.max(0, top - (list.clientHeight - card.offsetHeight) / 2),
          behavior: "smooth",
        });
      }
    });
  };

  const pickCity = (city: City) => {
    const here = ALL.filter((p) => p.city === city);
    if (!here.length) return;
    const next =
      current.city === city ? here[(here.indexOf(current) + 1) % here.length] : here[0];
    setSelectedId(next.id);
    scrollListTo(next.id);
  };

  const korea = current.country === "korea";

  return (
    <div className={styles.mapGrid}>
      <div className={styles.listWrap}>
        <ul ref={listRef} className={styles.list} aria-label="Partners">
          {ALL.map((p) => {
            const on = p.id === current.id;
            return (
              <li key={p.id} data-partner={p.id}>
                <button
                  type="button"
                  className={`${styles.pcard} ${on ? styles.pcardOn : ""}`}
                  aria-pressed={on}
                  onClick={() => setSelectedId(p.id)}
                >
                  <span className={styles.pcName}>{p.name}</span>
                  <span className={styles.pcRole}>{p.role}</span>
                  <span className={styles.pcMeta}>{p.where}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.mapCard}>
        <div className={styles.mapBox}>
          <img
            className={styles.mapImg}
            src="/maps/europe.svg"
            alt="Map of Europe with the partner locations: Espoo, Vilnius, Delft, Arnhem, Gent, Vienna, Cesena, Paterna and Porto"
          />
          {OVERLAYS.map((country) =>
            current.country === country ? (
              <img key={country} className={styles.overlay} src={`/maps/${country}.svg`} alt="" />
            ) : null
          )}
          {PINS.map((pin) => {
            const on = current.city === pin.city;
            return (
              <span key={pin.city} className={styles.pinWrap} style={{ left: `${pin.left}%`, top: `${pin.top}%` }}>
                <button
                  type="button"
                  className={`${styles.pin} ${on ? styles.pinOn : ""}`}
                  aria-label={pin.label}
                  aria-pressed={on}
                  onClick={() => pickCity(pin.city)}
                >
                  <span className={styles.pinDot} />
                </button>
                {on && (
                  <span className={`${styles.pinTip} ${pin.tipLeft ? styles.pinTipLeft : ""}`} aria-live="polite">
                    {current.name}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className={`${styles.inset} ${korea ? styles.insetOn : ""}`}>
          <div className={styles.mapBox}>
            <img className={styles.mapImg} src="/maps/korea.svg" alt="Map of South Korea with Incheon marked" />
            {korea && <img className={styles.overlay} src="/maps/korea-on.svg" alt="" />}
            <span className={styles.pinWrap} style={{ left: `${KOREA_PIN.left}%`, top: `${KOREA_PIN.top}%` }}>
              <button
                type="button"
                className={`${styles.pin} ${korea ? styles.pinOn : ""}`}
                aria-label={KOREA_PIN.label}
                aria-pressed={korea}
                onClick={() => pickCity(KOREA_PIN.city)}
              >
                <span className={styles.pinDot} />
              </button>
            </span>
          </div>
          <span className={styles.insetLabel}>INCHEON, SOUTH KOREA</span>
        </div>
      </div>
    </div>
  );
}
