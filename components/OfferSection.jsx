import styles from "../styles/css/offer.module.css";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

const OfferSection = ({ item }) => {
  const fillRange = (end) => {
    return Array(end)
      .fill()
      .map((item, index) => 1 + index);
  };

  const stars = fillRange(item?.rating);

  return (
    <Link href={`/holiday/${item?.slug}`} passHref>
      <div className="col-lg-3 col-md-4 col-sm-6 pointer">
        <div className={styles.deal}>
          <div className={styles.deal__img}>
            <ImageComponent
              src={item?.thumbnail?.hash}
              width={224}
              height={201}
              alt=""
              loading="lazy"
            />
          </div>
          <div className={`${styles.deal__containt} px-3`}>
            <div className={styles.deal__title}>
              <h3>{item?.title}</h3>
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
                  ((item?.actual_price - item?.discount_price) /
                    item?.discount_price) *
                    100
                )}
                %
              </a>
              <del>{item?.actual_price} zł</del>
            </div>
            <div className={styles.deal__text}>
              <p>
                od <span>{item?.discount_price} zł</span> za os.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OfferSection;
