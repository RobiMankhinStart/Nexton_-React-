import React from "react";
import product from "../../assets/Watchimage.png";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const SingleProductReco = ({
  proName,
  proPrice,
  proDis,
  proRat,
  proImg,
  proTotal,
}) => {
  return (
    <div className="w-[309px] h-[448px] p-2  rounded-[16px] mt-[0px] mb-[30px] shadow-cyan-900  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-[.4s]">
      <div className="product-img w-full h-[320px] bg-[#F8F8F8] rounded-[16px] overflow-hidden">
        <img src={proImg} alt="Product" />
      </div>

      <div className="flex justify-between items-center mt-[20px] px-[10px]">
        <h2 className="text-[16px] font-poppins font-semibold text-second truncate w-[180px]">
          {proName}
        </h2>
        <p className="text-[16px] font-poppins font-semibold text-second">
          $ {proPrice}
        </p>
      </div>

      {/* <div className='flex justify-between items-center px-[10px]'>
            <h2 className='text-[16px] font-poppins font-semibold text-second'>Accessories</h2>
            <p className='text-[16px] font-poppins font-semibold text-second line-through'>{proDis}</p>
        </div> */}

      <div className="flex gap-[4px] items-center mt-[5px] px-[10px]">
        <FaStar className="text-[20px] text-[#FBBF24]" />
        <p className="text-[14px] font-poppins font-normal text-[#4B5563] ">
          {proRat}
          <span>({proTotal})</span>
        </p>
      </div>

      <div>
        <Link to={"/productdetails"}>Details</Link>
      </div>
    </div>
  );
};

export default SingleProductReco;
