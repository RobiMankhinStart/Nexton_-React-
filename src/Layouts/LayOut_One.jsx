import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import ResNavbar from "../Components/ResNavbar";

const LayOut_One = () => {
  return (
    <div>
      <Navbar />
      <ResNavbar />
      <div className="mt-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default LayOut_One;
