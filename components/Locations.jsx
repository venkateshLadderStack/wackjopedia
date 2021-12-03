import styles from "../styles/css/locations.module.css";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

const BlogSection = ({ item }) => {
  return (
    <Link href={`/holiday/${item?.slug}`} passHref>
      <div className="pointer my-3">
        <div className={styles.blog}>
          <div className={`${styles.blog__img} `}>
            <ImageComponent
              loading="lazy"
              layout="responsive"
              src={item?.thumbnail?.hash}
              width={294}
              height={263}
              alt="blog"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <p className={`${styles.blogText} mt-4`}>{item?.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogSection;
