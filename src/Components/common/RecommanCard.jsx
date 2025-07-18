import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";

const RecommanCard = ({ title, img, price, rating, count, category }) => {
  return (
    <div className="w-[309px] h-[452px] overflow-hidden relative">
      <div className="p-[10px] rounded-full right-4 top-4 bg-white absolute">
        <IoBagHandleOutline className="text-primary text-[22px]" />
      </div>

      <div className="w-full h-[347px] box-border p-2 px-3 overflow-hidden rounded-[16px] bg-[#F8FAFC]">
        <img src={img} className="" alt="product_Img" />
      </div>
      <div className="flex flex-col mt-5 justify-between items-center px-4">
        <div className="text-second  gap-[40px]  font-poppins text-[16px] flex items-start font-semibold">
          <h3 className=" whitespace-nowrap overflow-hidden overflow-ellipsis  w-[200px]">
            {title}
          </h3>
          <h3>${price}</h3>
        </div>
        <div className="text-primary font-semibold  font-poppins text-[14px]  flex gap-[70px]">
          <p className=" whitespace-nowrap overflow-hidden overflow-ellipsis  w-[160px]">
            {category}
          </p>
          <p className="line-through">$199.99</p>
        </div>
        <div className="mt-[15px] self-start flex gap-1 justify-center items-center">
          <FaStar className="text-[17px] text-[#FBBF24]" />
          <span className="font-normal  font-poppins text-[14px] text-primary">
            {rating} ({count})
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommanCard;
