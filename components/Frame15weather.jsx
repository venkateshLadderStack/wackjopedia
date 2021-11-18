import React from "react";
import Image from "next/image";
import sunImg from "../public/img/sun.png";
import breezeImg from "../public/img/breeze.png";
function Frame15weather() {
  return (
    <>
      <div className="pogo-wrap pb-4">
        <div className="pogo-title pb-1">
          <h6>Pogoda teraz:</h6>
        </div>
        <div className="pogo-tx-box pb-1">
          <div className="pogo-bx-tt">
            <Image loading="lazy" width={36} height={35} src={sunImg} alt="" />
            <h5>25</h5>
            <span>°C</span>
          </div>
          <div className="pog-tx">
            <p>Temperatura powietrza</p>
          </div>
        </div>
        <div className="pogo-tx-box">
          <div className="pogo-bx-tt">
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
          <div className="pog-tx">
            <p>Temperatura powietrza</p>
          </div>
        </div>
        <div className="pogo-title">
          <h6>Pogoda teraz:</h6>
        </div>
        <div className="pogo-btn">
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
