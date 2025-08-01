import React from "react";
import Banner from "../Components/Home/Banner";
import Service from "../Components/Home/Service";
import Explore from "../Components/Home/Explore";
import HomeReco from "../Components/Home/HomeReco";
import BestSeller from "../Components/Home/BestSeller";
import BotBanner from "../Components/Home/BotBanner";

const Home = () => {
  return (
    <div className="  ">
      <Banner />
      <Service />
      <Explore />
      <HomeReco />
      <BestSeller />
      <BotBanner />
    </div>
  );
};

export default Home;
