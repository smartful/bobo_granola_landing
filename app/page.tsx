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
        <div className={styles.container}>
          <Feature
            title="Protection de l'environnement"
            description="Rencontrez des personnes engagées dans la préservation de l'environnement et contribuez ensemble à un avenir durable."
            image="/icon1.png"
          />
          <Feature
            title="Mode de vie éco-responsable"
            description="Connectez-vous avec des individus qui adoptent un mode de vie respectueux de la planète et inspirez-vous mutuellement."
            image="/icon2.png"
          />
          <Feature
            title="Événements écolos"
            description="Découvrez des événements écologiques près de chez vous et participez à des activités en lien avec la protection de l'environnement."
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
