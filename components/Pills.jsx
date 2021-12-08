import Link from "next/link";
import styles from "../styles/common.module.css";

const Pills = ({ data, text, link }) => {
  return (
    <div className="row">
      {data?.map((item, index) => (
        <div className={`col-lg-4 col-md-6 col-sm-12`} key={index}>
          <Link href={`/${link}/${item?.slug}`} passHref>
            <div className={`${styles.pill}`}>
              {" "}
              {text} {item?.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pills;
