import Image from "next/image";
import dealImg from "../public/img/dealimg.png";
import styles from "../styles/blog.module.css";

const OfferSection = () => {
  return (
    <>
      <div className="col-lg-3 col-md-4">
        <div className={styles.deal}>
          <div className={styles.deal__img}>
            <Image src={dealImg} width={224} height={201} alt="" />
          </div>
          <div className={`${styles.deal__containt} px-3`}>
            <div className={styles.deal__title}>
              <h3>Iberostar Paraiso del Mar</h3>
            </div>
            <div className={styles.offer__rating}>
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
            </div>
            <div className={styles.deal__pp}>
              <a href="#">-11%</a>
              <del>3 355 zł</del>
            </div>
            <div className={styles.deal__text}>
              <p>
                od <span>2 755 zł</span> za os.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
