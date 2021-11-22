import React from "react";
import styles from "../styles/frame26.module.css";
import Image from "next/image";
import locationIMg from "../public/img/locationImg.png";

function Locationcard() {
  return (
    <>
      <div className={styles.location__section}>
        <Image
          src={locationIMg}
          alt="location"
          width={675}
          height={598}
          loading="lazy"
        />
        <div className="d-flex justify-content-between">
          <p className="p-2">Gdzie na wakacje w grudniu</p>
          <p className="p-2">Źródło: istock / travelpic</p>
        </div>
      </div>
    </>
  );
}

export default Locationcard;
