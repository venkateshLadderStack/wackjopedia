import Banner from "../components/banner";
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

export default function Home({
  headerData,
  footerData,
  holidays,
  holidayTags,
  homeData,
}) {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <div className="container wd">
        <Banner image={homeData?.banner_image?.hash} />
        <div className="mt-5">
          <h3 className="py-4">Szukaj miejsca na wakacje</h3>
          <div className="row mt-1">
            <div className="col-lg-8 col-md-12 pr-0">
              <DesinationCard />
              <div className="row my-2">
                <h3 className="py-5">Ostatnio na naszym blogu</h3>
                {holidays?.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-12">
                    <BlogSection item={item} />
                  </div>
                ))}
              </div>
              <div className="row pb-5">
                <div className="col-lg-12">
                  <Button />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pr-0">
              <Holiday data={homeData?.featured_holiday} />
            </div>
          </div>
        </div>
      </div>

      <section className="container wd">
        <h3 className="py-2">Często wyszukiwana pogoda</h3>
        <div className={style.places}>
          <div className="row">
            {holidays?.map((item, i) => (
              <Places key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <div className="container wd">
        <div className="my-5">
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
      </div>

      <div className="container wd">
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
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const headerRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/navbar"
  );

  const headerData = await headerRes.json();

  const footerRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/footer"
  );

  const footerData = await footerRes.json();

  const holidaysRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/hotels"
  );

  const holidays = await holidaysRes.json();

  const holidayTagsRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/tags"
  );

  const holidayTags = await holidayTagsRes.json();

  const homeRes = await fetch("https://wakacjopedia-strapi.herokuapp.com/home");

  const homeData = await homeRes.json();

  return {
    props: {
      headerData,
      footerData,
      holidays,
      holidayTags,
      homeData,
    },
  };
};
