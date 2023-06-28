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
            width={80}
            height={80}
            priority
          />
          <h1>Bobo Granola</h1>
        </div>
      </div>
      <p>Tous droits réservés &copy; 2023 Bobo Granola</p>
    </footer>
  );
};

export default Footer;
