import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import Link from "next/link";
import Banner from "../../components/FeaturedBanner";
import Button from "../../components/Button";
import DesinationCard from "../../components/DestinationCard";
import Holiday from "../../components/Holidaycard";
import Layout from "../../components/Layout";
import OfferSection from "../../components/OfferSection";
import styles from "../../styles/common.module.css";
import style from "../../styles/frame5.module.css";
import { getHolidayData, getHolidayTags } from "../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../queries/layout";
import { getHomePageData } from "../../queries/homePage";
import { getGlobalData } from "../../queries/global";
import { getContinentData } from "../../queries/continent";
import Pills from "../../components/Pills";

const Pogoda = ({
  headerData,
  footerData,
  homeData,
  holidayTags,
  holidays,
  global,
  continents,
}) => {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container ">
          <p className="pt-4">Wakacjopedia / Pogoda</p>
          <h1>Pogoda</h1>
          <Banner data={global?.banner} />
        </div>
        <div className="container  my-5">
          <div className={styles.pills__title}>
            <h3>Wybierz kontynent, aby sprawdzić pogodę dla wybranego kraju</h3>
          </div>

          <Pills data={continents} text={"Places in "} link={`pogoda`} />
        </div>
        <div className="container ">
          <h3 className="py-4">
            Lub szukaj miejsca z idealną pogodą, w wybranym miesiącu
          </h3>
          <div className="row mt-1">
            <div className="col-lg-8 col-md-12 px-0">
              <DesinationCard />
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={global?.featuredHoliday} />
            </div>
          </div>
        </div>
        <div className="container  my-5">
          <h3 className="mb-5">Gorące oferty Last Minute</h3>
          <div className="row">
            {holidays?.slice(0, 4)?.map((item, i) => (
              <OfferSection item={item} key={i} />
            ))}
          </div>
          <div className="row my-5">
            <div className="col-lg-12">
              <Button />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pogoda;

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

  const global = await client.query({
    query: getGlobalData,
  });

  const continents = await client.query({
    query: getContinentData,
  });

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
      global: global?.data?.global,
      continents: continents?.data?.continents,
    },
  };
};
