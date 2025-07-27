import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

const BreadCrumb = ({ breadlink, breadcontent }) => {
  return (
    <div className="flex items-center jusc gap-[6px] font-semibold ">
      <Link
        className="text-white px-2 pb-[1px] rounded-lg bg-amber-500"
        to={"/"}
      >
        Home
      </Link>
      <MdOutlineKeyboardDoubleArrowRight className="mt-1 text-[26px] " />
      <Link
        className="text-white px-2 pb-[1px] rounded-lg bg-amber-500"
        to={breadlink}
      >
        {breadcontent}
      </Link>
    </div>
  );
};

export default BreadCrumb;
