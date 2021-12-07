import React from "react";
import frequentsearch from "../styles/css/frequentserach.module.css";
import Image from "next/image";
import placeImg from "../public/img/place.png";

function Frequentsearch() {
  return (
    <>
      <div className={frequentsearch.single__weather}>
        <div className={`${frequentsearch.weather__img} mb-2`}>
          <Image
            layout="responsive"
            loading="lazy"
            width={189}
            height={121}
            src={placeImg}
            alt="place-img"
          />
        </div>
        <div className={frequentsearch.weather__text}>
          <p>Cozumel</p>
        </div>
        <div className={frequentsearch.weather__box}>
          <div className={frequentsearch.weather__btn}>
            <a href="#">idealna pogoda</a>
          </div>
          <div className={frequentsearch.weather__box__fx}>
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>25</h4>
                <span>°C</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Temperatura powietrza</p>
              </div>
            </div>
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>11</h4>
                <span>%</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Szansa opadów</p>
              </div>
            </div>
          </div>
          <div
            className={`${frequentsearch.weather__box__fx} ${frequentsearch.lst__bx}`}
          >
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>25</h4>
                <span>°C</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Temperatura powietrza</p>
              </div>
            </div>
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>11</h4>
                <span>%</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Szansa opadów</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frequentsearch;
