import Reveal from "./Reveal";
import styles from "./Statement.module.css";

export default function Statement() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <p className={styles.text}>
            PackAhead brings artificial intelligence into a bio-based packaging value
            chain.{" "}
            <span className={styles.muted}>
              The project designs high-performance enzyme variants, produces
              recyclable cellulose films from three feedstocks, and optimises every
              step from raw material composition to end-of-life sorting.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
