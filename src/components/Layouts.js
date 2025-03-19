import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
