import Image from "next/image";
import bannerImg from "../public/img/banner.png";
import ImageComponent from "./ImageComponent";

const Banner = ({ title, image }) => {
  return (
    <>
      <h3 className="py-4">{title}</h3>
      <div className="banner">
        {image ? (
          <ImageComponent
            layout="responsive"
            loading="lazy"
            width={5}
            height={1}
            src={image}
            alt="banner"
          />
        ) : (
          <Image
            layout="responsive"
            loading="lazy"
            width={5}
            height={1}
            src={bannerImg}
            alt="banner"
          />
        )}
      </div>
    </>
  );
};

export default Banner;
