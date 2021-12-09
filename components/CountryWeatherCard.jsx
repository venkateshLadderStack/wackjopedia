import React from "react";
import Weatherdetail from "./Weatherdetail";
import sunImg from "../public/img/sun.png";
import breezeImg from "../public/img/breeze.png";
import style from "../styles/frame5.module.css";

const CountryWeatherCard = ({ weatherNow, weatherTomorrow }) => {
  return (
    <>
      <div className={style.weather__now}>
        <h6 className={`${style.weather__title} mb-4`}>Pogoda teraz:</h6>
        <div className="mb-5">
          <Weatherdetail
            img={sunImg}
            temperature={weatherNow?.airTemperature}
            temperatureType={"Temperatura powietrza"}
          />
        </div>
        <div className="mb-5">
          <Weatherdetail
            img={breezeImg}
            temperature={weatherNow?.waterTemperature}
            temperatureType={"Temperatura wody"}
          />
        </div>
        <h6 className={`${style.weather__title} mb-4 mt-5`}>Pogoda jutro::</h6>
        <div className="mb-5">
          <Weatherdetail
            img={sunImg}
            temperature={weatherTomorrow?.airTemperature}
            temperatureType={"Temperatura powietrza"}
          />
        </div>
        <div className="mb-5">
          <Weatherdetail
            img={breezeImg}
            temperature={weatherTomorrow?.waterTemperature}
            temperatureType={"Temperatura wody"}
          />
        </div>
      </div>
    </>
  );
};

export default CountryWeatherCard;
