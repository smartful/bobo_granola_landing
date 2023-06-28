import Image from "next/image";
import styles from "./testimonial.module.css";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <blockquote>
          <p>
            <span className={styles.strong}>Bobo Granola</span> m'a permis de
            rencontrer mon partenaire idéal, quelqu'un qui partage ma passion
            pour la nature. <br />
            Nous travaillons maintenant ensemble pour faire une réelle
            différence dans le monde.
          </p>
          <cite>- Emma, militante écolo</cite>
        </blockquote>
        <Image
          src="/emma.jpg"
          className={styles.emma}
          alt="Emma avatar"
          width={100}
          height={100}
          priority
        />
      </div>
    </section>
  );
};

export default Testimonial;
