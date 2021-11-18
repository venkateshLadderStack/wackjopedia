import styles from "../styles/css/holiday.module.css";

const Holiday = () => {
  return (
    <>
      <div className={styles.holiday}>
        <div className={styles.bgImg}>
          <span className={styles.rating}>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </span>
          <div className={styles.holiday__caption} style={{ zIndex: "1" }}>
            <div className={`${styles.holiday__title} mb-3`}>
              <h3>Gorące oferty wakacyjne</h3>
            </div>
            <div className={styles.holiday__text}>
              <p>
                już od <span>3 555 zł</span> za os.
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
