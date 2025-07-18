import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ExploreCard = ({ name, detail }) => {
  return (
    <div className="border w-[312px] lg:w-[419px] border-[#4B5563] lg:p-10 py-10 px-6 flex items-center justify-between rounded-[16px]">
      <div className="flex flex-col ">
        <h2 className="font-semibold text-[#111827] font-poppins text-[20px] lg:text-[24px]">
          {name}
        </h2>
        <p className="text-[#4B5563] text-[14px] font-normal font-poppins">
          {detail}
        </p>
      </div>
      <span className="inline-block h-[50px] !px-[1px] w-[2px] bg-[#E5E7EB]"></span>

      <span></span>
      <button className="flex items-center justify-center gap-2 text-[#4B5563] text-[14px] font-poppins font-medium">
        Shop Now
        <IoIosArrowRoundForward className="text-[22px]" />
      </button>
    </div>
  );
};

export default ExploreCard;
