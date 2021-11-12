import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="container">
        <Image
          layout="responsive"
          width={5}
          height={1}
          src={"/img/banner.png"}
          alt="banner"
        />
      </div>
    </>
  );
};

export default Banner;
