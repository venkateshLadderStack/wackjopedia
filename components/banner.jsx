import Image from "next/image";
import bannerImg from "../public/img/banner.png";
import ImageComponent from "./ImageComponent";
import Link from "next/link";
import styles from "../styles/css/banner.module.css";

const Banner = ({ title, image }) => {
  return (
    <>
      <h3 className="py-4">{title}</h3>
      <div className={styles.banner}>
        <div className={styles.bgImg}>
          <div className={styles.caption}>
            <h3> wakacje.pL</h3>
            <h3 className="mt-2"> #PRZEDLUZAMYWAKACJE</h3>
            <div className={styles.check}>
              <div>
                <i
                  className="fa fa-check mb-2"
                  style={{
                    color: `#FFC700`,
                  }}
                  aria-hidden="true"
                ></i>
                <span style={{ color: "white" }} className="pl-2">
                  Kierunki peine slonaca
                </span>
              </div>
              <div>
                <i
                  className="fa fa-check"
                  style={{
                    color: `#FFC700`,
                  }}
                  aria-hidden="true"
                ></i>
                <span style={{ color: "white" }} className="pl-2">
                  Skarzystaj z ikazji cenowych
                </span>
              </div>
            </div>
            <button className={styles.btn}>
              sprawdź oferty <i className="fas fa-angle-right px-1"></i>
            </button>
          </div>
        </div>
        {/* {image ? (
          <ImageComponent
            layout="responsive"
            loading="lazy"
            width={5}
            height={1}
            src={image}
            alt="banner"
          />
        ) : (
          <Image
            layout="responsive"
            loading="lazy"
            width={5}
            height={1}
            src={bannerImg}
            alt="banner"
          />
        )} */}
      </div>
    </>
  );
};

export default Banner;
