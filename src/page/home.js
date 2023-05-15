import React from "react";
import Banner from "../component/banner/banner";
import WhoWeAre from "../component/whoWeAre/whoWeAre";
import WhatWeDo from "../component/whatWeDo/whatWeDo";
import OurWork from "../component/ourWork/ourWork";
import OurPartners from "../component/ourPartners/ourPartners";
import Testimonials from "../component/testimonials/testimonials";
import LookingDrive from "../component/lookingDrive/lookingDrive";

const HomePage = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <WhatWeDo />
      <OurWork />
      <OurPartners />
      <Testimonials />
      <LookingDrive />
    </>
  );
};
export default HomePage;
