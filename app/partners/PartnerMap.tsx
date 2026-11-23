"use client";

/* eslint-disable @next/next/no-img-element -- the map layers are stacked SVGs that must line up pixel-perfect; next/image adds nothing here. */

import { useRef, useState } from "react";
import { COORDINATOR, KOREA_PIN, PARTNERS, PINS, type City, type Country, type Partner } from "./data";
import styles from "./partners.module.css";

const ALL: Partner[] = [COORDINATOR, ...PARTNERS];

const COUNTRY_LABEL: Record<Country, string> = {
  finland: "Finland",
  lithuania: "Lithuania",
  netherlands: "The Netherlands",
  belgium: "Belgium",
  austria: "Austria",
  italy: "Italy",
  spain: "Spain",
  portugal: "Portugal",
  korea: "South Korea",
};

// Partners grouped per country, in the order the countries first appear.
const GROUPS: { country: Country; partners: Partner[] }[] = ALL.reduce<
  { country: Country; partners: Partner[] }[]
>((groups, p) => {
  const group = groups.find((g) => g.country === p.country);
  if (group) group.partners.push(p);
  else groups.push({ country: p.country, partners: [p] });
  return groups;
}, []);

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

const countryOf = (city: City): Country => ALL.find((p) => p.city === city)?.country ?? "finland";

/**
 * Partner list, grouped per country, beside a map of Europe (plus a South
 * Korea inset).
 *
 * Clicking a pin selects that location: its country lights up on the map,
 * the partners at that pin are highlighted in the list (all of them when a
 * small country has several partners on one pin; only that city's partner
 * when a country has separate pins, e.g. Delft and Arnhem), and the pin
 * shows the names of all partners in that city. Clicking the same pin again
 * hides the names and shrinks the pin. Clicking a partner in the list
 * selects its location the same way.
 */
export default function PartnerMap() {
  const [city, setCity] = useState<City>(COORDINATOR.city);
  const [tipOpen, setTipOpen] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);

  const country = countryOf(city);
  const namesHere = ALL.filter((p) => p.city === city).map((p) => p.name);

  // Bring the highlighted country group into view inside the scrolling
  // list (without scrolling the page itself).
  const scrollListTo = (target: Country) => {
    requestAnimationFrame(() => {
      const list = listRef.current;
      const group = list?.querySelector<HTMLElement>(`[data-country="${target}"]`);
      if (!list || !group || list.scrollHeight <= list.clientHeight + 2) return;
      const top = group.offsetTop;
      const bottom = top + group.offsetHeight;
      if (top < list.scrollTop || bottom > list.scrollTop + list.clientHeight) {
        list.scrollTo({ top: Math.max(0, top - 8), behavior: "smooth" });
      }
    });
  };

  const pickCity = (next: City) => {
    // Same pin again while its names show: hide them.
    if (next === city && tipOpen) {
      setTipOpen(false);
      return;
    }
    setCity(next);
    setTipOpen(true);
    scrollListTo(countryOf(next));
  };

  const korea = country === "korea";

  const tip = (extraClass = "") => (
    <span className={`${styles.pinTip} ${extraClass}`} aria-live="polite">
      {namesHere.map((name) => (
        <span key={name} className={styles.pinTipName}>
          {name}
        </span>
      ))}
    </span>
  );

  return (
    <div className={styles.mapGrid}>
      <div className={styles.listWrap}>
        <ul ref={listRef} className={styles.list} aria-label="Partners per country">
          {GROUPS.map((group) => {
            const on = group.country === country;
            return (
              <li key={group.country} data-country={group.country} className={styles.group}>
                <span className={`${styles.groupTitle} ${on ? styles.groupTitleOn : ""}`}>
                  {COUNTRY_LABEL[group.country]} · {group.partners.length}{" "}
                  {group.partners.length === 1 ? "partner" : "partners"}
                </span>
                <ul className={styles.groupList}>
                  {group.partners.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        className={`${styles.pcard} ${p.city === city ? styles.pcardOn : ""}`}
                        aria-pressed={p.city === city}
                        onClick={() => {
                          setCity(p.city);
                          setTipOpen(true);
                        }}
                      >
                        <span className={styles.pcName}>{p.name}</span>
                        <span className={styles.pcRole}>{p.role}</span>
                        <span className={styles.pcMeta}>{p.where}</span>
                      </button>
                    </li>
                  ))}
                </ul>
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
          {OVERLAYS.map((c) =>
            country === c ? <img key={c} className={styles.overlay} src={`/maps/${c}.svg`} alt="" /> : null
          )}
          {PINS.map((pin) => {
            const on = city === pin.city && tipOpen;
            const count = ALL.filter((p) => p.city === pin.city).length;
            return (
              <span key={pin.city} className={styles.pinWrap} style={{ left: `${pin.left}%`, top: `${pin.top}%` }}>
                <button
                  type="button"
                  className={`${styles.pin} ${on ? styles.pinOn : ""}`}
                  aria-label={count > 1 ? `${pin.label}, ${count} partners` : pin.label}
                  aria-pressed={on}
                  onClick={() => pickCity(pin.city)}
                >
                  <span className={styles.pinDot} />
                </button>
                {on &&
                  tip(
                    `${pin.tipLeft ? styles.pinTipLeft : ""} ${pin.left > 50 ? styles.pinTipFlipMobile : ""} ${
                      pin.top < 25 ? styles.pinTipBelowMobile : ""
                    }`
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
                className={`${styles.pin} ${korea && tipOpen ? styles.pinOn : ""}`}
                aria-label={KOREA_PIN.label}
                aria-pressed={korea && tipOpen}
                onClick={() => pickCity(KOREA_PIN.city)}
              >
                <span className={styles.pinDot} />
              </button>
              {/* On phones the partner list is hidden, so the name shows here too. */}
              {korea && tipOpen && tip(styles.pinTipMobileOnly)}
            </span>
          </div>
          <span className={styles.insetLabel}>INCHEON, SOUTH KOREA</span>
        </div>
      </div>
    </div>
  );
}
