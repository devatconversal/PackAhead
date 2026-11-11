"use client";

import { useState } from "react";
import { PRIVACY_HREF } from "@/lib/nav";
import SwapButton from "./SwapButton";
import styles from "./NewsletterForm.module.css";

const SECTORS = [
  "Food and beverage production",
  "Packaging production and converting",
  "Retail and distribution",
  "Recycling and waste management",
  "Pulp, paper and bio-based materials",
  "Research and education",
  "Government and policy",
  "Other",
];

/**
 * Newsletter sign-up in the footer. There is no mailing provider wired up
 * yet: submitting validates the fields and shows a confirmation. Connect
 * `onSubmit` to the provider (or a route handler) when it is chosen.
 */
export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className={styles.thanks} role="status">
        Thank you. You will receive a confirmation email shortly.
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="nl-name" className={styles.label}>NAME</label>
          <input id="nl-name" name="name" type="text" className={styles.input} autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="nl-company" className={styles.label}>COMPANY</label>
          <input id="nl-company" name="company" type="text" className={styles.input} autoComplete="organization" />
        </div>
        <div className={styles.field}>
          <label htmlFor="nl-email" className={styles.label}>EMAIL</label>
          <input id="nl-email" name="email" type="email" className={styles.input} autoComplete="email" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="nl-sector" className={styles.label}>SECTOR</label>
          <select id="nl-sector" name="sector" className={styles.input} defaultValue="">
            <option value="">Choose your sector</option>
            {SECTORS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.consent}>
        <input id="nl-ok" name="consent" type="checkbox" className={styles.check} required />
        <label htmlFor="nl-ok">
          I agree that PackAhead stores these details to send me the newsletter, as
          described in the <a href={PRIVACY_HREF}>privacy policy</a>.
        </label>
      </div>
      <div>
        <SwapButton type="submit" label="SUBSCRIBE TO THE NEWSLETTER" />
      </div>
    </form>
  );
}
