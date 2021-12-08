import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import Link from "next/link";
import Banner from "../../../components/FeaturedBanner";
import Button from "../../../components/Button";
import DesinationCard from "../../../components/DestinationCard";
import Holiday from "../../../components/Holidaycard";
import Layout from "../../../components/Layout";
import OfferSection from "../../../components/OfferSection";
import styles from "../../../styles/common.module.css";
import style from "../../../styles/frame5.module.css";
import { getHolidayData, getHolidayTags } from "../../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../../queries/layout";
import { getHomePageData } from "../../../queries/homePage";
import { getGlobalData } from "../../../queries/global";
import { getContinentData } from "../../../queries/continent";
import { useRouter } from "next/router";

const ContinentPage = ({
  headerData,
  footerData,
  holidays,
  global,
  continentDetail,
}) => {
  const router = useRouter();
  const continentQuery = router.query.continent;

  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container">
          <p className="pt-4">Wakacjopedia / Lokalizacje / {continentQuery}</p>
          <h1>Lokalizacje turystyczne w {continentQuery}</h1>
          <Banner data={global?.banner} />
        </div>
        <div className="container  my-5">
          <div className={styles.pills__title}>
            <h3>Sprawdź gdzie jechać na wakacje</h3>
          </div>
          <div className="row">
            <div className={styles.pills__div}>
              {continentDetail?.countries?.map((item, index) => (
                <Link
                  href={`/lokalizacje/${continentQuery}/${item?.slug}`}
                  key={index}
                  passHref
                >
                  <div> Places in {item?.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="container ">
          <h3 className="py-4">Szukaj miejsca na wakacje</h3>
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

export default ContinentPage;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://wakacjopedia-strapi.herokuapp.com/continents/${context.params.continent}`
  );
  const continentDetail = await res.json();

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
      holidays: holidayData?.data?.hotels,
      global: global?.data?.global,
      continents: continents?.data?.continents,
      continentDetail,
    },
  };
};

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://wakacjopedia-strapi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const continents = await client.query({
    query: getContinentData,
  });

  const data = continents?.data?.continents;

  const paths = data.map((path) => {
    return {
      params: { continent: path.slug.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
