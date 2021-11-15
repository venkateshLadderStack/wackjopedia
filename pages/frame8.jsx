import Banner from "../components/banner";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import OfferSection from "../components/OfferSection";
import styles from "../styles/blog.module.css";
import PillSection from "../components/PillSection";

const pillsList = [
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
];

const frame8 = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <h3 className="py-4">Gdzie jechać na wakacje w grudniu?</h3>
          <Banner />
          <div className="row">
            <h3 className="py-4">Sprawdź gdzie jechać na wakacje</h3>
            <div className="col-8">
              <DesinationCard />
            </div>
            <div className="col-4">
              <Holiday />
            </div>
          </div>
          <div className="py-5">
            <Banner />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-5">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.pills__title}>
                <h3>Sprawdź gdzie jechać na wakacje</h3>
              </div>
              <div className={`${styles.pills__div}`}>
                {pillsList.map((item, index) => (
                  <PillSection item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-5">
          <h3 className="mb-5">Gorące oferty Last Minute</h3>
          <div className="row">
            <OfferSection />
            <OfferSection />
            <OfferSection />
            <OfferSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default frame8;
