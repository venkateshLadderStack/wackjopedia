import React from "react";
import styles from "../styles/common.module.css";
import Bestdeal from "../components/Bestdeal";
import Layout from "../components/Layout";
import Seracharea from "../components/Searcharea";
import Button from "../components/Button";
import Banner from "../components/banner";
import Frame26Text, { Frame26List } from "../components/Textarea";
import Holiday from "../components/Holidaycard";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../queries/holidayData";
import { getFooterData, getHeaderData } from "../queries/layout";
import { getHomePageData } from "../queries/homePage";

const searchAreaList = [
  { link: "#", label: "Afryka" },
  { link: "#", label: "Afryka" },
  { link: "#", label: "Afryka" },
  { link: "#", label: "Afryka" },
  { link: "#", label: "Afryka" },
  { link: "#", label: "Afryka" },
  { link: "#", label: "Afryka" },
];

const bestLocations = [
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
  { link: "#", label: "Wakacje Dominikana" },
];

const wakacje = ({
  headerData,
  footerData,
  holidayTags,
  holidays,
  homeData,
}) => {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <section className="container wd">
          <h3 className="my-5 ">Najlepsze oferty wakacyjne</h3>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {holidays?.map((item, i) => (
                <Bestdeal key={i} item={item} />
              ))}

              <Button />
            </div>
            <div className="col-lg-4 col-md-12 my-5">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <Seracharea
                    item={searchAreaList}
                    title={`Szukaj wakacji w`}
                  />
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <Seracharea
                    item={bestLocations}
                    title={`Popularne kierunki wakacyjne`}
                  />
                </div>
              </div>
            </div>
          </div>
          <Banner />
          <div className="row my-5">
            <div className="col-lg-8 col-md-12">
              <Frame26Text
                title={`Meksyk - co warto wiedzieć?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Gdzie leży Meksyk?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Ile trwa lot do Meksyku?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Co warto zobaczyć w Meksyku?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Najlepsze plaże Meksyku`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Temperatura wody`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26List
                title={`Pytania i odpowiedzi`}
                subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
              />
              <Frame26List
                subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
              />
              <Frame26List
                subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
              />
              <Frame26List
                subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={homeData?.featured_holiday} />
            </div>
          </div>
        </section>
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
        <div className="container wd">
          <div className="my-5">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.pills__title}>
                  <h3>Sprawdź gdzie jechać na wakacje</h3>
                </div>
                <div className={styles.pills__div}>
                  {holidayTags?.map((item, index) => (
                    <PillSection item={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default wakacje;

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
