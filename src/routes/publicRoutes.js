import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home";
import Layout from "../component/layouts";
import Services from "../page/services";
import Blogs from "../page/blog";
import Aboutus from "../page/Aboutus";
import Contactus from "../page/contactus";
import Work from "../page/work";
import Audit from "../page/audit";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Aboutus  />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/work" element={<Work />} />
        <Route path="/audit" element={<Audit />} />
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
