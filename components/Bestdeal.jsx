import React from "react";
import Image from "next/image";
import styles from "../styles/css/best.module.css";
import bestdeal from "../public/img/bestdeal.png";
import dateIcon from "../public/img/cal.png";

const Bestdeal = () => {
  return (
    <div>
      <div className={styles.single__holy}>
        <div className={styles.holy__img}>
          <Image
            // layout="responsive"
            loading="lazy"
            width={221}
            height={199}
            src={bestdeal}
            alt=""
          />
          <a href="#">8.9</a>
        </div>
        <div className={styles.holy__containt}>
          <div className={styles.holy__hu}>
            <a href="#">Meksyk / Cancun</a>
          </div>
          <div className={styles.holy__title}>
            <h3>Iberostar Paraiso del Mar</h3>
          </div>
          <div className={styles.holy__ster}>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
          </div>
          <div className={styles.holy__list__fl}>
            <div className={styles.holy__list}>
              <a href="#">
                <i className="fas fa-plane"></i>Samolotem
              </a>
              <a href="#" className="pl-2">
                <Image width={1} height={10} src={dateIcon} alt="" />
                16.10.2021 - 23.10.2021
              </a>
            </div>
            <div className={styles.holy__list}>
              <a href="#">
                <i className="fas fa-clock"></i>7 dni
              </a>
              <a href="#">
                <i className="fas fa-utensils"></i>Ultra All Inclusive
              </a>
            </div>
          </div>
          <div className={styles.holy__last}>
            <p>
              od <span>2 755 zł</span> za os.
            </p>
            <div className={styles.hhl}>
              <a href="#">-11%</a>
              <del>3 355 zł</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
