import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import AboutSections from "./AboutSections";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — PackAhead",
  description:
    "PackAhead is a four year research and innovation project that uses artificial intelligence to improve how cellulose films are produced and recycled.",
};

export default function AboutPage() {
  return (
    <main>
      <header id="top" className={styles.header}>
        <div className={styles.headerInner}>
          <SiteNav variant="light" active="/about" />
          <h1 className={styles.title}>
            About <br />
            <span className={styles.titleAccent}>PackAhead</span>
          </h1>
          <hr className={styles.rule} />
          <Reveal>
            <p className={styles.intro}>
              PackAhead is a four year research and innovation project that uses
              artificial intelligence to improve how cellulose films are produced and
              recycled, so food packaging can be bio-based, affordable and circular.
            </p>
          </Reveal>
        </div>
      </header>

      <AboutSections />
      <SiteFooter />
    </main>
  );
}
