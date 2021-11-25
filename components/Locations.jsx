import Image from "next/image";
import styles from "../styles/css/locations.module.css";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

const BlogSection = ({ item }) => {
  return (
    <Link href={`/holiday/${item?.slug}`} passHref>
      <div className="pointer">
        <div className={styles.blog}>
          <ImageComponent
            loading="lazy"
            className={`${styles.blog__img} `}
            layout="responsive"
            src={item?.thumbnail?.hash}
            width={294}
            height={263}
            alt="blog"
          />
          <p className={`${styles.blogText} mt-4`}>{item?.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogSection;
