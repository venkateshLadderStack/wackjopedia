import Banner from "../components/banner";
import BlogSection from "../components/blogSection";
import DesinationCard from "../components/DestinationCard";
import Holiday from "../components/Holidaycard";
import Layout from "../components/Layout";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import Places from "../components/Places";
import styles from "../styles/blog.module.css";
import style from "../styles/frame5.module.css";

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

const blogList = [
  {
    img: "/img/blog.png",
    text: "1 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "2 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "3 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "4 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "5 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "6 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
];

export default function Home({ headerData, footerData }) {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <div className="container wd">
        <Banner />
        <div className="mt-5">
          <h3 className="py-4">Szukaj miejsca na wakacje</h3>
          <div className="row mt-1">
            <div className="col-lg-8 col-md-12 pr-0">
              <DesinationCard />
              <div className="row my-2">
                <h3 className="py-5">Ostatnio na naszym blogu</h3>
                {blogList?.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-12">
                    <BlogSection item={item} />
                  </div>
                ))}
              </div>
              <div className="row pb-5">
                <div className="col-lg-12">
                  <div className={styles.deal__btn}>
                    <a href="#" className={`${styles.theme__btn} py-3`}>
                      pokaż więcej ofert
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pr-0 mt-5">
              <Holiday />
            </div>
          </div>
        </div>
      </div>

      <section className="container wd">
        <h3 className="py-2">Często wyszukiwana pogoda</h3>
        <div className={style.places}>
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
      </section>

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

  return {
    props: {
      headerData,
      footerData,
    },
  };
};
