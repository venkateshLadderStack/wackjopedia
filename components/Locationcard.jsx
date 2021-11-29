import styles from "../styles/css/locationcard.module.css";
import ImageComponent from "./ImageComponent";

function Locationcard({ data }) {
  return (
    <>
      <div className={styles.location__section}>
        <ImageComponent
          src={data?.featured_image?.hash}
          alt="location"
          width={675}
          height={598}
          loading="lazy"
          objectFit="cover"
          className="img_bod_rad"
        />
        <div className="d-flex justify-content-between">
          <p className="p-2">Gdzie na wakacje w grudniu</p>
          <p className="p-2">Źródło: istock / travelpic</p>
        </div>
      </div>
    </>
  );
}

export default Locationcard;
