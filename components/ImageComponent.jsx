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
  objectFit,
  objectPosition,
  className,
  preload,
}) => {
  const hostUrl = `https://res.cloudinary.com/dsxtmwsbn/image/upload/v1636749401`;
  return (
    <Image
      className={className}
      src={`${hostUrl}/${src}`}
      alt={alt}
      width={width ? width : undefined}
      height={height ? height : undefined}
      layout={layout}
      quality={quality}
      blurDataURL={blurDataURL ? blurDataURL : undefined}
      loading={!preload ? loading : undefined}
      objectFit={objectFit}
      objectPosition={objectPosition}
      preload={preload}
    />
  );
};

export default ImageComponent;
