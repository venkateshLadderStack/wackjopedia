import React from "react";
import styles from "../styles/css/perfectmonth.module.css";

function PerfectMonth({ weather }) {
  const bestMonths = weather?.filter(
    (item) => item.monthCondition === "Idealna pogoda"
  );
  const worstMonths = weather?.filter(
    (item) => item.monthCondition === "Bardzo zła pogoda"
  );

  const numOfBestMonths = bestMonths?.length - 1;
  const numOfWorstMonths = worstMonths?.length - 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.oppy__right__top}>
        <div className={styles.oppy__ro__top__bx}>
          <p>Miesiące z idealną lub dobrą pogodą:</p>
          <div className="row">
            {bestMonths?.map((item, i) => (
              <div className="col-6 m-0 p-0" key={i}>
                <h5>
                  {item?.month}
                  {numOfBestMonths > i && ","} &nbsp;
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.oppy__ro__top__bx} ${styles.cb__cg}`}>
          <p>Miesiące ze złą lub bardzo złą pogodą:</p>
          <div className="row">
            {worstMonths?.map((item, i) => (
              <div className="col-6 m-0 p-0" key={i}>
                <h5>
                  {item?.month}
                  {numOfBestMonths > i && ","} &nbsp;
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfectMonth;
