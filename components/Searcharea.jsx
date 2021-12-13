import styles from "../styles/css/searcharea.module.css";
import Link from "next/link";

const Searcharea = ({ data, title, link, nameBefore }) => {
  return (
    <>
      <div>
        <div className={styles.search__area}>
          <h3>{title}</h3>
          <ul>
            {data?.map((item, index) => {
              const slug = item?.continent
                ? `${item?.continent?.slug}/${item?.slug}`
                : `${item?.slug}`;
              return (
                <li key={index}>
                  <Link href={`/${link}/${slug}`} passHref>
                    <div>
                      {nameBefore}
                      {item?.title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Searcharea;
