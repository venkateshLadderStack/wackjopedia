import styles from "../styles/css/holiday.module.css";

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
        {/* inline styles for now, let it be there */}
        <div
          className={styles.bgImg}
          style={{
            backgroundImage: `url(${
              data?.featured_showcase_image?.url || "/img/bgImg.png"
            })`,
          }}
        >
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
              <a href="#">sprawdź oferty</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
