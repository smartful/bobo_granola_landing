import Image from "next/image";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
};

export default Nav;
