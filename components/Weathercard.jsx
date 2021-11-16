import React from "react";
import weatherStyle from "../styles/css/weathercard.module.css";

function Weathercard() {
  return (
    <>
      <div className={weatherStyle.system__single__box}>
        <div className={weatherStyle.system__fx}>
          <div className={weatherStyle.system__1st}>
            <h6>Styczeń</h6>
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
