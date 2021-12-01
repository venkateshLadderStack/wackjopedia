import Layout from "../components/Layout";
import styles from "../styles/common.module.css";
import frameStyle from "../styles/frame8.module.css";
import Banner from "../components/Banner";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import Button from "../components/Button";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../queries/holidayData";
import { getFooterData, getHeaderData } from "../queries/layout";
import { getHomePageData } from "../queries/homePage";

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

const Frame8 = ({
  headerData,
  footerData,
  holidays,
  holidayTags,
  homeData,
}) => {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container wd">
          <Banner data={homeData?.banner} />
          <div className="row">
            <h3 className="py-4">Sprawdź gdzie jechać na wakacje</h3>
            <div className="col-8">
              <DesinationCard />
            </div>
            <div className="col-4">
              <Holiday data={homeData?.featured_holiday} />
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
              <Banner data={homeData?.banner} />
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
              {holidays?.map((item, i) => {
                return i <= 3 ? <OfferSection item={item} key={i} /> : null;
              })}
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
  const client = new ApolloClient({
    uri: "https://wakacjopedia-strapi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const holidayData = await client.query({
    query: getHolidayData,
  });

  const headerData = await client.query({
    query: getHeaderData,
  });

  const footerData = await client.query({
    query: getFooterData,
  });

  const holidayTags = await client.query({
    query: getHolidayTags,
  });

  const homeData = await client.query({
    query: getHomePageData,
  });

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
    },
  };
};
