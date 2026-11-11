"use client";

import { useState } from "react";
import ui from "@/components/ui.module.css";
import { DOCUMENTS, TYPE_FILTERS, TYPE_LABEL, type DocType } from "./documents";
import styles from "./media.module.css";

const CHIP_CLASS: Record<DocType, string> = {
  deliverable: styles.tDeliverable,
  publication: styles.tPublication,
  press: styles.tPress,
  factsheet: styles.tFactsheet,
};

/** Filterable grid of public documents. */
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
              <article className={styles.doc}>
                <div className={styles.docTop}>
                  <span className={`${styles.tchip} ${CHIP_CLASS[d.type]}`}>{TYPE_LABEL[d.type]}</span>
                  <span className={ui.label}>{d.date}</span>
                </div>
                <h3 className={ui.cardTitle}>{d.title}</h3>
                <p className={ui.body}>{d.desc}</p>
                <div className={styles.docFoot}>
                  <span className={ui.label}>{d.meta}</span>
                  <a href={d.url} className={ui.visit} aria-label={`${d.action}: ${d.title}`}>
                    {d.action}{" "}
                    <span
                      className={d.action === "Download" ? `${ui.arr} ${ui.arrDown}` : ui.arr}
                      aria-hidden="true"
                    >
                      {d.action === "Download" ? "↓" : "→"}
                    </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`${ui.body} ${styles.empty}`}>No documents of this type yet.</p>
      )}
    </div>
  );
}
