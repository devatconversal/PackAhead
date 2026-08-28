import Image from "next/image";
import AuroraBackground from "../AuroraBackground";
import SwapButton from "../SwapButton";
import styles from "./V2Footer.module.css";

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

export default function V2Footer() {
  return (
    <section id="contact" className={styles.section}>
      <AuroraBackground variant="deep" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Stay close to the project</h2>
          <SwapButton href="#contact" label="SUBSCRIBE TO THE NEWSLETTER" variant="dark" />
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
      </div>
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
