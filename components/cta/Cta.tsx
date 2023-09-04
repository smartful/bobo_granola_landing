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
        Inscrivez-vous dès maintenant
      </button>
      {clicked && (
        <h3 className={styles.ctaInfos}>
          La récupération de courriels est en{" "}
          <span className={styles.underline}>cours de construction</span> ...
        </h3>
      )}
    </>
  );
};

export default Cta;
