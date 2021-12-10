import React from "react";
import Layout from "../../../../components/Layout";
import style from "../../../../styles/frame5.module.css";
import styles from "../../../../styles/common.module.css";
import Banner from "../../../../components/FeaturedBanner";
import Locationcard from "../../../../components/Locationcard";
import Holiday from "../../../../components/Holidaycard";
import OfferSection from "../../../../components/OfferSection";
import Weathercard from "../../../../components/Weathercard";
import Places from "../../../../components/Places";
import PerfectMonth from "../../../../components/PerfectMonth";
import Button from "../../../../components/Button";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  getHolidayData,
  getHolidayTags,
} from "../../../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../../../queries/layout";
import { getHomePageData } from "../../../../queries/homePage";
import { getGlobalData } from "../../../../queries/global";
import { fetchSlugs } from "../../../api/hello";
import ReactMarkdown from "react-markdown";
import Pills from "../../../../components/Pills";
import { getContinentData } from "../../../../queries/continent";
import CountryWeatherCard from "../../../../components/CountryWeatherCard";
import { lastMinute } from "../../../api/lastMinutes";
import LastMinuteCard from "../../../../components/LastMinuteCard";

function Frame5({
  headerData,
  footerData,
  holidays,
  holidayTags,
  homeData,
  global,
  countryDetail,
  continents,
  lastMinutes,
}) {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container  mt-5">
          <p className="pt-4">
            Wakacjopedia / Pogoda / {countryDetail?.continent?.title} /{" "}
            {countryDetail?.title}
          </p>
          <h1>
            {countryDetail?.title} - pogoda. Kiedy jechać do{" "}
            {countryDetail?.title}?
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <CountryWeatherCard
                weatherNow={countryDetail?.weatherNow}
                weatherTomorrow={countryDetail?.weatherTomorrow}
              />
            </div>
            <div className="col-lg-8 col-md-12">
              <Locationcard data={countryDetail} />
            </div>
          </div>
          <Banner data={global?.banner} />
          <div className="mt-5">
            <div className={style.area__detail}>
              <div className={style.text__details}>
                <div className={style.single__detail}>
                  {/* <Frame26Text
                    title={`Meksyk - co warto wiedzieć?`}
                    desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                    highlighted={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                  /> */}
                  {countryDetail?.weather?.map((item, index) => (
                    <Weathercard key={index} data={item} />
                  ))}
                </div>
              </div>
              <div className={style.text__details__right}>
                <PerfectMonth weather={countryDetail?.weather} />
                <Holiday data={global?.featuredHoliday} />
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="text-justify">
                <ReactMarkdown>{countryDetail?.aboutCountry}</ReactMarkdown>
              </div>

              <h3>
                Sprawdź pogodę w miastach i regionach {countryDetail?.title}
              </h3>
              <div className="row">
                {countryDetail?.regions?.slice(0, 6)?.map((item, i) => (
                  <div key={i} className="col-sm-6 col-lg-4 col-md-4 my-2">
                    <Places item={item} />
                  </div>
                ))}
              </div>
              <div className="text-justify">
                <ReactMarkdown>{countryDetail?.QnA}</ReactMarkdown>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>

        <section className="container "></section>

        <section className="container ">
          <div className="my-5">
            <h3 className="mb-5">Gorące oferty Last Minute</h3>
            <div className="row">
              {/* {lastMinutes?.slice(0, 4)?.map((item, i) => (
                <LastMinuteCard item={item} key={i} />
              ))} */}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Button />
              </div>
            </div>
          </div>
        </section>

        <div className="container ">
          <div className="my-5">
            <div className={styles.pills__title}>
              <h3>Sprawdź również</h3>
            </div>

            <Pills
              data={
                continents?.filter(
                  (item) => item?.title === countryDetail?.continent?.title
                )[0]?.countries
              }
              text={""}
              link={`pogoda/${countryDetail?.continent?.slug}`}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Frame5;

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

  const countryName = countryDetail?.title;

  // const { data } = await lastMinute(countryName);

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
      global: global?.data?.global,
      continents: continents?.data?.continents,
      countryDetail,
      // lastMinutes: data,
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
