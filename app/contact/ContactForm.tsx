"use client";

import { useState } from "react";
import SwapButton from "@/components/SwapButton";
import { PRIVACY_HREF } from "@/lib/nav";
import ui from "@/components/ui.module.css";
import styles from "./contact.module.css";

const TOPICS = [
  "A question about the project",
  "Press and media",
  "Partnerships and connected initiatives",
  "Something else",
];

/**
 * Contact form. No mail backend is connected yet: submitting validates the
 * fields and shows a confirmation. Wire `onSubmit` to a route handler or
 * form service before going live.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className={styles.formCard}>
      <h2 className={ui.h2Sm}>Send us a message</h2>

      {sent ? (
        <p className={`${ui.body} ${styles.thanks}`} role="status">
          Thank you for your message. The right partner will get back to you soon.
        </p>
      ) : (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className={styles.fieldGrid}>
            <Field id="c-first" label="FIRST NAME" autoComplete="given-name" required />
            <Field id="c-last" label="LAST NAME" autoComplete="family-name" required />
            <Field id="c-email" label="EMAIL" type="email" autoComplete="email" required />
            <Field id="c-org" label="ORGANISATION" autoComplete="organization" />
          </div>
          <div className={styles.field}>
            <label htmlFor="c-topic" className={styles.label}>WHAT IS IT ABOUT?</label>
            <select id="c-topic" name="topic" className={styles.input}>
              {TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="c-msg" className={styles.label}>MESSAGE</label>
            <textarea id="c-msg" name="message" rows={6} className={`${styles.input} ${styles.textarea}`} required />
          </div>
          <div className={styles.consent}>
            <input id="c-ok" name="consent" type="checkbox" className={styles.check} required />
            <label htmlFor="c-ok">
              I agree that PackAhead uses my details to answer this message, as described in
              the <a href={PRIVACY_HREF}>privacy policy</a>.
            </label>
          </div>
          <div>
            <SwapButton type="submit" label="SEND MESSAGE" variant="light" />
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input id={id} name={id} type={type} className={styles.input} autoComplete={autoComplete} required={required} />
    </div>
  );
}
