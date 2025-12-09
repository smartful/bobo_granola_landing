import Image from "next/image";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Bobo Granola Logo"
          width={56}
          height={56}
          priority
        />
        <div>
          <h1>Bobo Granola</h1>
          <p>Rencontres qui font pousser des forêts.</p>
        </div>
      </div>
      <span className={styles.badge}>Édition engagée</span>
    </nav>
  );
};

export default Nav;
