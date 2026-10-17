import SwapButton from "@/components/SwapButton";
import FramedPanel from "@/components/FramedPanel";
import Reveal from "@/components/Reveal";
import Lines from "./Lines";
import { STEPS, TOOLS, GOALS, AUDIENCES, CONSORTIUM, MILESTONES } from "./content";
import styles from "./about.module.css";

/**
 * Everything below the header of About V2 (/about), following the
 * "About – light header v3" design: a mint end-of-life step, rounder AI
 * cards, unnumbered blue goal titles and "Why it matters" as a grey band.
 */
export default function AboutSectionsV2() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <h2 className={`${styles.heading} ${styles.headingWide}`}>What PackAhead investigates</h2>
          </Reveal>
          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <div className={`${styles.step} ${i === STEPS.length - 1 ? styles.stepMint : ""}`}>
                  <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FramedPanel flushTop>
        <div className={styles.ai}>
          <Reveal>
            <div className={styles.two}>
              <h2 className={`${styles.heading} ${styles.headingLight}`}>
                AI runs through <br className={styles.br} />
                the whole project
              </h2>
              <p className={`${styles.textLight} ${styles.textAi}`}>
                Artificial intelligence is not a separate work package in PackAhead, it is
                the common thread. From choosing raw materials and designing enzymes to
                tuning production and sorting used packaging, digital tools help the
                partners predict results instead of testing everything by trial and error.
                All tools come together in one end-to-end optimisation model.
              </p>
            </div>
          </Reveal>
          <div className={styles.tools}>
            {TOOLS.map((tool, i) => (
              <Reveal key={tool.text} delay={(i % 4) * 60}>
                <div className={`${styles.tool} ${styles.toolRound}`}>
                  <span className={`${styles.toolNumber} ${styles.toolNumberBright}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.toolTitle}>
                    <Lines lines={tool.title} />
                  </h3>
                  <p className={styles.toolText}>{tool.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className={`${styles.trust} ${styles.trustRound}`}>
              <span className={styles.trustLabel}>TRUSTWORTHY AI</span>
              <p className={styles.trustText}>
                An AI impact assessment and a regulatory monitoring tool make sure every
                digital tool in the project is responsible, transparent and compliant.
              </p>
            </div>
          </Reveal>
        </div>
      </FramedPanel>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <h2 className={styles.heading}>
              What the project <br className={styles.br} />
              wants to achieve
            </h2>
          </Reveal>
          <div className={`${styles.goals} ${styles.goalsTight}`}>
            {GOALS.map((goal, i) => (
              <Reveal key={goal.text} delay={i * 90}>
                <div className={`${styles.goal} ${styles.goalCompact}`}>
                  <h3 className={`${styles.goalTitle} ${styles.goalTitleBlue}`}>
                    <Lines lines={goal.title} />
                  </h3>
                  <p className={styles.goalText}>{goal.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhy}`}>
        <div className="container">
          <Reveal>
            <div className={styles.why}>
              <div className={styles.whyCopy}>
                <h2 className={styles.heading}>Why it matters</h2>
                <p className={styles.whyText}>
                  Most flexible food packaging today is made from fossil-based plastic and
                  is hard to recycle. Better ways to produce and recycle cellulose films
                  offer a renewable alternative that keeps food just as well protected.
                </p>
              </div>
              <div className={styles.whyCard}>
                {AUDIENCES.map((audience) => (
                  <div key={audience.title} className={styles.whyRow}>
                    <h3 className={styles.whyRowTitle}>{audience.title}</h3>
                    <p className={styles.audienceText}>{audience.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.two}`}>
          <Reveal>
            <div className={styles.consortiumCopy}>
              <h2 className={styles.heading}>
                Research and industry, <br className={styles.br} />
                side by side
              </h2>
              <p className={styles.text}>
                PackAhead brings together 18 partners: universities, research centres and
                companies that each cover a link in the chain, from enzymes and
                biotechnology to film production, packaging and recycling. Together they
                span Europe, with a link to South Korea.
              </p>
              <SwapButton href="/#partners" label="MEET THE PARTNERS" variant="light" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className={styles.facts}>
              {CONSORTIUM.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt className={styles.factLabel}>{fact.label}</dt>
                  <dd className={styles.factValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionFlushTop}`}>
        <div className="container">
          <Reveal>
            <h2 className={`${styles.heading} ${styles.timelineTitle}`}>
              Four years, one clear horizon
            </h2>
          </Reveal>
          <div className={styles.milestones}>
            {MILESTONES.map((m, i) => (
              <Reveal key={m.date} delay={i * 90}>
                <div className={styles.milestone}>
                  <span className={`${styles.date} ${m.ambition ? styles.dateAmbition : ""}`}>
                    {m.date}
                  </span>
                  <h3 className={styles.milestoneTitle}>{m.title}</h3>
                  <p className={styles.milestoneText}>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
