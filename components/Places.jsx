import React from "react";
import Image from "next/image";
import placeImg from "../public/img/place.png";
import styles from "../styles/css/place.module.css";
import ImageComponent from "./ImageComponent";

function Places({ item }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12">
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
            <p>{item?.city}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Places;
