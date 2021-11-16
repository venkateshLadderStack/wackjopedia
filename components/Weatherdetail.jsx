import React from "react";
import style from "../styles/frame5.module.css";
import Image from "next/image";
import sunImg from "../public/img/sun.png";

function Weatherdetail({ img }) {
  return (
    <>
      <div className={`${style.weather__condition} pb-1`}>
        <Image src={img} width={36} height={32} alt="sun-img" />
        <h5>25</h5>
        <span>°C</span>
      </div>
      <div className={style.air__temp}>Temperatura powietrza</div>
    </>
  );
}

export default Weatherdetail;
