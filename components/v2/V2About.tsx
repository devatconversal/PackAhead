import Image from "next/image";
import SwapButton from "../SwapButton";
import Reveal from "../Reveal";
import styles from "./V2About.module.css";

export default function V2About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.about}`}>
        <Reveal>
          <div className={styles.top}>
            <h2 className={styles.heading}>Nature, accelerated</h2>
            <div className={styles.copy}>
              <p className={styles.text}>
                PackAhead uses artificial intelligence to speed up biological innovation
                and turn cellulose into a new generation of sustainable packaging films.
                The project runs for four years and brings research institutions and
                companies together across Europe, with a link to South Korea.
              </p>
              <SwapButton href="#about" label="READ ABOUT THE PROJECT" variant="light" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.images}>
            <div className={styles.imageCard}>
              <Image
                src="https://images.unsplash.com/photo-1693496481322-39ad75e45db2?auto=format&fit=crop&w=1200&q=80"
                alt="Close-up of a translucent cellulose film catching the light"
                fill
                sizes="(max-width: 900px) 100vw, 660px"
                className={styles.image}
              />
              <span className={styles.caption}>Cellulose film, macro detail</span>
            </div>
            <div className={styles.imageCard}>
              <Image
                src="https://images.unsplash.com/photo-1582560475135-72433678395b?auto=format&fit=crop&w=1200&q=80"
                alt="Pipette used in enzyme research in a laboratory"
                fill
                sizes="(max-width: 900px) 100vw, 660px"
                className={styles.image}
              />
              <span className={styles.caption}>Enzyme research in the lab</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
