import styles from "../styles/css/banner.module.css";
import Image from "next/image";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

const Banner = ({ data }) => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bgImg}>
          <ImageComponent
            src={data?.image?.hash}
            layout="fill"
            alt=""
            objectFit="cover"
            objectPosition="center"
            className="img_bod_rad"
            preload={true}
            quality={60}
          />
          <div className={styles.caption}>
            <h3> wakacje.pL</h3>
            <h3 className="mt-2"> {data?.hashtag}</h3>
            <div className={styles.check}>
              <div className="d-flex flex-row align-items-center">
                <i
                  className="fa fa-check"
                  style={{
                    color: `#FFC700`,
                  }}
                  aria-hidden="true"
                ></i>
                <span style={{ color: "white" }} className="pl-2">
                  {data?.point_1}
                </span>
              </div>
              <div className="d-flex flex-row align-items-center">
                <i
                  className="fa fa-check"
                  style={{
                    color: `#FFC700`,
                  }}
                  aria-hidden="true"
                ></i>
                <span style={{ color: "white" }} className="pl-2">
                  {data?.point_2}
                </span>
              </div>
            </div>
            <button className={styles.btn}>
              {data?.btn_text} <i className="fas fa-angle-right px-1"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
