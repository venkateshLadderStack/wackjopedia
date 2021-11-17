import React from "react";
import Frame7style from "../styles/frame7.module.css";
import Banner from "../components/banner";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import Layout from "../components/Layout";
import Frame26Text, { Frame26List } from "../components/Frame26Text";
import Places from "../components/Places";
// import styles from "../styles/css/place.module.css";
import style from "../styles/frame7.module.css";
import styles from "../styles/blog.module.css";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import PerfectMonth from "../components/PerfectMonth";
import Frame15weather from "../components/frame15weather";

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

function frame15() {
  return (
    <>
      <Layout>
        <section className="container md">
          <Banner title={`Meksyk - najważniejsze informacje`} />
          <div className="row">
            <h3 className="py-4">Sprawdź gdzie jechać na wakacje</h3>
            <div className="col-lg-8 col-md-12 mt-3">
              <DesinationCard />
            </div>
            <div className="col-lg-4 col-md-12 mt-3">
              <Frame15weather />
            </div>
          </div>
          <Banner />
          <div className="row my-5">
            <div className="col-lg-8 col-mg-12">
              <Frame26Text
                title={`Meksyk - co warto wiedzieć?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Gdzie leży Meksyk?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Ile trwa lot do Meksyku?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Co warto zobaczyć w Meksyku?`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Najlepsze plaże Meksyku`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
              <Frame26Text
                title={`Temperatura wody`}
                desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                highlighted={` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              />
            </div>
            <div className="col-lg-4 col-mg-12">
              <PerfectMonth />
              <Holiday />
            </div>
          </div>

          <div className={style.multi__col}>
            <h3 className="py-5">
              Sprawdź pogodę w miastach i regionach Meksyku
            </h3>
            <Places />
            <Places />
            <Places />
            <Places />
            <Places />
            <Places />
            <Places />
            <Places />
            <Places />
          </div>

          <div className={style.multi__col}>
            <Frame26List
              title={`Pytania i odpowiedzi`}
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            />
            <Frame26List
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            />
            <Frame26List
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            />
            <Frame26List
              subtitle={`Lorem Ipsum is simply dummy text of the printing and?`}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            />
          </div>
        </section>

        <div className="container wd">
          <div className="my-5">
            <h3 className="mb-5">Gorące oferty Last Minute</h3>
            <div className="row">
              <OfferSection />
              <OfferSection />
              <OfferSection />
              <OfferSection />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.deal__btn}>
                  <a href="#" className={`${styles.theme__btn} py-3`}>
                    pokaż więcej ofert
                  </a>
                </div>
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
                  {pillsList.map((item, index) => (
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

export default frame15;
