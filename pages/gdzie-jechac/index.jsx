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
import { getGlobalData, getMonthData } from "../../queries/global";
import { getContinentData } from "../../queries/continent";
import Pills from "../../components/Pills";
import { lastMinuteAll } from "../api/lastMinutes";
import LastMinuteCard from "../../components/LastMinuteCard";

const WhereToGO = ({
  headerData,
  footerData,
  holidays,
  global,
  continents,
  months,
  lastMinutes,
}) => {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container ">
          <p className="pt-4">Wakacjopedia / Gdzie jechać</p>
          <h1>Zobacz gdzie jechać na wakacje</h1>
          <Banner data={global?.banner} />
        </div>
        <div className="container  my-5">
          <div className={styles.pills__title}>
            <h3>
              Wybierz miesiąc, aby sprawdzić gdzie warto jechać na wakacje
            </h3>
          </div>

          <Pills data={months} text={"Wakacje w "} link={`gdzie-jechac`} />
        </div>
        <div className="container  my-5">
          <div className={styles.pills__title}>
            <h3>
              Sprawdź również gdzie warto jechać na wakacje w konkretnych
              okresach
            </h3>
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
            {/* {lastMinutes?.slice(0, 4)?.map((item, i) => (
            <LastMinuteCard item={item} key={i} />
          ))} */}
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

export default WhereToGO;

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

  const res = await fetch(`https://wakacjopedia-strapi.herokuapp.com/months`);
  const months = await res.json();

  // const { data } = await lastMinuteAll();

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
      global: global?.data?.global,
      continents: continents?.data?.continents,
      months,
      //  lastMinutes: data,
    },
  };
};
