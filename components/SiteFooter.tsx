import Image from "next/image";
import FramedPanel from "./FramedPanel";
import styles from "./SiteFooter.module.css";

const PROJECT_LINKS = [
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Connected initiatives", href: "#initiatives" },
];

const RESOURCE_LINKS = [
  { label: "Media corner", href: "#media" },
  { label: "Newsroom", href: "#media" },
  { label: "Contact", href: "#contact" },
];

const FOLLOW_LINKS = [{ label: "LinkedIn", href: "#contact" }];

export default function SiteFooter() {
  return (
    <section className={styles.section}>
      <FramedPanel id="contact" variant="deep">
        <div className={styles.top}>
          <h2 className={styles.heading}>Stay close to the project</h2>
          <div className={styles.actions}>
            <a href="#contact" className={styles.subscribe}>
              SUBSCRIBE TO THE NEWSLETTER
            </a>
            <a href="#contact" className={styles.arrowBtn} aria-label="Subscribe to the newsletter">
              →
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <Image src="/brand/logo-gradient.svg" alt="PackAhead" width={177} height={46} />
            <p className={styles.tagline}>
              Sustainable cellulose-based flexible packaging powered by artificial
              intelligence.
            </p>
          </div>
          <FooterColumn title="Project" links={PROJECT_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <FooterColumn title="Follow" links={FOLLOW_LINKS} />
        </div>

        <div className={styles.bottom}>
          <div className={styles.funding}>
            <span className={styles.euBadge}>EU flag</span>
            <p className={styles.fundingText}>
              Funded by the European Union under grant agreement No 000000. Views and
              opinions expressed are those of the authors only.
            </p>
          </div>
          <div className={styles.legal}>
            <a href="#contact">Privacy</a>
            <a href="#contact">Cookies</a>
            <span>© 2026 PackAhead</span>
          </div>
        </div>
      </FramedPanel>
    </section>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className={styles.col}>
      <span className={styles.colTitle}>{title}</span>
      {links.map((link) => (
        <a key={link.label} href={link.href} className={styles.colLink}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
