import React from "react";
import weatherStyle from "../styles/css/weathercard.module.css";

function Weathercard({ detail }) {
  return (
    <>
      <div
        className={`${weatherStyle.system__single__box} 
        ${detail.month == "Styczeń" && weatherStyle.jan}
        ${detail.month == "Luty" && weatherStyle.feb}
        ${detail.month == "Marzec" && weatherStyle.mar}
        ${detail.month == "Kwiecień" && weatherStyle.april}
        ${detail.month == "Może" && weatherStyle.may}
        ${detail.month == "Czerwiec" && weatherStyle.jun}
        ${detail.month == "Lipiec" && weatherStyle.july}
        ${detail.month == "Sierpień" && weatherStyle.aug}
        ${detail.month == "Wrzesień" && weatherStyle.sep}
        ${detail.month == "Październik" && weatherStyle.oct}
        ${detail.month == "Listopad" && weatherStyle.nov}
        ${detail.month == "Grudzień" && weatherStyle.dec}
        `}
      >
        <div className={weatherStyle.system__fx}>
          <div className={weatherStyle.system__1st}>
            <h6>{detail.month}</h6>
            <a href="#">idealna pogoda</a>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.syste__2__tp}>
              <h5>25</h5>
              <span>°C</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Temperatura powietrza</p>
            </div>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.syste__2__tp}>
              <h5>25</h5>
              <span>°C</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Temperatura powietrza</p>
            </div>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.syste__2__tp}>
              <h5>25</h5>
              <span>°C</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Temperatura powietrza</p>
            </div>
          </div>
          <div className={weatherStyle.system__2}>
            <div className={weatherStyle.syste__2__tp}>
              <h5>25</h5>
              <span>°C</span>
            </div>
            <div className={weatherStyle.system__2__tp}>
              <p>Temperatura powietrza</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weathercard;
