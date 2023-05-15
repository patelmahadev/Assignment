import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.scss";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
