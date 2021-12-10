import React from "react";
import frequentsearch from "../styles/css/frequentserach.module.css";
import Image from "next/image";
import placeImg from "../public/img/place.png";

function Frequentsearch({ data, month, filterData }) {
  const monthTemp = data?.weather.filter((item) => item?.month === month);
  const tempData = monthTemp[0];

  const cardBgColor = (monthCondition) => {
    switch (monthCondition) {
      case "Idealna pogoda":
        return "idealna_pogoda";
        break;
      case "Dobra pogoda":
        return "dobra_pogoda";
        break;
      case "Zła pogoda":
        return "zla_pogoda";
        break;
      case "Bardzo zła pogoda":
        return "bardzo_zla_pogoda";
        break;
      case "Znośna pogoda":
        return "znosna_pogoda";
        break;
      default:
        return "idealna_pogoda";
        break;
    }
  };

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
          <p>{data?.title}</p>
        </div>
        <div
          className={`${frequentsearch.weather__box} ${cardBgColor(
            tempData?.monthCondition
          )}`}
        >
          <div className={frequentsearch.weather__btn}>
            <a href="#">{tempData?.monthCondition}</a>
          </div>
          <div className={frequentsearch.weather__box__fx}>
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>{tempData?.airTemperature}</h4>
                <span>°C</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Temperatura powietrza</p>
              </div>
            </div>
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>{tempData?.chanceRainfall}</h4>
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
                <h4>{tempData?.waterTemperature}</h4>
                <span>°C</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Temperatura wody</p>
              </div>
            </div>
            <div className={frequentsearch.weather__box__lf}>
              <div className={frequentsearch.weather__tp}>
                <h4>{tempData?.hoursSunny}</h4>
                <span>g</span>
              </div>
              <div className={frequentsearch.weather__tx}>
                <p>Godziny słoneczne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frequentsearch;
