import Image from "next/image";
import React from "react";

const ImageComponent = ({
  src,
  width,
  height,
  loading = "lazy",
  quality = 80,
  layout = "responsive",
  blurDataURL,
  alt = "picture",
}) => {
  const hostUrl = `https://res.cloudinary.com/dsxtmwsbn/image/upload/v1636749401`;
  return (
    <Image
      //   className="object-center object-cover w-full h-full"
      src={`${hostUrl}/${src}`}
      alt={alt}
      width={width ? width : undefined}
      height={height ? height : undefined}
      layout={layout}
      quality={quality}
      blurDataURL={blurDataURL ? blurDataURL : undefined}
      loading={loading}
    />
  );
};

export default ImageComponent;
