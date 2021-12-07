import styles from "../styles/css/holiday.module.css";
import Link from "next/link";
import Image from "next/image";

const Holiday = ({ data }) => {
  const fillRange = (end = 5) => {
    return Array(end)
      .fill()
      .map((item, index) => 1 + index);
  };

  const stars = fillRange(data?.rating);

  return (
    <>
      <div className={styles.holiday}>
        <div className={styles.bgImg}>
          <div
            style={{
              zIndex: -9,
            }}
          >
            <Image
              src={data?.featured_image?.url}
              alt=""
              layout="fill"
              className={styles.bg_next}
              loading="lazy"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <span className={styles.rating}>
            {stars?.map((i) => (
              <span key={i}>
                <i className="fas fa-star"></i>
              </span>
            ))}
          </span>

          <div className={styles.holiday__caption} style={{ zIndex: "1" }}>
            <div className={`${styles.holiday__title} mb-3`}>
              <h3>{data?.title || "Gorące oferty wakacyjne"}</h3>
            </div>
            <div className={styles.holiday__text}>
              <p>
                już od <span>{data?.discount_price || "2 555"} zł</span> za os.
              </p>
            </div>
            <div className={styles.holiday__btn}>
              <Link href={`/holiday/${data?.slug}`}>sprawdź oferty</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
