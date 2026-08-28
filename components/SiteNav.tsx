import Image from "next/image";
import styles from "./SiteNav.module.css";

const LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#partners", label: "PARTNERS" },
  { href: "#initiatives", label: "CONNECTED INITIATIVES" },
  { href: "#media", label: "MEDIA CORNER" },
];

export default function SiteNav() {
  return (
    <div className={styles.row}>
      <a href="#top" className={styles.logo} aria-label="PackAhead home">
        <Image
          src="/brand/logo-gradient.svg"
          alt="PackAhead"
          width={177}
          height={46}
          priority
        />
      </a>
      <nav className={styles.pill} aria-label="Primary">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className={styles.contact}>
          CONTACT
        </a>
      </nav>
    </div>
  );
}
