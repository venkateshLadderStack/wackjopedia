const PillSection = ({ item }) => {
  return (
    <>
      <a href={item.pillLink}>{item.pilltext}</a>
    </>
  );
};

export default PillSection;
