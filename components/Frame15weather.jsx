import React from "react";
import styles from "../styles/css/f15weather.module.css";
import Image from "next/image";
import sunImg from "../public/img/sun.png";
import breezeImg from "../public/img/breeze.png";

function Frame15weather() {
  return (
    <>
      <div className={`${styles.pogo__wrap} pb-4`}>
        <div className={`${styles.pogo__title} pb-1`}>
          <h6>Pogoda teraz:</h6>
        </div>
        <div className={`${styles.pogo__tx__box} pb-1`}>
          <div className={styles.pogo__bx__tt}>
            <Image loading="lazy" width={36} height={35} src={sunImg} alt="" />
            <h5>25</h5>
            <span>°C</span>
          </div>
          <div className={styles.pog__tx}>
            <p>Temperatura powietrza</p>
          </div>
        </div>
        <div className={styles.pogo__tx__box}>
          <div className={styles.pogo__bx__tt}>
            <Image
              loading="lazy"
              width={36}
              height={35}
              src={breezeImg}
              alt=""
            />
            <h5>25</h5>
            <span>°C</span>
          </div>
          <div className={styles.pog__tx}>
            <p>Temperatura powietrza</p>
          </div>
        </div>
        <div className={styles.pogo__title}>
          <h6>Pogoda teraz:</h6>
        </div>
        <div className={styles.pogo__btn}>
          <a href="#">Pogoda Meksyk</a>
          <a href="#">Last Minute Meksyk</a>
          <a href="#">Wakacje Meksyk</a>
          <a href="#">All Inclusive Meksyk</a>
        </div>
      </div>
    </>
  );
}

export default Frame15weather;
