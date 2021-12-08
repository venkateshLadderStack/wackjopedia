import styles from "../styles/css/locationcard.module.css";
import ImageComponent from "./ImageComponent";

function Locationcard({ data }) {
  return (
    <div>
      <div className={styles.location__section}>
        <ImageComponent
          src={data?.featuredImage?.hash}
          alt="location"
          loading="lazy"
          layout="responsive"
          width={608}
          height={460}
          objectFit="cover"
          objectPosition="center"
          className="featured_image img_bod_rad"
        />
      </div>
      <div className="d-flex justify-content-between">
        <p className="p-2">Gdzie na wakacje w grudniu</p>
        <p className="p-2">Źródło: istock / travelpic</p>
      </div>
    </div>
  );
}

export default Locationcard;
