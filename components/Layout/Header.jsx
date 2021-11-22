import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSIze";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ headerData }) => {
  const { logo, links } = headerData;

  const navlinks = links.slice(0, links.length - 1);
  const btnLink = links[links.length - 1];

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
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
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
                <div className="header-menu">
                  <ul>
                    {navlinks.map((link, i) => (
                      <li key={i}>
                        <Link href={link?.url}>{link?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="header-btn">
                  <div className="header-bar">
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
