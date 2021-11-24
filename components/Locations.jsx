import Image from "next/image";
import styles from "../styles/css/locations.module.css";

const BlogSection = ({ item }) => {
  console.log(item, "ITEm");
  return (
    <>
      <div className={styles.blog}>
        <Image
          loading="lazy"
          className={`${styles.blog__img} `}
          layout="responsive"
          src={item?.images[0]?.url}
          width={294}
          height={263}
          alt="blog"
        />
        <p className={`${styles.blogText} mt-4`}>{item?.title}</p>
      </div>
    </>
  );
};

export default BlogSection;
