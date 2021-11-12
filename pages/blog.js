import styles from "../styles/blog.module.css";
import React, { useState } from "react";
import Banner from "../components/banner";
import BlogSection from "../components/blogSection";
import OfferSection from "../components/OfferSection";
import blogImg from "../public/img/blog.png";
import PillSection from "../components/PillSection";
import PaginatedItems from "../components/Paginate";

const blogList = [
  {
    img: blogImg,
    text: "1 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "2 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "3 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "4 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "5 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "6 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "7 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "8 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "9 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "10 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "11 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "12 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "13 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "14 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "15 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "16 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "17 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "18 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "19 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
  {
    img: blogImg,
    text: "20 Najlepsze hotele z Aquaparkami w Hiszpani",
  },
];

const Blog = () => {
  const [tempList, setTempList] = useState(null);
  return (
    <>
      <div className="container">
        <h3 className="py-4">Blog Wakacjopedia</h3>
        <Banner />
        <div className="mt-5">
          <div className="row mt-1">
            <div className="col-lg-8 col-md-12 pr-0">
              <div className="row my-2">
                {tempList?.map((item, index) => (
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
      <div className="container">
        <div className="m-5">
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
      <div className="container">
        <div className="my-5">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.pills__title}>
                <h3>Sprawdź gdzie jechać na wakacje</h3>
              </div>
              <div className={styles.pills__div}>
                <PillSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
