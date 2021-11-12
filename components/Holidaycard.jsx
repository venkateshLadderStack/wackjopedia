import styles from '../styles/blog.module.css';

const Holiday = () => {
  return (
    <>
      <div className={styles.blog__right}>
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
          <div className={styles.blogright__caption} style={{ zIndex: "1" }}>
            <div className={`${styles.blogright__title} mb-3`}>
              <h3>Gorące oferty wakacyjne</h3>
            </div>
            <div className={styles.blogright__text}>
              <p>
                już od <span>3 555 zł</span> za os.
              </p>
            </div>
            <div className={styles.blogright__btn}>
              <a href="#">sprawdź oferty</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
