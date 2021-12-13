import Banner from "../components/FeaturedBanner";
import BlogSection from "../components/Locations";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import Layout from "../components/Layout";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import Places from "../components/Places";
import styles from "../styles/common.module.css";
import style from "../styles/frame5.module.css";
import Button from "../components/Button";
import { getHolidayData, getHolidayTags } from "../queries/holidayData";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { getFooterData, getHeaderData } from "../queries/layout";
import { getHomePageData } from "../queries/homePage";
import { getGlobalData } from "../queries/global";
import { getContinentData } from "../queries/continent";
import { getBlogData } from "../queries/blogData";
import { lastMinute, lastMinuteAll } from "./api/lastMinutes";
import LastMinuteCard from "../components/LastMinuteCard";

export default function Home({
  lastMinutes,
  headerData,
  footerData,
  holidays,
  holidayTags,
  homeData,
  global,
  continents,
  blogs,
}) {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <div className="container">
        <Banner data={global?.banner} />
        <div>
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
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="container my-5">
              <h3>Ostatnio na naszym blogu</h3>
              <div className="row">
                {blogs?.slice(0, 6)?.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-sm-12 my-2">
                    <BlogSection item={item} />
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container my-5">
        <h3 className="py-2">Często wyszukiwana pogoda</h3>
        <div className={style.places}>
          <div className="row">
            {holidays?.map((item, i) => (
              <div key={i} className="col-6 col-lg-4 col-md-4 my-2">
                <Places item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row">
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
    </Layout>
  );
}

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

  const blogData = await client.query({
    query: getBlogData,
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
      blogs: blogData?.data?.blogs,
      lastMinutes: data,
    },
  };
};
