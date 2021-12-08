import React from "react";
import styles from "../styles/css/perfectmonth.module.css";

function PerfectMonth({ bestMonths, worstMonths }) {
  const numOfBestMonths = bestMonths.length - 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.oppy__right__top}>
        <div className={styles.oppy__ro__top__bx}>
          <p>Miesiące z idealną lub dobrą pogodą:</p>
          <div
            style={{
              display: "flex",
            }}
          >
            {bestMonths.map((item, i) => (
              <div key={i}>
                <h5>
                  {item.title}
                  {numOfBestMonths > i && ","} &nbsp;
                </h5>
              </div>
            ))}
          </div>
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
