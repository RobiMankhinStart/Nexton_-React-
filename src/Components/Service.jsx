import React from "react";
import ServiceCard from "./common/ServiceCard";
import { TbExchange, TbTruckDelivery, TbWorld } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Service = () => {
  return (
    <section id="service" className="pt-[52px] pb-[32px]">
      <div className="container">
        <h2 className="text-[#111827] ml-6 mb-6 lg:hidden font-semibold font-poppins text-[16px]">
          Nexton® always with you
        </h2>
        <div className="flex justify-around gap-5 lg:gap-1 items-center flex-wrap  service_row lg:*:py-6 lg:*:px-10 border border-[#E5E7EB] rounded-[16px] ">
          {/* <div className="service_item flex"> */}
          <ServiceCard
            serviceName={"Free shipping"}
            serviceIcon={
              <TbTruckDelivery className="text-[24px] text-[#111827]" />
            }
            serviceInfo={"On orders over $50.00"}
          />
          <span className="lg:inline-block h-[50px] !px-[1px] w-[2px] hidden bg-[#E5E7EB]"></span>
          <ServiceCard
            serviceName={"Very easy to return"}
            serviceIcon={<TbExchange className="text-[24px] text-[#111827]" />}
            serviceInfo={"Just phone number"}
          />
          <span className="lg:inline-block h-[50px] !px-[1px] w-[2px] hidden bg-[#E5E7EB]"></span>

          <ServiceCard
            serviceName={"Worldwide delivery"}
            serviceIcon={<TbWorld className="text-[24px] text-[#111827]" />}
            serviceInfo={"Fast delivery worldwide"}
          />
          <span className="lg:inline-block h-[50px] !px-[1px] w-[2px] hidden bg-[#E5E7EB]"></span>

          <ServiceCard
            serviceName={"Refunds policy"}
            serviceIcon={
              <AiOutlineDollarCircle className="text-[24px] text-[#111827]" />
            }
            serviceInfo={"60 days return for any reason"}
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;
