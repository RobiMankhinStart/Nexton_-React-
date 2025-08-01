import React from "react";
import BannerImage from "../../assets/Banner2.png";
import { Link } from "react-router";

const BotBanner = () => {
  return (
    <section
      className="w-full h-[437px] mt-[88px] mb-[52px] hidden lg:block bg-no-repeat bg-center bg-cover"
      style={{
        background: `url(${BannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div
          id="Banner_Text"
          className="lg:py-[148px] py-[94px] pl-[24px] lg:pl-0 lg:ml-[120px]"
        >
          <h2 className="font-medium text-[14px] lg:text-[20px] text-Primary">
            100% Original Products
          </h2>
          <h1 className="font-semibold text-[30px] lg:text-[36px] leading-[38px] lg:leading-[40px] w-[312px] lg:w-[362px] text-[#111827] mb-[24px] mt-[14px]">
            The All New Fashion Collection Items
          </h1>
          <h2 className="font-medium text-[14px] lg:text-[20px] text-Primary mb-[24px]">
            Starting from: $59.99
          </h2>
          <Link
            className="text-white py-[12px] px-[24px] lg:py-[14px] lg:px-[32px] bg-second rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            to={"/"}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BotBanner;
