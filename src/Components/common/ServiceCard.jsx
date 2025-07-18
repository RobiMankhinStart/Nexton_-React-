import React from "react";

const ServiceCard = ({ serviceIcon, serviceName, serviceInfo }) => {
  return (
    <div className=" flex items-center justify-center gap-4 ">
      {serviceIcon}
      <div className="flex flex-col">
        <h3 className="lg:font-semibold font-normal text-[14px] text-[#4B5563] font-poppins lg:text-[18px] lg:text-[#111827]">
          {serviceName}
        </h3>
        <p className="hidden lg:inline-block font-poppins text-[#4B5563] text-[14px]">
          {serviceInfo}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
