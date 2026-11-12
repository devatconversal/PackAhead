import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DarkBand from "@/components/DarkBand";
import SwapButton from "@/components/SwapButton";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import ui from "@/components/ui.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — PackAhead",
  description:
    "PackAhead is a four year research and innovation project that uses artificial intelligence to improve how cellulose films are produced and recycled.",
};

const FACTS = [
  { value: "4 years", label: "Project duration" },
  { value: "1 Sep 2026", label: "Official start" },
  { value: "13 partners", label: "Research and industry" },
  { value: "TRL 7", label: "Demonstrated in practice" },
];

const STEPS = [
  { title: "Feedstocks", text: "Three types of cellulose serve as the raw material." },
  { title: "Enzymatic activation", text: "Tailor-made enzymes prepare the cellulose pulp for processing." },
  { title: "Film fabrication", text: "The pulp becomes thin, transparent and flexible film." },
  { title: "Packaging demonstrators", text: "The films are turned into real flexible food packaging." },
  { title: "End-of-life", text: "Used packaging is recognised, sorted and recycled." },
];

const TOOLS = [
  { title: "Enzyme design", text: "AI designs and improves enzymes, drawing on large genomic, proteomic and structural databases." },
  { title: "Automated strain construction", text: "Robots build and test production strains through the IBISBA biotech accelerator." },
  { title: "Digital twin for scale-up", text: "Hybrid models simulate the bioprocess so it can be scaled up with fewer surprises." },
  { title: "Faster plasticiser screening", text: "The additives that keep films flexible are screened much faster than in the lab alone." },
  { title: "Supercomputer simulations", text: "Molecular simulations on European supercomputers show how cellulose and plasticisers interact." },
  { title: "Smarter film production", text: "Physics-informed machine learning finds the best production conditions for the films." },
  { title: "Cost and sustainability model", text: "One model weighs production costs and sustainability across many parameters at once." },
  { title: "Optical sorting at end-of-life", text: "An AI-powered near-infrared system recognises the films so they can be sorted automatically." },
];

const GOALS = [
  {
    title: "Spark innovation in companies",
    text: "PackAhead is an EU Innovation Action. Its focus is on helping companies take new technology from the lab to the production line, not on research for its own sake.",
  },
  {
    title: "Bring research and industry together",
    text: "Research institutions and companies work side by side, so new knowledge meets real production needs from day one.",
  },
  {
    title: "Reach the market, and beyond",
    text: "The ambition is to deploy PackAhead's digital tools and products at scale by 2032, and to reuse the approach in other bio-based industries.",
  },
];

const AUDIENCES = [
  {
    title: "For researchers",
    text: "New models, data and methods for enzyme design, bioprocessing and materials science, shared through publications and public deliverables.",
  },
  {
    title: "For companies",
    text: "A faster, more predictable route from idea to production line, and digital tools that make bio-based packaging more competitive.",
  },
  {
    title: "For consumers",
    text: "Food packaging made from a renewable source, that protects food well and has a clear path to recycling.",
  },
  {
    title: "For everyone",
    text: "Less fossil-based plastic and more circular materials, in support of Europe's move towards climate neutrality.",
  },
];

const CONSORTIUM = [
  { label: "Coordinator", value: "VTT Technical Research Centre of Finland" },
  { label: "Partners", value: "13 research institutions and companies" },
  { label: "Reach", value: "Across Europe, with a link to South Korea" },
  {
    label: "Network",
    value: "Working with the S3 Partnership Food Packaging, a European network of cluster organisations",
  },
  { label: "Funding", value: "Funded by the European Union, Grant Agreement No. 101287475" },
];

const MILESTONES = [
  { when: "1 Sep 2026", title: "Official start", text: "The partners kick off the four year programme." },
  { when: "2026 – 2030", title: "Develop and test", text: "Enzymes, films and AI tools are developed, combined and tested." },
  { when: "Aug 2030", title: "Demonstrated at TRL 7", text: "The project closes with results proven in an operational setting." },
  { when: "2032", title: "On the market", text: "The ambition: digital tools and products deployed at scale.", future: true },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title={
          <>
            About <br />
            PackAhead.
          </>
        }
        intro="PackAhead is a four year research and innovation project that uses artificial intelligence to improve how cellulose films are produced and recycled, so food packaging can be bio-based, affordable and circular."
        facts={FACTS}
      />

      {/* What PackAhead investigates */}
      <section className={ui.section}>
        <div className={`container ${styles.investigates}`}>
          <Reveal>
            <h2 className={ui.h2}>What PackAhead investigates</h2>
          </Reveal>
          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 60} className={styles.stepWrap}>
                <div className={`${ui.tintCard} ${styles.step} ${i === STEPS.length - 1 ? styles.stepLast : ""}`}>
                  <span className={styles.stepNumber}>{pad(i)}</span>
                  <h3 className={ui.cardTitle}>{step.title}</h3>
                  <p className={ui.body}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI as the common thread */}
      <DarkBand>
        <div className={ui.two}>
          <h2 className={`${ui.h2} ${ui.onDark}`}>
            AI runs through <br />
            the whole project
          </h2>
          <p className={`${ui.leadAside} ${ui.onDarkSoft}`}>
            Artificial intelligence is not a separate work package in PackAhead, it is the
            common thread. From choosing raw materials and designing enzymes to tuning
            production and sorting used packaging, digital tools help the partners predict
            results instead of testing everything by trial and error. All tools come
            together in one end-to-end optimisation model.
          </p>
        </div>
        <div className={ui.glassGrid}>
          {TOOLS.map((tool, i) => (
            <div key={tool.title} className={ui.glassCard}>
              <span className={ui.glassNumber}>{pad(i)}</span>
              <h3 className={ui.cardTitle}>{tool.title}</h3>
              <p>{tool.text}</p>
            </div>
          ))}
        </div>
        <div className={ui.note}>
          <span className={ui.noteLabel}>TRUSTWORTHY AI</span>
          <p>
            An AI impact assessment and a regulatory monitoring tool make sure every
            digital tool in the project is responsible, transparent and compliant.
          </p>
        </div>
      </DarkBand>

      {/* Goals */}
      <section className={ui.section}>
        <div className={`container ${ui.stack}`}>
          <Reveal>
            <h2 className={ui.h2}>
              What the project <br />
              wants to achieve
            </h2>
          </Reveal>
          <div className={styles.goals}>
            {GOALS.map((goal, i) => (
              <Reveal key={goal.title} delay={i * 80}>
                <div className={`${ui.tintCard} ${styles.goal}`}>
                  <h3 className={ui.cardTitleLg}>{goal.title}</h3>
                  <p className={ui.body}>{goal.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className={`${ui.section} ${ui.flushTop}`}>
        <div className={ui.greyBand}>
          <div className={`container ${ui.why}`}>
            <div className={ui.whyCopy}>
              <h2 className={ui.h2}>Why it matters</h2>
              <p className={ui.lead}>
                Most flexible food packaging today is made from fossil-based plastic and is
                hard to recycle. Better ways to produce and recycle cellulose films offer a
                renewable alternative that keeps food just as well protected.
              </p>
            </div>
            <div className={ui.whyList}>
              {AUDIENCES.map((a) => (
                <div key={a.title} className={ui.whyItem}>
                  <h3 className={ui.cardTitleLg}>{a.title}</h3>
                  <p className={ui.body}>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consortium */}
      <section className={`${ui.section} ${ui.flushTop}`}>
        <div className={`container ${ui.two}`}>
          <Reveal>
            <div className={ui.whyCopy}>
              <h2 className={ui.h2}>
                Research and industry, <br />
                side by side
              </h2>
              <p className={ui.lead}>
                PackAhead brings together 13 partners: universities, research centres and
                companies that each cover a link in the chain, from enzymes and
                biotechnology to film production, packaging and recycling. Together they
                span Europe, with a link to South Korea.
              </p>
              <SwapButton href="/partners" label="MEET THE PARTNERS" variant="light" />
            </div>
          </Reveal>
          <div className={`${ui.rows} ${styles.consRows}`}>
            {CONSORTIUM.map((row) => (
              <div key={row.label} className={ui.row}>
                <span className={ui.label}>{row.label}</span>
                <span className={ui.body}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${ui.section} ${ui.flushTop}`}>
        <div className={`container ${ui.stack}`}>
          <Reveal>
            <h2 className={ui.h2}>Four years, one clear horizon</h2>
          </Reveal>
          <ol className={styles.miles}>
            {MILESTONES.map((m, i) => (
              <li key={m.title}>
                <Reveal delay={i * 80} className={styles.mile}>
                  <span className={`${styles.mileWhen} ${m.future ? styles.mileFuture : ""}`}>
                    {m.when}
                  </span>
                  <h3 className={ui.cardTitleLg}>{m.title}</h3>
                  <p className={ui.body}>{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
