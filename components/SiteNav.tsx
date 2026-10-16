import Image from "next/image";
import Link from "next/link";
import styles from "./SiteNav.module.css";

const LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/#partners", label: "PARTNERS" },
  { href: "/#initiatives", label: "CONNECTED INITIATIVES" },
  { href: "/#media", label: "MEDIA CORNER" },
];

/**
 * `dark` sits on the aurora header of the homepage; `light` is for pages
 * whose header has no background, such as About.
 */
export default function SiteNav({
  variant = "dark",
  active,
}: {
  variant?: "dark" | "light";
  active?: string;
}) {
  return (
    <div className={`${styles.row} ${variant === "light" ? styles.light : ""}`}>
      <Link href="/" className={styles.logo} aria-label="PackAhead home">
        <Image
          src={variant === "light" ? "/brand/logo-dark.svg" : "/brand/logo-gradient.svg"}
          alt="PackAhead"
          width={232}
          height={60}
          priority
        />
      </Link>
      <nav className={styles.pill} aria-label="Primary">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${active === link.href ? styles.active : ""}`}
            aria-current={active === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a href="#contact" className={styles.contact}>
          CONTACT
        </a>
      </nav>
    </div>
  );
}
