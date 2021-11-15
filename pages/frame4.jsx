import Banner from "../components/banner";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import styles from "../styles/blog.module.css";

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

const Frame4 = () => {
  return (
    <>
      <div className="container">
        <h3 className="py-4">Pogoda w Afryce</h3>
        <Banner />
      </div>
      <div className="container">
        <div className="my-5">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.pills__title}>
                <h3>Sprawdź gdzie jechać na wakacje</h3>
              </div>
              <div className={styles.pills__div}>
                {pillsList.map((item, index) => (
                  <PillSection item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="py-4">Blog Wakacjopedia</h3>
        <Banner />
        <div className="mt-5">
          <h3 className="py-4">Sprawdź gdzie jechać na wakacje</h3>
          <div className="row mt-1">
            <div className="col-lg-8 col-md-12 pr-0">
              <DesinationCard />
            </div>
            <div className="col-lg-4 col-md-12 pr-0 mt-2">
              <Holiday />
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
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.deal__btn}>
                <a href="#" className={`${styles.theme__btn} py-3`}>
                  pokaż więcej ofert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame4;
