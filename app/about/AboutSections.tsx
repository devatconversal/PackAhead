import SwapButton from "@/components/SwapButton";
import FramedPanel from "@/components/FramedPanel";
import Reveal from "@/components/Reveal";
import Lines from "./Lines";
import { STEPS, TOOLS, GOALS, AUDIENCES, CONSORTIUM, MILESTONES } from "./content";
import styles from "./about.module.css";

/**
 * Everything below the header of About V1. V1 shows the two explanatory
 * paragraphs next to the first heading; `withIntroCopy` keeps that optional.
 */
export default function AboutSections({ withIntroCopy = false }: { withIntroCopy?: boolean }) {
  return (
    <>
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          {withIntroCopy ? (
            <div className={styles.two}>
              <h2 className={styles.heading}>What PackAhead investigates</h2>
              <div className={styles.copy}>
                <p className={styles.text}>
                  Cellulose films are thin, transparent packaging films made from
                  cellulose, the fibre that gives plants their structure. They protect
                  food just like plastic film, but they come from a renewable source.
                </p>
                <p className={styles.text}>
                  PackAhead looks at the whole life of these films. How can they be
                  produced more efficiently, at a lower cost and with a smaller
                  footprint? And how can they be recognised, sorted and recycled once
                  the packaging has done its job? The project demonstrates its answers
                  at TRL 7, close to industrial reality, using three different cellulose
                  feedstocks.
                </p>
              </div>
            </div>
          ) : (
            <h2 className={`${styles.heading} ${styles.headingWide}`}>What PackAhead investigates</h2>
          )}
        </Reveal>
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <div className={`${styles.step} ${i === STEPS.length - 1 ? styles.stepAccent : ""}`}>
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
            <h2 className={`${styles.heading} ${styles.headingLight} ${styles.headingNarrow}`}>
              AI runs through the whole project
            </h2>
            <p className={styles.textLight}>
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
              <div className={styles.tool}>
                <span className={styles.toolNumber}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.toolTitle}>
                  <Lines lines={tool.title} />
                </h3>
                <p className={styles.toolText}>{tool.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.trust}>
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
        <div className={styles.goals}>
          {GOALS.map((goal, i) => (
            <Reveal key={goal.text} delay={i * 90}>
              <div className={styles.goal}>
                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.goalTitle}>
                  <Lines lines={goal.title} />
                </h3>
                <p className={styles.goalText}>{goal.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <Reveal>
          <div className={styles.two}>
            <h2 className={styles.heading}>Why it matters</h2>
            <p className={styles.text}>
              Most flexible food packaging today is made from fossil-based plastic and is
              hard to recycle. Better ways to produce and recycle cellulose films offer a
              renewable alternative that keeps food just as well protected.
            </p>
          </div>
        </Reveal>
        <div className={styles.audiences}>
          {AUDIENCES.map((audience) => (
            <Reveal key={audience.title}>
              <div className={styles.audience}>
                <h3 className={styles.audienceTitle}>{audience.title}</h3>
                <p className={styles.audienceText}>{audience.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
          <div className={styles.timelineHead}>
            <span className={styles.eyebrow}>TIMELINE</span>
            <h2 className={styles.heading}>Four years, one clear horizon</h2>
          </div>
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
