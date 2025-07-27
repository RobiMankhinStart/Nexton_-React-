import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router";

const SingleCard = ({
  addToCart,
  title,
  img,
  price,
  category,
  showProductPage,
}) => {
  return (
    <div className="w-[309px]  h-[430px] overflow-hidden duration-200 hover:shadow-md rounded-lg shadow-cyan-950 p-2 relative">
      <div
        onClick={addToCart}
        className="p-2 rounded-full right-4 top-4 hover:scale-110 duration-300 z-40  shadow-gray-600 shadow-md bg-white absolute"
      >
        <IoBagHandleOutline className="text-primary  text-[22px] " />
      </div>

      <div
        onClick={showProductPage}
        className="cursor-pointer  hover:scale-105 duration-200 w-full h-[300px]"
      >
        <img src={img} className="rounded-md" alt="product_Img" />
      </div>
      <div className="flex flex-col mt-5 justify-between items-center px-4">
        <div className="text-second  gap-[40px]  font-poppins text-[16px] flex items-start font-semibold">
          <h3 className=" whitespace-nowrap overflow-hidden overflow-ellipsis  w-[200px]">
            {title}
          </h3>
          <h3>${price}</h3>
        </div>
        <div className="text-primary font-semibold  font-poppins text-[14px] flex gap-[54px]">
          <p className=" whitespace-nowrap overflow-hidden overflow-ellipsis  w-[160px]">
            {category}
          </p>
          <p className="line-through">$199.99</p>
        </div>
        <div className="mt-[15px] self-start flex gap-1 justify-center items-center">
          <FaStar className="text-[17px] text-[#FBBF24]" />
          <span className="font-normal  font-poppins text-[14px] text-primary">
            4.5 (98)
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
