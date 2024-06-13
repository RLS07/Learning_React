import React from "react";
import Hero from "../components/Hero"
import Homecards from "../components/Homecards";
import Joblistings from "../components/Joblistings"
import Viewalljobs from "../components/Viewalljobs"

const Homepage = () => {
  return (
    <>
    <Hero/>
    <Homecards/>
    <Joblistings />
    <Viewalljobs />
    </>
  );
};

export default Homepage;
