import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const LayOut_One = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayOut_One;
