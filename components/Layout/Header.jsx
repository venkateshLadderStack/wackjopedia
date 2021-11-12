import React, { useEffect, useState } from "react";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSIze";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { width } = useWindowSize();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (width > 786) {
      setShowMobileMenu(true);
    }
  }, []);

  return (
    <>
      <div className={`offcanva ${showMobileMenu && "active"}`}>
        <div className="cross">
          <a href="#">
            <FaTimes onClick={() => setShowMobileMenu(false)} />
          </a>
        </div>
        <div className="offcanva-menu">
          <ul>
            <li>
              <a href="#">Gdzie jechać</a>
            </li>
            <li>
              <a href="#">Pogoda</a>
            </li>
            <li>
              <a href="#">Wakacje</a>
            </li>
            <li>
              <a href="#">Last Minute</a>
            </li>
            <li>
              <a href="#">Lokalizacje</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Szukaj w serwisie</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay ${showMobileMenu && "active"}`}
        onClick={() => setShowMobileMenu(false)}
      ></div>
      <div className="header-area">
        <div className="container wd">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-fl">
                <div className="header-logo">
                  <a href="index.html">
                    <Image
                      src="/img/site-logo.svg"
                      alt=""
                      width={185}
                      height={33}
                      layout="fixed"
                    />
                  </a>
                </div>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">Gdzie jechać</a>
                    </li>
                    <li>
                      <a href="#">Pogoda</a>
                    </li>
                    <li>
                      <a href="#">Wakacje</a>
                    </li>
                    <li>
                      <a href="#">Last Minute</a>
                    </li>
                    <li>
                      <a href="#">Lokalizacje</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Szukaj w serwisie</a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn">
                  <div className="header-bar">
                    <a href="#">
                      <AiOutlineMenu onClick={() => setShowMobileMenu(true)} />
                    </a>
                  </div>
                  <a href="#">Znajdź miejsce na wakacje</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
