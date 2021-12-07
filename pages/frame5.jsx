import React from "react";
import Layout from "../components/Layout";
import style from "../styles/frame5.module.css";
import styles from "../styles/common.module.css";
import Banner from "../components/Banner";
import Locationcard from "../components/Locationcard";
import Weatherdetail from "../components/Weatherdetail";
import Frame26Text, { Frame26List } from "../components/Textarea";
import Holiday from "../components/Holidaycard";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import Weathercard from "../components/Weathercard";
import Places from "../components/Places";
import PerfectMonth from "../components/PerfectMonth";
import sunImg from "../public/img/sun.png";
import breezeImg from "../public/img/breeze.png";
import Button from "../components/Button";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getHolidayData, getHolidayTags } from "../queries/holidayData";
import { getFooterData, getHeaderData } from "../queries/layout";
import { getHomePageData } from "../queries/homePage";

const details = [
  {
    title: `Gdzie leży Meksyk?`,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    highlighted: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: `Gdzie leży Meksyk?`,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    highlighted: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: `Gdzie leży Meksyk?`,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    highlighted: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: `Gdzie leży Meksyk?`,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    highlighted: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: `Gdzie leży Meksyk?`,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    highlighted: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: `Gdzie leży Meksyk?`,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    highlighted: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];

const pillsList = [
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
];

const MonthlyWeather = [
  {
    month: "Styczeń",
  },
  {
    month: "Luty",
  },
  {
    month: "Marzec",
  },
  {
    month: "Kwiecień",
  },
  {
    month: "Może",
  },
  {
    month: "Czerwiec",
  },
  {
    month: "Lipiec",
  },
  {
    month: "Sierpień",
  },
  {
    month: "Wrzesień",
  },
  {
    month: "Październik",
  },
  {
    month: "Listopad",
  },
  {
    month: "Grudzień",
  },
];

function Frame5({ headerData, footerData, holidays, holidayTags, homeData }) {
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container wd mt-5">
          <h3 className="mb-5">Meksyk - pogoda. Kiedy jechać do Meksyku?</h3>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className={style.weather__now}>
                <h6 className={`${style.weather__title} mb-4`}>
                  Pogoda teraz:
                </h6>
                <div className="mb-5">
                  <Weatherdetail img={sunImg} />
                </div>
                <Weatherdetail img={breezeImg} />
                <h6 className={`${style.weather__title} mb-4 mt-5`}>
                  Pogoda teraz:
                </h6>
                <div className="mb-5">
                  <Weatherdetail img={sunImg} />
                </div>
                <div className="mb-5">
                  <Weatherdetail img={breezeImg} />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <Locationcard data={holidays[0]} />
            </div>
          </div>
          <Banner data={homeData?.banner} />
          <div className="mt-5">
            <div className={style.area__detail}>
              <div className={style.text__details}>
                <div className={style.single__detail}>
                  <Frame26Text
                    title={`Meksyk - co warto wiedzieć?`}
                    desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                    highlighted={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                  />
                  {MonthlyWeather.map((item, index) => (
                    <Weathercard key={index} detail={item} />
                  ))}
                  {details.map((detail, index) => (
                    <Frame26Text
                      key={index}
                      title={detail.title}
                      desc={detail.desc}
                      highlighted={detail.highlighted}
                    />
                  ))}
                </div>
              </div>
              <div className={style.text__details__right}>
                <PerfectMonth />
                <Holiday data={homeData?.featured_holiday} />
              </div>
            </div>
          </div>
        </div>

        <section className="container wd">
          <div className={style.places}>
            <h3 className="py-5">
              Sprawdź pogodę w miastach i regionach Meksyku
            </h3>
            {holidays?.map((item, i) => (
              <Places key={i} item={item} />
            ))}
          </div>
        </section>

        <section className="container wd">
          <div className={style.text__details}>
            <Frame26List
              title={`Pytania i odpowiedzi`}
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`}
            />
            <Frame26List
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`}
            />
            <Frame26List
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`}
            />
          </div>
        </section>

        <section className="container wd">
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
        </section>

        <section className="container wd">
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
        </section>
      </Layout>
    </>
  );
}

export default Frame5;

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

  return {
    props: {
      headerData: headerData?.data?.navbar,
      footerData: footerData?.data?.footer,
      holidayTags: holidayTags?.data?.tags,
      homeData: homeData?.data?.home,
      holidays: holidayData?.data?.hotels,
    },
  };
};
