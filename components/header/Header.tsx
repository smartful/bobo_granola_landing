import Nav from "@/components/nav/Nav";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <h2>Rencontrez des âmes engagées pour un monde meilleur !</h2>
      <h3>
        Trouvez votre partenaire idéal pour une relation écologique et engagée.
      </h3>
    </header>
  );
};

export default Header;
