import styles from "../styles/blog.module.css";
import React, { useState } from "react";
import Banner from "../components/banner";
import BlogSection from "../components/blogSection";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import PaginatedItems from "../components/Paginate";
import Layout from "../components/Layout";

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
  {
    img: "/img/blog.png",
    text: "7 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "8 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "9 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "10 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "11 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "12 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "13 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "14 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "15 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "16 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "17 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "18 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "19 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: "/img/blog.png",
    text: "20 Najlepsze hotele z Aquaparkami w Hiszpani",
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

const Blog = ({ headerData, footerData, holidayTags, holidays }) => {
  const [tempList, setTempList] = useState(null);
  return (
    <>
      <Layout headerData={headerData} footerData={footerData}>
        <div className="container wd">
          <Banner title="Blog Wakacjopedia" />
          <div className="mt-5">
            <div className="row mt-1">
              <div className="col-lg-8 col-md-12 pr-0">
                <div className="row my-2">
                  {holidays?.map((item, index) => (
                    <div key={index} className="col-lg-6 col-md-12">
                      <BlogSection item={item} />
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className={styles.pagination__area}>
                      <PaginatedItems
                        items={blogList}
                        itemsPerPage={10}
                        emitCurrentItems={(data) => {
                          setTempList(data);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 pr-0 mt-2">
                <div className={styles.blog__right}>
                  <div className={styles.bgImg}>
                    <span className={styles.rating}>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                    </span>
                    <div
                      className={styles.blogright__caption}
                      style={{ zIndex: "1" }}
                    >
                      <div className={`${styles.blogright__title} mb-3`}>
                        <h3>Gorące oferty wakacyjne</h3>
                      </div>
                      <div className={styles.blogright__text}>
                        <p>
                          już od <span>3 555 zł</span> za os.
                        </p>
                      </div>
                      <div className={styles.blogright__btn}>
                        <a href="#">sprawdź oferty</a>
                      </div>
                    </div>
                  </div>
                </div>
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

  return {
    props: {
      headerData,
      footerData,
      holidays,
      holidayTags,
    },
  };
};
