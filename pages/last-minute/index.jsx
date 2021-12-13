import React, { useState } from "react";
import styles from "../../styles/common.module.css";
import Bestdeal from "../../components/Bestdeal";
import Layout from "../../components/Layout";
import Searcharea from "../../components/Searcharea";
import Button from "../../components/Button";
import Banner from "../../components/FeaturedBanner";
import Holiday from "../../components/Holidaycard";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../queries/layout";
import { getHomePageData } from "../../queries/homePage";
import { getGlobalData } from "../../queries/global";
import { getContinentData, getCountryData } from "../../queries/continent";
import { getWakacjeData, getWakacjePage } from "../../queries/wakacje";
import LastMinuteCard from "../../components/LastMinuteCard";
import { lastMinuteAll } from "../api/lastMinutes";
import ReactMarkdown from "react-markdown";
import Pills from "../../components/Pills";
import PaginatedItems from "../../components/Paginate";
import Breadcrumbs from "../../components/Breadcrumbs";
import _ from "lodash";

const LastMinute = ({
  headerData,
  footerData,
  holidayTags,
  holidays,
  homeData,
  global,
  continents,
  countries,
  wakacje,
  lastMinutes,
  wakacjeData,
  wakacjeDetail,
}) => {
  const forPills = [
    {
      title: "Pogoda",
      slug: "pogoda",
    },
    {
      title: "Wakacje",
      slug: "wakacje",
    },
    {
      title: "All Inclusive",
      slug: "all-inclusive",
    },
    {
      title: "Gdzie jechać",
      slug: "gdzie-jechac",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tempList, setTempList] = useState();

  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <section className="container wd">
          <Breadcrumbs title={`Last Minute`} />
          <h1 className="pb-4">Najlepsze oferty wakacyjne</h1>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {tempList?.map((item, i) => (
                <Bestdeal key={i} item={item} />
              ))}
              <PaginatedItems
                items={wakacjeDetail}
                itemsPerPage={10}
                emitCurrentItems={(data) => {
                  setTempList(data);
                }}
              />
              <Button />
            </div>
            <div className="col-lg-4 col-md-12 mb-5">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <Searcharea
                    data={continents}
                    title={`Szukaj wakacji w`}
                    link={"wakacje"}
                  />
                </div>

                <div className="col-lg-12 col-md-6 col-sm-12">
                  <Searcharea
                    data={countries}
                    title={`Popularne kierunki wakacyjne`}
                    link={"wakacje"}
                    nameBefore={"Wakacje "}
                  />
                </div>
              </div>
            </div>
          </div>
          <Banner data={global?.banner} />
          <div className="row my-5">
            <div className={`col-lg-8 col-md-12 ${styles.content_Section}`}>
              <ReactMarkdown>{wakacjeData?.content}</ReactMarkdown>
              <h2 className="mb-2">Pytania i odpowiedzi</h2>
              <ReactMarkdown>{wakacjeData?.QnA}</ReactMarkdown>
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={global?.featuredHoliday} />
            </div>
          </div>
        </section>
        <div className="container wd my-5">
          <h3 className="mb-5">Gorące oferty Last Minute</h3>
          <div className="row">
            {lastMinutes?.slice(0, 4)?.map((item, i) => (
              <LastMinuteCard item={item} key={i} />
            ))}
          </div>
          <div className="row my-5">
            <div className="col-lg-12">
              <Button />
            </div>
          </div>
        </div>
        <div className="container wd">
          <Pills data={forPills} text={""} link={""} />
        </div>
      </Layout>
    </>
  );
};

export default LastMinute;

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://feeds.datafeedwatch.com/19973/3f147dff0974f74f68c672a75abb23edae110ea8.json"
  );

  const dataRes = await res.json();

  const lastMins = dataRes?.products;

  const wakacjeDetail = _?.filter(lastMins, ["offer_category", "Last Minute"]);

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

  const countries = await client.query({
    query: getCountryData,
  });

  const wakacje = await client.query({
    query: getWakacjeData,
  });

  const wakacjeData = await client.query({
    query: getWakacjePage,
  });

  const { data } = await lastMinuteAll();

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
      global: global?.data?.global,
      continents: continents?.data?.continents,
      countries: countries?.data?.countries,
      wakacje: wakacje?.data?.wakacjis,
      lastMinutes: data,
      wakacjeData: wakacjeData?.data?.wakacje,
      wakacjeDetail: wakacjeDetail,
    },
  };
};
