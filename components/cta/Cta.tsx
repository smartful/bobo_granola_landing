"use client";

import { useState } from "react";
import styles from "./cta.module.css";

const Cta = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <button onClick={toggle} className={styles.ctaButton}>
        Rejoindre la communauté
      </button>
      {clicked && (
        <p className={styles.ctaInfos}>
          La récolte d'e-mails arrive bientôt. En attendant, suivez nos
          actualités et événements près de chez vous.
        </p>
      )}
    </>
  );
};

export default Cta;
