import React from "react";
import styles from "../styles/css/button.module.css";

function Button() {
  return (
    <>
      <div className={styles.deal__btn}>
        <a href="#" className={`${styles.theme__btn} py-3`}>
          pokaż więcej ofert
        </a>
      </div>
    </>
  );
}

export default Button;
