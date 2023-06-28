import Cta from "../cta/Cta";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Rencontrez votre âme sœur écolo</h1>
        <p>
          Rejoignez <span className={styles.strong}>Bobo Granola</span>, le
          premier site de rencontre pour les militants écolos. <br />
          Connectez-vous avec des personnes partageant les mêmes valeurs et
          créez des liens authentiques basés sur l'amour de la nature.
        </p>
        <Cta />
      </div>
    </section>
  );
};

export default Hero;
