import React from "react";
import styles from "../styles/perfectmonth.module.css";

function PerfectMonth() {
  return (
    <div>
      <div className={styles.oppy__right__top}>
        <div className={styles.oppy__ro__top__bx}>
          <p>Miesiące z idealną lub dobrą pogodą:</p>
          <h5>grudzień, styczeń, wrzesień, październik</h5>
        </div>
        <div className={`${styles.oppy__ro__top__bx} ${styles.cb__cg}`}>
          <p>Miesiące ze złą lub bardzo złą pogodą:</p>
          <h5>luty, marzec, kwiecień</h5>
        </div>
      </div>
    </div>
  );
}

export default PerfectMonth;
