import React from "react";
import Image from "next/image";
import Link from "next/link";
import footerStyle from "../../styles/footer.module.css";

const Footer = ({ footerData }) => {
  const { copyright, footer_columns, page_links, logo } = footerData;
  return (
    <>
      <div className={footerStyle.footer__area}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={footerStyle.footer__logo}>
                <a href="#">
                  <Image
                    src={logo?.url}
                    alt={logo?.alternativeText}
                    width={185}
                    height={35}
                    layout="fixed"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={logo?.url}
                  />
                </a>
              </div>
              <div className={footerStyle.footer__fl}>
                {footer_columns.map((column, i) => (
                  <div className={footerStyle.single__footer__wed} key={i}>
                    <div className={footerStyle.footer__title}>
                      <h3>{column?.title}</h3>
                    </div>
                    <div className="footer-list">
                      <ul>
                        {column?.footer_links.map((link, i) => (
                          <li key={i}>
                            <Link href={link?.url}>{link?.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={footerStyle.footer__bottom__area}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={footerStyle.footer__bootom__menu}>
                <ul>
                  {page_links.map((link, i) => (
                    <li key={i}>
                      <Link href={link?.url}>{link?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${footerStyle.footer__copy}`}>
                <p>© 2021 Wakacjopedia.pl</p>
                <p>{copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
