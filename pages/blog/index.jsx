import styles from "../../styles/common.module.css";
import React, { useState } from "react";
import Banner from "../../components/Banner";
import BlogSection from "../../components/Locations";
import OfferSection from "../../components/OfferSection";
import PillSection from "../../components/PillSection";
import PaginatedItems from "../../components/Paginate";
import Layout from "../../components/Layout";
import Holiday from "../../components/Holidaycard";
import Button from "../../components/Button";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../queries/layout";
import { getHomePageData } from "../../queries/homePage";
import { getBlogData } from "../../queries/blogData";

const Blog = ({
  headerData,
  footerData,
  holidayTags,
  holidays,
  homeData,
  blogs,
}) => {
  const [tempList, setTempList] = useState(null);
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container wd mt-4">
          <h3 className="section_title">Najlepsze oferty wakacyjne</h3>
          <Banner data={homeData?.banner} />
          <div className="mt-5">
            <div className="row mt-1">
              <div className="col-lg-8 col-md-12">
                <div className="row my-2">
                  {tempList?.map((item, index) => (
                    <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                      <BlogSection item={item} />
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className={styles.pagination__area}>
                      <PaginatedItems
                        items={blogs}
                        itemsPerPage={10}
                        emitCurrentItems={(data) => {
                          setTempList(data);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-2">
                <Holiday data={homeData?.featured_holiday} />
              </div>
            </div>
          </div>
        </div>
        <div className="container wd">
          <div className="my-5">
            <h3 className="mb-5">Gorące oferty Last Minute</h3>
            <div className="row">
              {holidays?.map((item, i) => {
                return i <= 3 ? <OfferSection item={item} key={i} /> : null;
              })}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Button />
              </div>
            </div>
          </div>
        </div>
        <div className="container wd">
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
};

export default Blog;

export const getStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: "https://wakacjopedia-strapi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const holidayData = await client.query({
    query: getHolidayData,
  });

  const blogData = await client.query({
    query: getBlogData,
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
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
      blogs: blogData?.data?.blogs,
    },
  };
};
