import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";
import ui from "@/components/ui.module.css";
import { LINKEDIN_HREF } from "@/lib/nav";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — PackAhead",
  description:
    "A question about the project, a press request or an idea for working together? Send a message and the right partner will get back to you.",
};

const CONTACTS = [
  {
    label: "Coordinator",
    lines: ["VTT Technical Research Centre of Finland", "Project coordination team"],
    email: "info@packahead.eu",
  },
  { label: "Press and media", lines: ["Communication team, SPI"], email: "press@packahead.eu" },
  {
    label: "Network",
    lines: ["Pack4Food, S3 Partnership on Food Packaging"],
    email: "partnerships@packahead.eu",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title={
          <>
            Get in <br />
            touch.
          </>
        }
        intro="A question about the project, a press request or an idea for working together? Send a message and the right partner will get back to you."
      />

      <section className={ui.section}>
        <div className={`container ${styles.grid}`}>
          <ContactForm />

          <div className={styles.aside}>
            <h2 className={ui.h2Sm}>Who to contact</h2>
            <div className={ui.rows}>
              {CONTACTS.map((c) => (
                <div key={c.label} className={`${ui.row} ${ui.rowNarrow} ${styles.contactRow}`}>
                  <span className={ui.label}>{c.label}</span>
                  <div className={styles.contactLines}>
                    {c.lines.map((line) => (
                      <span key={line} className={ui.body}>
                        {line}
                      </span>
                    ))}
                    <a href={`mailto:${c.email}`} className={`${ui.visit} ${styles.mail}`}>
                      {c.email} <span className={ui.arr} aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
              <div className={`${ui.row} ${ui.rowNarrow} ${styles.contactRow}`}>
                <span className={ui.label}>Follow</span>
                <a
                  href={LINKEDIN_HREF}
                  className={`${ui.visit} ${styles.mail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PackAhead on LinkedIn <span className={ui.arr} aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
