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

  const hotelStars = item?.hotel_stars?.toString().split("")[0];

  const stars = fillRange(Number(hotelStars));

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
            src={item?.img_url_1 || bestdeal}
            alt=""
            objectFit="cover"
            className="best_deal_img"
            placeholder="blur"
            blurDataURL={item?.img_url_1}
          />
          <a href="#">{item?.offer_rating || "NA"}</a>
        </div>
        <div className={styles.holy__containt}>
          <div className={styles.holy__hu}>
            <a href="#">
              {item?.country} / {item?.city}
            </a>
          </div>
          <div className={styles.holy__title}>
            <h3>{item?.name}</h3>
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
                {item?.arrival_kind}
              </a>
              <a href="#" className="pl-2">
                <Image width={1} height={10} src={dateIcon} alt="" />
                {item?.arrival_date} - {item?.departure_date}
              </a>
            </div>
            <div className={styles.holy__list}>
              <a href="#">
                <i className="fas fa-clock"></i>
                {item?.days_count} dni
              </a>
              <a href="#">
                <i className="fas fa-utensils"></i>
                {item?.offer_category}
              </a>
            </div>
          </div>
          <div className={styles.holy__last}>
            <p>
              od <span>{item?.price_regular} zł</span> za os.
            </p>
            <div className={styles.hhl}>
              <a href="#">
                {Math.round(
                  ((Number(item?.price_actual) - Number(item?.price_regular)) /
                    Number(item?.price_regular)) *
                    100
                )}
                %
              </a>
              <del>{item?.price_actual} zł</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
