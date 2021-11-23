import React from "react";
import Image from "next/image";
import placeImg from "../public/img/place.png";
import styles from "../styles/css/place.module.css";

function Places({ item }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className={styles.single__weather}>
          <Image
            loading="lazy"
            width={189}
            height={121}
            src={item?.images[0]?.url}
            alt="place-img"
          />
          <div className={`${styles.weather__text} m-2`}>
            <p>{item?.city}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Places;
