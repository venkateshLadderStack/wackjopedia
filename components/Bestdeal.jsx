import React from "react";
import Image from "next/image";
import styles from "../styles/css/best.module.css";
import bestdeal from "../public/img/bestdeal.png";
import dateIcon from "../public/img/cal.png";
import ImageComponent from "./ImageComponent";

const Bestdeal = ({ item }) => {
  const fillRange = (end = 5) => {
    return Array(end)
      .fill()
      .map((item, index) => 1 + index);
  };

  const stars = fillRange(item?.rating);

  return (
    <div>
      <div className={styles.single__holy}>
        <div className={styles.holy__img}>
          <Image
            // layout="responsive"
            loading="lazy"
            width={221}
            height={199}
            src={item?.thumbnail?.url || bestdeal}
            alt=""
          />
          <a href="#">8.9</a>
        </div>
        <div className={styles.holy__containt}>
          <div className={styles.holy__hu}>
            <a href="#">
              {item?.country} / {item?.city}
            </a>
          </div>
          <div className={styles.holy__title}>
            <h3>{item?.title}</h3>
          </div>
          <div className={styles.holy__ster}>
            {stars?.map((i) => (
              <a href="#" key={i}>
                <i className="fas fa-star"></i>
              </a>
            ))}
          </div>
          <div className={styles.holy__list__fl}>
            <div className={styles.holy__list}>
              <a href="#">
                <i className="fas fa-plane"></i>
                {item?.visit_holiday}
              </a>
              <a href="#" className="pl-2">
                <Image width={1} height={10} src={dateIcon} alt="" />
                16.10.2021 - 23.10.2021
              </a>
            </div>
            <div className={styles.holy__list}>
              <a href="#">
                <i className="fas fa-clock"></i>
                {item?.hotel_max_available_days} dni
              </a>
              <a href="#">
                <i className="fas fa-utensils"></i>
                {item?.facilities}
              </a>
            </div>
          </div>
          <div className={styles.holy__last}>
            <p>
              od <span>{item?.discount_price} zł</span> za os.
            </p>
            <div className={styles.hhl}>
              <a href="#">
                {Math.round(
                  ((item?.actual_price - item?.discount_price) /
                    item?.discount_price) *
                    100
                )}
                %
              </a>
              <del>{item?.actual_price} zł</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
