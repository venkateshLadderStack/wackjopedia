import styles from "../../../styles/common.module.css";
import Banner from "../../../components/FeaturedBanner";
import Frame26Text, { Frame26List } from "../../../components/Textarea";
import Holiday from "../../../components/Holidaycard";
import Layout from "../../../components/Layout";
import Locationcard from "../../../components/Locationcard";
import OfferSection from "../../../components/OfferSection";
import PillSection from "../../../components/PillSection";
import Frequentsearch from "../../../components/Frequentsearch";
import Button from "../../../components/Button";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../../queries/layout";
import { getHomePageData } from "../../../queries/homePage";
import { getGlobalData, getMonthData } from "../../../queries/global";
import ReactMarkdown from "react-markdown";
import { getCountryData } from "../../../queries/continent";
import LastMinuteCard from "../../../components/LastMinuteCard";
import { lastMinuteAll } from "../../api/lastMinutes";

const MonthDetail = ({ headerData, footerData, holidayTags, holidays, monthDetail, global, countries, lastMinutes }) => {


  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        
        <section className="container ">
          <p className="pt-4">Wakacjopedia / Gdzie jechać / {monthDetail?.title}</p>
        <h1>Gdzie jechać na wakacje w {monthDetail?.title}?</h1>
          <Banner data={global?.banner} />
          <div className="row my-5">
            <div className="col-lg-8 col-md-12">
              <Locationcard data={monthDetail} />
              <ReactMarkdown className="text-justify">{monthDetail?.whereIsWarm}</ReactMarkdown>
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={global?.featuredHoliday} />
            </div>
          </div>

          
            <div className="row">
              <div className="col-lg-8 col-md-12">
               <div className="row">
                  {
                    countries?.map((item, i) => {
                       return (
                          <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                            <Frequentsearch data={item} month={monthDetail?.title} />
                          </div>
                        )  
                    })
                }
               </div>
              </div>
               <div className="col-lg-4 col-md-12"></div>
            </div>
          <div className={styles.multi__col}>
            <ReactMarkdown className="text-justify">{monthDetail?.content}</ReactMarkdown>
          </div>
        </section>

        <div className="container ">
          <div className="my-5">
            <h3 className="mb-5">Gorące oferty Last Minute</h3>
            <div className="row">
              {lastMinutes?.slice(0, 4)?.map((item, i) => (
                <LastMinuteCard item={item} key={i} />
              ))}
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
}

export default MonthDetail;

export const getStaticProps = async (context) => {

  const res = await fetch(
    `https://wakacjopedia-strapi.herokuapp.com/months/${context.params.month}`
  );
  const monthDetail = await res.json();

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

   const countries = await client.query({
    query: getCountryData,
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
      monthDetail,
      countries: countries?.data?.countries,
      lastMinutes: data
    },
  };
};


export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://wakacjopedia-strapi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const months = await client.query({
    query: getMonthData,
  });

  const data = months?.data?.months;

  const paths = data.map((path) => {
    return {
      params: { month: path.slug.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
