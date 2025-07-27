import React from "react";
import Banner from "../Components/Home/Banner";
import Service from "../Components/Home/Service";
import Explore from "../Components/Home/Explore";
import HomeReco from "../Components/Home/HomeReco";

const Home = () => {
  return (
    <div className="  ">
      <Banner />
      <Service />
      <Explore />
      <HomeReco />
    </div>
  );
};

export default Home;
