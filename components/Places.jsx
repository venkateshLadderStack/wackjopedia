import React from "react";
import styles from "../styles/css/place.module.css";
import ImageComponent from "./ImageComponent";

function Places({ item }) {
  return (
    <>
      <div className={styles.single__weather}>
        <div className={styles.place__img}>
          <ImageComponent
            loading="lazy"
            width={189}
            height={121}
            src={item?.thumbnail?.hash}
            alt="place-img"
          />
        </div>
        <div className={`${styles.weather__text} m-2`}>
          <p>{item?.title || item?.city}</p>
        </div>
      </div>
    </>
  );
}

export default Places;
