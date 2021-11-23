import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, headerData, footerData }) => {
  return (
    <>
      <Header headerData={headerData} />
      {children}
      <Footer footerData={footerData} />
    </>
  );
};

export default Layout;
