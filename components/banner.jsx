import Image from "next/image";
import bannerImg from "../public/img/banner.png";

const Banner = ({ title }) => {
  return (
    <>
      <h3 className="py-4">{title}</h3>
      <div className="banner">
        <Image
          layout="responsive"
          loading="lazy"
          width={5}
          height={1}
          src={bannerImg}
          alt="banner"
        />
      </div>
    </>
  );
};

export default Banner;
