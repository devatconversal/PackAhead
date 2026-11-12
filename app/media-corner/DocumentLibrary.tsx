"use client";

import { useState } from "react";
import ui from "@/components/ui.module.css";
import { DOCUMENTS, TYPE_FILTERS, TYPE_LABEL, type DocType } from "./documents";
import styles from "./media.module.css";

// Cover colour per document type (as in the "kaartvariant" artboard).
const CARD_CLASS: Record<DocType, string> = {
  deliverable: styles.cDeliverable,
  publication: styles.cPublication,
  press: styles.cPress,
  factsheet: styles.cFactsheet,
};

/** Filterable grid of public documents, shown as cards with a coloured cover. */
export default function DocumentLibrary() {
  const [filter, setFilter] = useState<DocType | "all">("all");
  const shown = DOCUMENTS.filter((d) => filter === "all" || d.type === filter);
  const count = (id: DocType | "all") =>
    id === "all" ? DOCUMENTS.length : DOCUMENTS.filter((d) => d.type === id).length;

  return (
    <div className={styles.library}>
      <div className={styles.libraryHead}>
        <h2 className={ui.h2}>Public documents</h2>
        <span className={ui.label} aria-live="polite">
          {shown.length} {shown.length === 1 ? "DOCUMENT" : "DOCUMENTS"}
        </span>
      </div>

      <div role="group" aria-label="Filter by document type" className={styles.filters}>
        {TYPE_FILTERS.map((t) => {
          const on = t.id === filter;
          return (
            <button
              key={t.id}
              type="button"
              className={`${styles.fchip} ${on ? styles.fchipOn : ""}`}
              aria-pressed={on}
              onClick={() => setFilter(t.id)}
            >
              {t.label} <span className={styles.fcount}>{count(t.id)}</span>
            </button>
          );
        })}
      </div>

      {shown.length > 0 ? (
        <ul className={styles.grid}>
          {shown.map((d) => (
            <li key={d.title}>
              <a href={d.url} className={`${styles.card} ${CARD_CLASS[d.type]}`}>
                <div className={styles.cover}>
                  <span className={styles.coverType}>{TYPE_LABEL[d.type]}</span>
                  <span className={styles.coverCode} aria-hidden="true">
                    {d.code}
                  </span>
                </div>
                <div className={styles.body}>
                  <span className={ui.label}>{d.date}</span>
                  <h3 className={ui.cardTitle}>{d.title}</h3>
                  <p className={ui.body}>{d.desc}</p>
                  <div className={styles.foot}>
                    <span className={ui.label}>{d.meta}</span>
                    <span className={ui.visit}>
                      {d.action}{" "}
                      <span
                        className={d.action === "Download" ? `${ui.arr} ${ui.arrDown}` : ui.arr}
                        aria-hidden="true"
                      >
                        {d.action === "Download" ? "↓" : "→"}
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`${ui.body} ${styles.empty}`}>No documents of this type yet.</p>
      )}
    </div>
  );
}
