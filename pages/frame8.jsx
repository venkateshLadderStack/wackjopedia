import Layout from "../components/Layout";
import styles from "../styles/common.module.css";
import frameStyle from "../styles/frame8.module.css";
import Banner from "../components/Banner";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import Button from "../components/Button";

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

const Frame8 = ({ headerData, footerData, holidays, holidayTags }) => {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container wd">
          <Banner title="Gdzie jechać na wakacje w grudniu?" />
          <div className="row">
            <h3 className="py-4">Sprawdź gdzie jechać na wakacje</h3>
            <div className="col-8">
              <DesinationCard />
            </div>
            <div className="col-4">
              <Holiday />
            </div>
          </div>
          <div>
            <div className="col-lg-12 mt-5">
              <div className={`${frameStyle.location__title}`}>
                <h3>Znalezione lokalizacje</h3>
              </div>
              <div className={frameStyle.location__box}>
                <p>
                  Uzupełnij powyższy formularz, a następnie kliknij przycisk
                  “Szukaj lokalizacji”, <br />
                  byśmy mogli wyświetlić Ci idealne lokalizacje wakacyjne
                </p>
              </div>
            </div>
            <div className="py-5">
              <Banner />
            </div>
          </div>
        </div>
        <div className="container wd">
          <div className="my-5">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.pills__title}>
                  <h3>Sprawdź gdzie jechać na wakacje</h3>
                </div>
                <div className={`${styles.pills__div}`}>
                  {holidayTags?.map((item, index) => (
                    <PillSection item={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container wd">
          <div className="my-5">
            <h3 className="mb-5">Gorące oferty Last Minute</h3>
            <div className="row">
              {holidays?.map((item, i) => (
                <OfferSection item={item} key={i} />
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Frame8;

export const getStaticProps = async (context) => {
  const headerRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/navbar"
  );

  const headerData = await headerRes.json();

  const footerRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/footer"
  );

  const footerData = await footerRes.json();

  const holidaysRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/hotels"
  );

  const holidays = await holidaysRes.json();

  const holidayTagsRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/tags"
  );

  const holidayTags = await holidayTagsRes.json();

  return {
    props: {
      headerData,
      footerData,
      holidays,
      holidayTags,
    },
  };
};
