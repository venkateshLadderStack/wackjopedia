import styles from "../styles/frame26.module.css";

const Frame26Text = ({ title, desc, highlighted }) => {
  return (
    <>
      <div className={styles.weather__detail}>
        <h4>{title}</h4>
        <p>
          {desc}
          <span>{highlighted}</span>
        </p>
      </div>
    </>
  );
};

export default Frame26Text;

export const Frame26List = ({ title, subtitle, desc }) => {
  return (
    <>
      <div className={styles.q__a__section}>
        <h3> {title}</h3>
        <h5>{subtitle} </h5>
        <p>{desc}</p>
      </div>
    </>
  );
};
