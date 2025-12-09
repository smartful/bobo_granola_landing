import Cta from "../cta/Cta";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>Rencontres éco-conscientes</div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Rencontrez votre âme sœur écolo</h1>
          <p>
            Rejoignez <span className={styles.strong}>Bobo Granola</span>, le
            site de rencontre des militants écologiques. Connectez-vous avec des
            personnes qui partagent vos valeurs et créez des liens authentiques
            pour agir ensemble.
          </p>
          <div className={styles.actions}>
            <Cta />
            <p className={styles.secondary}>
              Évènements locaux, défis zéro déchet, sorties nature : tout est
              plus fort à deux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
