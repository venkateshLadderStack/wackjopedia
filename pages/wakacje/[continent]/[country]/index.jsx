import React from "react";
import styles from "../../../../styles/common.module.css";
import Bestdeal from "../../../../components/Bestdeal";
import Layout from "../../../../components/Layout";
import Searcharea from "../../../../components/Searcharea";
import Button from "../../../../components/Button";
import Banner from "../../../../components/FeaturedBanner";
import Frame26Text, { Frame26List } from "../../../../components/Textarea";
import Holiday from "../../../../components/Holidaycard";
import OfferSection from "../../../../components/OfferSection";
import PillSection from "../../../../components/PillSection";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  getHolidayData,
  getHolidayTags,
} from "../../../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../../../queries/layout";
import { getHomePageData } from "../../../../queries/homePage";
import { getGlobalData } from "../../../../queries/global";
import {
  getContinentData,
  getCountryData,
} from "../../../../queries/continent";
import { getWakacjeData, getWakacjePage } from "../../../../queries/wakacje";
import LastMinuteCard from "../../../../components/LastMinuteCard";
import { lastMinute, lastMinuteAll } from "../../../api/lastMinutes";
import ReactMarkdown from "react-markdown";
import Pills from "../../../../components/Pills";
import { fetchSlugs } from "../../../api/hello";

const wakacje = ({
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
  countryDetail,
}) => {
  const forPills = [
    {
      title: `${countryDetail?.title}`,
      slug: `lokalizacje/${countryDetail?.continent?.slug}/${countryDetail?.slug}`,
    },
    {
      title: `Last Minute ${countryDetail?.title}`,
      slug: `last-minute/${countryDetail?.continent?.slug}/${countryDetail?.slug}`,
    },
    {
      title: `All Inclusive ${countryDetail?.title}`,
      slug: `all-inclusive/${countryDetail?.continent?.slug}/${countryDetail?.slug}`,
    },
    {
      title: `Pogoda ${countryDetail?.title}`,
      slug: `pogoda/${countryDetail?.continent?.slug}/${countryDetail?.slug}`,
    },
  ];

  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <section className="container ">
          <p className="pt-4">
            Wakacjopedia / Wakacje / {countryDetail?.continent?.title} /
            {countryDetail?.title}
          </p>
          <h1 className="pb-4">
            {countryDetail?.title} - Najlepsze oferty wakacyjne
          </h1>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {countryDetail?.wakacjis?.map((item, i) => (
                <Bestdeal key={i} item={item} />
              ))}
              <Button />
            </div>
            <div className="col-lg-4 col-md-12 my-5">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <Searcharea
                    data={countryDetail?.regions}
                    title={`Wakacje w ${countryDetail?.title}`}
                    link={`wakacje/${countryDetail?.continent?.slug}/${countryDetail?.slug}`}
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
            <div className="col-lg-8 col-md-12">
              <ReactMarkdown>{wakacjeData?.content}</ReactMarkdown>
              <h2 className="mb-2">Pytania i odpowiedzi</h2>
              <ReactMarkdown>{wakacjeData?.QnA}</ReactMarkdown>
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={global?.featuredHoliday} />
            </div>
          </div>
        </section>
        <div className="container my-5">
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
        <div className="container">
          <Pills data={forPills} text={""} link={""} />
        </div>
      </Layout>
    </>
  );
};

export default wakacje;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://wakacjopedia-strapi.herokuapp.com/countries/${context.params.country}`
  );
  const countryDetail = await res.json();

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

  const { data } = await lastMinute(countryDetail?.title);

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
      countryDetail,
    },
  };
};

export async function getStaticPaths() {
  const { slugs } = await fetchSlugs();

  const paths = slugs.map((path) => {
    return {
      params: {
        country: path.country,
        continent: path.continent,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
