import styles from "../styles/css/offer.module.css";
import ImageComponent from "./ImageComponent";
import Link from "next/link";
import Image from "next/image";

const LastMinuteCard = ({ item }) => {
  const fillRange = (end = 4) => {
    return Array(end)
      .fill()
      .map((item, index) => 1 + index);
  };

  const stars = fillRange(item?.rating);

  return (
    // <Link href={`/holiday/${item?.slug}`} passHref>
    <div className="col-lg-3 col-md-4 col-sm-6 pointer">
      <div className={styles.deal}>
        <div className={styles.blog}>
          <div className={`${styles.blog__img} `}>
            <Image
              loading="lazy"
              layout="responsive"
              src={item?.img_url_1}
              width={294}
              height={263}
              alt="blog"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className={`${styles.deal__containt} px-3`}>
          <div className={styles.deal__title}>
            <h3>{item?.name}</h3>
          </div>
          <div className={styles.offer__rating}>
            {stars?.map((i) => (
              <span key={i}>
                <i className="fas fa-star"></i>
              </span>
            ))}
          </div>
          <div className={styles.deal__pp}>
            <a href="#">
              {Math.round(
                ((Number(item?.price_regular) - Number(item?.price_actual)) /
                  Number(item?.price_regular)) *
                  100
              )}
              %
            </a>
            <del>{item?.price_regular} zł</del>
          </div>
          <div className={styles.deal__text}>
            <p>
              od <span>{item?.price_actual} zł</span> za os.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default LastMinuteCard;
