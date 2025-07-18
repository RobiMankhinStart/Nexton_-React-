import React from "react";
import Banner from "../Components/Banner";
import Service from "../Components/Service";
import Explore from "../Components/Explore";
import Recommendations from "../Components/Recommendations";

const Home = () => {
  return (
    <div className="  ">
      <Banner />
      <Service />
      <Explore />
      <Recommendations />
    </div>
  );
};

export default Home;
