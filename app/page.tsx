import Cta from "@/components/cta/Cta";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Feature from "@/components/feature/Feature";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonial/Testimonial";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className={styles.featuresContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Ce qui nous rassemble</p>
          <h2>Une communauté d'âmes vertes</h2>
          <p className={styles.subtitle}>
            Bobo Granola, c&apos;est l&apos;espace pour rencontrer des personnes
            qui vivent leurs convictions écologiques au quotidien.
          </p>
        </div>
        <div className={styles.container}>
          <Feature
            title="Protection de l'environnement"
            description="Rencontrez des personnes engagées dans la préservation du vivant et construisez ensemble un avenir durable."
            image="/icon1.png"
          />
          <Feature
            title="Mode de vie éco-responsable"
            description="Connectez-vous avec des individus qui font rimer quotidien responsable et joie, et inspirez-vous mutuellement."
            image="/icon2.png"
          />
          <Feature
            title="Événements écologiques"
            description="Découvrez des événements engagés près de chez vous et rejoignez des actions locales pour faire bouger les lignes."
            image="/icon3.png"
          />
        </div>
        <Cta />
      </section>
      <Testimonial />
      <Footer />
    </>
  );
}
