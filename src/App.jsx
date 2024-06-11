// rafce->react arrow function component export
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecards from "./components/Homecards";
import Joblistings from "./components/Joblistings";
import Viewalljobs from "./components/Viewalljobs";
import React from "react";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero title="Test title" subtitle="This is a Test subtitle" />

      <Homecards />

      {/* <!-- Browse Jobs --> */}
      <Joblistings />
      <Viewalljobs />
    </>
  );
};

export default App;
