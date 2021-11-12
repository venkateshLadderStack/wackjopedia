import Image from "next/dist/client/image";
import styles from "../styles/blog.module.css";

const BlogSection = ({ item }) => {
  return (
    <>
      <div className={styles.blog}>
        <Image
          className={`${styles.blog__img} `}
          layout="responsive"
          src={item.img}
          width={294}
          height={263}
          alt="blog"
        />
        <p className={`${styles.blogText} mt-4`}>{item.text}</p>
      </div>
    </>
  );
};

export default BlogSection;
