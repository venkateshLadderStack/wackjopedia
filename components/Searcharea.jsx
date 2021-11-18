import styles from "../styles/css/searcharea.module.css";

const Searcharea = ({ item, title }) => {
  return (
    <>
      <div>
        <div className={styles.search__area}>
          <h3>{title}</h3>
          <ul>
            {item.map((x, index) => (
              <li key={index}>
                <a href={x.link}>{x.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Searcharea;
