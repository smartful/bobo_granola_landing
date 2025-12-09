import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Bobo Granola Logo"
            width={64}
            height={64}
            priority
          />
          <div>
            <h1>Bobo Granola</h1>
            <p className={styles.baseline}>
              Rencontres engagées, actions concrètes.
            </p>
          </div>
        </div>
        <p className={styles.copy}>Tous droits réservés © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
