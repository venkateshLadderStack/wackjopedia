import style from "../../styles/common.module.css";
import blogstyles from "../../styles/blog.module.css";
import frame26styles from "../../styles/frame26.module.css";
import React from "react";
import Banner from "../../components/banner";
import Holiday from "../../components/Holidaycard";
import Layout from "../../components/Layout";
import Locationcard from "../../components/Locationcard";
import OfferSection from "../../components/OfferSection";
import Button from "../../components/Button";
import PillSection from "../../components/PillSection";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../queries/layout";
import { getHomePageData } from "../../queries/homePage";
import MarkdownIt from "markdown-it";

const holidayDetail = ({
  headerData,
  footerData,
  holidays,
  holidayTags,
  holidayDetail,
  homeData,
}) => {
  const md = new MarkdownIt();
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container wd">
          <Banner title={holidayDetail?.title} />
          <div className="row my-5">
            <div className="col-lg-8 col-md-12 mb-5">
              <Locationcard data={holidayDetail} />
              <div>
                <div className={frame26styles.text__area}>
                  <h4>Gdzie w grudniu jest ciepło?</h4>
                  <p>{holidayDetail?.hotel_info}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={homeData?.featured_holiday} />
            </div>
          </div>
          <section className="pb-5">
            <div className="container wd">
              <div className="col-lg-8 col-md-12">
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(holidayDetail?.content),
                  }}
                />
              </div>
            </div>
          </section>

          <section className="container wd">
            <div className="my-5">
              <h3 className="mb-5">Gorące oferty Last Minute</h3>
              <div className="row">
                {holidays?.map((item, i) => (
                  <OfferSection item={item} key={i} />
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Button />
                </div>
              </div>
            </div>
          </section>

          <section className="container wd">
            <div className="my-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className={style.pills__title}>
                    <h3>Sprawdź gdzie jechać na wakacje</h3>
                  </div>
                  <div className={blogstyles.pills__div}>
                    {holidayTags?.map((item, index) => (
                      <PillSection item={item} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default holidayDetail;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://wakacjopedia-strapi.herokuapp.com/hotels/${context.params.slug}`
  );
  const holidayDetail = await res.json();

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
      holidayDetail,
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
    },
  };
};

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://wakacjopedia-strapi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const holidayData = await client.query({
    query: getHolidayData,
  });

  const data = holidayData?.data?.hotels;

  const paths = data.map((path) => {
    return {
      params: { slug: path.slug.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
