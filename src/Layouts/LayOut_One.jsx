import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import ResNavbar from "../Components/ResNavbar";
import Footer from "../Components/Footer";

const LayOut_One = () => {
  return (
    <div>
      <Navbar />
      <ResNavbar />
      <div className="mt-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut_One;
