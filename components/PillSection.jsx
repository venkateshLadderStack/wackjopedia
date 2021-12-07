import Link from "next/link";

const PillSection = ({ item }) => {
  return (
    <Link href="/" passHref>
      <div>Places in {item?.tag_name}</div>
    </Link>
  );
};

export default PillSection;
