import Nav from "@/components/nav/Nav";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textBlock}>
        <h2>Rencontrez des âmes engagées pour un monde meilleur</h2>
        <h3>Le rendez-vous des cœurs qui militent pour la planète.</h3>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
