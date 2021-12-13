import style from "../../../styles/common.module.css";
import blogstyles from "../../../styles/blog.module.css";
import frame26styles from "../../../styles/frame26.module.css";
import Banner from "../../../components/FeaturedBanner";
import Holiday from "../../../components/Holidaycard";
import Layout from "../../../components/Layout";
import Locationcard from "../../../components/Locationcard";
import OfferSection from "../../../components/OfferSection";
import Button from "../../../components/Button";
import PillSection from "../../../components/PillSection";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../../../queries/holidayData";
import { getFooterData, getHeaderData } from "../../../queries/layout";
import { getHomePageData } from "../../../queries/homePage";
import { getBlogData } from "../../../queries/blogData";
import ReactMarkdown from "react-markdown";
import { getGlobalData } from "../../../queries/global";
import Pills from "../../../components/Pills";
import { lastMinuteAll } from "../../api/lastMinutes";
import LastMinuteCard from "../../../components/LastMinuteCard";

const HolidayDetail = ({
  headerData,
  footerData,
  holidays,
  holidayTags,
  blogDetail,
  homeData,
  blogs,
  global,
  lastMinutes,
}) => {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container ">
          <p className="pt-4">Wakacjopedia / Blog / {blogDetail?.title}</p>
          <h1 className="section_title">{blogDetail?.title}</h1>
          <Banner data={global?.banner} />
          <div className="row my-5">
            <div className="col-lg-8 col-md-12 mb-5">
              <Locationcard data={blogDetail} />
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday data={global?.featuredHoliday} />
            </div>
          </div>
          <section className="pb-5">
            <div className="container ">
              <div className="col-lg-8 col-md-12 text-justify">
                <ReactMarkdown>{blogDetail?.content}</ReactMarkdown>
              </div>
            </div>
          </section>

          <section className="container ">
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
          </section>

          <div className="container">
            <h3 className="mb-4">Sprawdź również</h3>
            <Pills data={blogs} text={""} link={`/blog`} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HolidayDetail;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://wakacjopedia-strapi.herokuapp.com/blogs/${context.params.slug}`
  );
  const blogDetail = await res.json();

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
  const blogData = await client.query({
    query: getBlogData,
  });

  const global = await client.query({
    query: getGlobalData,
  });

  const { data } = await lastMinuteAll();

  return {
    props: {
      blogDetail,
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
      blogs: blogData?.data?.blogs,
      global: global?.data?.global,
      lastMinutes: data,
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
  const blogData = await client.query({
    query: getBlogData,
  });

  const data = blogData?.data?.blogs;

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
