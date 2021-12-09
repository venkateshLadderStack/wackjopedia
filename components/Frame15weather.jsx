import React from "react";
import styles from "../styles/css/f15weather.module.css";
import Image from "next/image";
import sunImg from "../public/img/sun.png";
import breezeImg from "../public/img/breeze.png";
import Link from "next/link";

function Frame15weather({ data }) {
  return (
    <>
      <div className={`${styles.pogo__wrap} pb-4`}>
        <div className={`${styles.pogo__title} pb-1`}>
          <h6>Pogoda teraz:</h6>
        </div>
        <div className={`${styles.pogo__tx__box} pb-1`}>
          <div className={styles.pogo__bx__tt}>
            <Image loading="lazy" width={36} height={35} src={sunImg} alt="" />
            <h5>{data?.weatherNow?.airTemperature}</h5>
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
            <h5>{data?.weatherNow?.waterTemperature}</h5>
            <span>°C</span>
          </div>
          <div className={styles.pog__tx}>
            <p>Temperatura wody</p>
          </div>
        </div>
        <div className={styles.pogo__title}>
          <h6>Sprawdź</h6>
        </div>
        <div className={styles.pogo__btn}>
          <Link
            href={`/pogoda/${data?.continent?.slug}/${data?.slug}`}
          >{`Pogoda ${data?.title}`}</Link>
          <Link
            href={`/last-minute/${data?.continent?.slug}/${data?.slug}`}
          >{`Last Minute ${data?.title}`}</Link>
          <Link
            href={`/wakacje/${data?.continent?.slug}/${data?.slug}`}
          >{`Wakacje ${data?.title}`}</Link>
          <Link
            href={`/all-inclusive/${data?.continent?.slug}/${data?.slug}`}
          >{`All Inclusive ${data?.title}`}</Link>
        </div>
      </div>
    </>
  );
}

export default Frame15weather;
