import Image from "next/image";
import Link from "next/link";
import { COOKIES_HREF, LINKEDIN_HREF, PRIVACY_HREF } from "@/lib/nav";
import FramedPanel from "./FramedPanel";
import NewsletterForm from "./NewsletterForm";
import EuEmblem from "./EuEmblem";
import styles from "./SiteFooter.module.css";

const PROJECT_LINKS = [
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Connected initiatives", href: "/connected-initiatives" },
];

const RESOURCE_LINKS = [
  { label: "Media corner", href: "/media-corner" },
  { label: "Contact", href: "/contact" },
];

const FOLLOW_LINKS = [{ label: "LinkedIn", href: LINKEDIN_HREF }];

export default function SiteFooter() {
  return (
    <footer className={styles.section}>
      <FramedPanel id="newsletter" parallax>
        <div className={styles.top}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>Stay close to the project</h2>
            <p className={styles.introText}>
              Subscribe to the newsletter for results, events and new documents from the
              partners. You can unsubscribe at any time.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <div className={styles.logoWrap}>
              <Image src="/brand/logo-gradient.svg" alt="PackAhead" width={220} height={57} />
            </div>
            <p className={styles.tagline}>
              Sustainable cellulose-based flexible packaging powered by artificial
              intelligence.
            </p>
          </div>
          <FooterColumn title="PROJECT" links={PROJECT_LINKS} />
          <FooterColumn title="RESOURCES" links={RESOURCE_LINKS} />
          <FooterColumn title="FOLLOW" links={FOLLOW_LINKS} />
        </div>

        <div className={styles.bottom}>
          <div className={styles.funding}>
            <EuEmblem />
            <p className={styles.fundingText}>
              Funded by the European Union. Views and opinions expressed are however
              those of the author(s) only and do not necessarily reflect those of the
              European Union or the European Research Executive Agency. Neither the
              European Union nor the granting authority can be held responsible for
              them. Grant Agreement No. 101287475
            </p>
          </div>
          <div className={styles.legal}>
            <a href={PRIVACY_HREF}>Privacy</a>
            <a href={COOKIES_HREF}>Cookies</a>
            <span>© 2026 PackAhead</span>
          </div>
        </div>
      </FramedPanel>
    </footer>
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
      {links.map((link) =>
        link.href.startsWith("/") ? (
          <Link key={link.label} href={link.href} className={styles.colLink}>
            {link.label}
          </Link>
        ) : (
          <a key={link.label} href={link.href} className={styles.colLink} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        )
      )}
    </div>
  );
}
