import React from "react";
import weatherStyle from "../styles/css/weathercard.module.css";

function Weathercard({ data }) {
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
      <div
        className={`${weatherStyle.system__single__box} ${cardBgColor(
          data?.monthCondition
        )}`}
      >
        <div className={weatherStyle.system__fx}>
          <div className={weatherStyle.system__1st}>
            <h6>{data?.month}</h6>
            <a href="#">{data?.monthCondition}</a>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.system__2__tp}>
              <h5>{data?.airTemperature}</h5>
              <span>°C</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Temperatura powietrza</p>
            </div>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.system__2__tp}>
              <h5>{data?.chanceRainfall}</h5>
              <span>%</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Szansa opadów</p>
            </div>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.system__2__tp}>
              <h5>{data?.waterTemperature}</h5>
              <span>°C</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Temperatura wody</p>
            </div>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.system__2__tp}>
              <h5>{data?.hoursSunny}</h5>
              <span>g</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Godziny słoneczne</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weathercard;
