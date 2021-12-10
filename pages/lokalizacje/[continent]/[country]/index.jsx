import Layout from "../../../../components/Layout";
import styles from "../../../../styles/common.module.css";
import Banner from "../../../../components/FeaturedBanner";
import Holiday from "../../../../components/Holidaycard";
import Places from "../../../../components/Places";
import OfferSection from "../../../../components/OfferSection";
import PerfectMonth from "../../../../components/PerfectMonth";
import Frame15weather from "../../../../components/Frame15weather";
import Button from "../../../../components/Button";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  getHolidayData,
  getHolidayTags,
} from "../../../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../../../queries/layout";
import { getHomePageData } from "../../../../queries/homePage";
import {
  getContinentData,
  getCountryData,
} from "../../../../queries/continent";
import ReactMarkdown from "react-markdown";
import Locationcard from "../../../../components/Locationcard";

import Link from "next/link";
import { getGlobalData } from "../../../../queries/global";
import { fetchSlugs } from "../../../api/hello";
import Pills from "../../../../components/Pills";
import LastMinuteCard from "../../../../components/LastMinuteCard";
import { lastMinute } from "../../../api/lastMinutes";

function Frame15({
  headerData,
  footerData,
  holidays,
  countries,
  continents,
  countryDetail,
  global,
  lastMinutes,
}) {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <section className="container md">
          <p className="pt-4">
            Wakacjopedia / Lokalizacje / {countryDetail?.continent?.title} /{" "}
            {countryDetail?.title}
          </p>
          <h1>{countryDetail?.title} - najważniejsze informacje</h1>
          <div className="row">
            <div className="col-lg-8 col-md-12 mt-3">
              <Locationcard data={countryDetail} />
            </div>
            <div className="col-lg-4 col-md-12 mt-3">
              <Frame15weather data={countryDetail} />
            </div>
          </div>
          <Banner data={global?.banner} />
          <div className="row my-5">
            <div className="col-lg-8 col-mg-12 text-justify">
              <ReactMarkdown>{countryDetail?.aboutCountry}</ReactMarkdown>
            </div>
            <div className="col-lg-4 col-mg-12">
              <PerfectMonth weather={countryDetail?.weather} />
              <Holiday data={global?.featuredHoliday} />
            </div>
          </div>
        </section>

        <div className="container ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <h3>Sprawdź miasta i regiony {countryDetail?.title}</h3>
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

        <div className="container">
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
        </div>
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
              link={`lokalizacje/${countryDetail?.continent?.slug}`}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Frame15;

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

  const countries = await client.query({
    query: getCountryData,
  });

  const continents = await client.query({
    query: getContinentData,
  });

  const global = await client.query({
    query: getGlobalData,
  });

  const countryName = countryDetail?.title;

  // const { data } = await lastMinute(countryDetail?.title);

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidays: holidayData?.data?.hotels,
      countries: countries?.data?.countries,
      continents: continents?.data?.continents,
      global: global?.data?.global,
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
