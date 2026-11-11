"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONTACT_HREF, NAV_LINKS } from "@/lib/nav";
import styles from "./SiteNav.module.css";

/**
 * Logo plus the primary navigation. On wide screens the links sit in a
 * translucent pill; below 1100px they collapse into a menu button that
 * opens a white panel under the header row.
 */
export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on Escape and on clicks outside the header row.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (rowRef.current && !rowRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const contactActive = isActive(CONTACT_HREF);

  return (
    <div ref={rowRef} className={styles.row}>
      <Link href="/" className={styles.logo} aria-label="PackAhead home">
        <Image src="/brand/logo-gradient.svg" alt="PackAhead" width={232} height={60} priority />
      </Link>

      <nav className={styles.pill} aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={CONTACT_HREF}
          className={`${styles.contact} ${contactActive ? styles.contactActive : ""}`}
          aria-current={contactActive ? "page" : undefined}
        >
          CONTACT
        </Link>
      </nav>

      <button
        type="button"
        className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.burger} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      {open && (
        <nav id="mobile-menu" className={styles.panel} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.panelLink}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <Link
            href={CONTACT_HREF}
            className={styles.panelCta}
            onClick={() => setOpen(false)}
            aria-current={contactActive ? "page" : undefined}
          >
            CONTACT
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
