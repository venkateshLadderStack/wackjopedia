import React from "react";
import Image from "next/image";
import styles from "../styles/css/best.module.css";
import bestdeal from "../public/img/bestdeal.png";
import dateIcon from "../public/img/cal.png";
import useWindowSize from "../hooks/useWindowSIze";

const Bestdeal = ({ item }) => {
  const fillRange = (end = 5) => {
    return Array(end)
      .fill()
      .map((item, index) => 1 + index);
  };

  const stars = fillRange(item?.numOfStars);

  const { width } = useWindowSize();

  return (
    <div>
      <div className={styles.single__holy}>
        <div className={styles.holy__img}>
          <Image
            loading="lazy"
            width={width > 786 ? 350 : 450}
            height={width > 786 ? 199 : 310}
            layout="fixed"
            src={item?.thumbnail?.url || bestdeal}
            alt=""
            objectFit="cover"
            className="best_deal_img"
          />
          <a href="#">{item?.offerRating}</a>
        </div>
        <div className={styles.holy__containt}>
          <div className={styles.holy__hu}>
            <a href="#">
              {item?.country?.title} / {item?.city?.title}
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
                {item?.arrivalKind}
              </a>
              <a href="#" className="pl-2">
                <Image width={1} height={10} src={dateIcon} alt="" />
                {item?.arrivalDate} - {item?.departureDate}
              </a>
            </div>
            <div className={styles.holy__list}>
              <a href="#">
                <i className="fas fa-clock"></i>
                {item?.daysCount} dni
              </a>
              <a href="#">
                <i className="fas fa-utensils"></i>
                {item?.offerCategory}
              </a>
            </div>
          </div>
          <div className={styles.holy__last}>
            <p>
              od <span>{item?.discountPrice} zł</span> za os.
            </p>
            <div className={styles.hhl}>
              <a href="#">
                {Math.round(
                  ((Number(item?.actualPrice) - Number(item?.discountPrice)) /
                    Number(item?.discountPrice)) *
                    100
                )}
                %
              </a>
              <del>{item?.actualPrice} zł</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
