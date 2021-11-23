import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSIze";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import haerderStyle from "../../styles/Header.module.css";

const Header = ({ headerData }) => {
  const { logo, links } = headerData;

  const navlinks = links.slice(0, links.length - 1);
  const btnLink = links[links.length - 1];

  const { width } = useWindowSize();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (width < 786) {
      setShowMobileMenu(true);
    }
  }, [width]);

  return (
    <>
      <div
        className={`${haerderStyle.offcanva} ${
          showMobileMenu && haerderStyle.active
        }`}
      >
        <div className={haerderStyle.cross}>
          <a href="#">
            <FaTimes onClick={() => setShowMobileMenu(false)} />
          </a>
        </div>
        <div className={haerderStyle.offcanva__menu}>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${haerderStyle.overlay} ${
          showMobileMenu && haerderStyle.active
        }`}
        onClick={() => setShowMobileMenu(false)}
      ></div>
      <div className={haerderStyle.header__area}>
        <div className={`container ${haerderStyle.wd}`}>
          <div className="row">
            <div className="col-lg-12">
              <div className={haerderStyle.header__fl}>
                <div className={haerderStyle.header__logo}>
                  <Link href="/" passHref>
                    <Image
                      src={logo?.url}
                      alt={logo?.alternativeText}
                      width={185}
                      height={33}
                      layout="fixed"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={logo?.url}
                    />
                  </Link>
                </div>
                <div className={haerderStyle.header__menu}>
                  <ul>
                    {navlinks.map((link, i) => (
                      <li key={i}>
                        <Link href={link?.url}>{link?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={haerderStyle.header__btn}>
                  <div className={haerderStyle.header__bar}>
                    <a href="#">
                      <AiOutlineMenu onClick={() => setShowMobileMenu(true)} />
                    </a>
                  </div>
                  <Link href={btnLink?.url}>{btnLink?.name}</Link>
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
