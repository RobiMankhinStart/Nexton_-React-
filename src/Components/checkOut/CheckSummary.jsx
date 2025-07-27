import React, { useState } from "react";
import { IoResize } from "react-icons/io5";
// import ProductImg from "../../assets/Images/ProductImage.png";

const CheckSummery = ({ CheckImg, CheckPrice, CheckName }) => {
  // -------First Quantity
  const [value, setValue] = useState(1);
  if (value < 1) {
    setValue(value + 1);
  }

  // -------First Quantity
  const [value2, setValue2] = useState(1);
  if (value2 < 1) {
    setValue2(value2 + 1);
  }
  return (
    <>
      <section id="Checkout-Summery" className="w-[618px]">
        <div>
          <h2 className="text-2xl font-semibold text-second">Order summary</h2>
        </div>
        {/* -------Product 1 Show--------- */}
        <div className="flex items-center gap-8 py-6 border-t-2 border-BorderCol mt-6">
          <div className="w-[96px]">
            <img src={CheckImg} alt="Product" />
          </div>
          {/* -------Product 1--------- */}
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="font-semibold text-base text-second">
                {CheckName}
              </h2>
              <p className="text-Primary text-sm font-normal flex items-center gap-1 mt-1">
                <IoResize /> One size
              </p>
              <div className="flex items-center gap-4 mt-[20px]">
                <button
                  className="w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none"
                  onClick={() => setValue(value - 1)}
                >
                  -
                </button>
                <p className="text-base text-Primary font-medium">{value}</p>
                <button
                  className="w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none"
                  onClick={() => setValue(value + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className=" text-end">
              <h2 className="font-semibold text-base text-second">
                ${CheckPrice}
              </h2>
              <p className="text-Primary text-sm font-normal line-through">
                $199.99
              </p>
            </div>
          </div>
        </div>
        {/* -------Product 2 Show--------- */}
        <div className="flex items-center gap-8 py-6 border-t-2 border-BorderCol border-b-2">
          <div className="w-[96px]">
            <img src={CheckImg} alt="Product" />
          </div>
          {/* -------Product 1--------- */}
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="font-semibold text-base text-second">
                {CheckName}
              </h2>
              <p className="text-Primary text-sm font-normal flex items-center gap-1 mt-1">
                <IoResize /> One size
              </p>
              <div className="flex items-center gap-4 mt-[20px]">
                <button
                  className="w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none"
                  onClick={() => setValue2(value2 - 1)}
                >
                  -
                </button>
                <p className="text-base text-Primary font-medium">{value2}</p>
                <button
                  className="w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none"
                  onClick={() => setValue2(value2 + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className=" text-end">
              <h2 className="font-semibold text-base text-second">
                ${CheckPrice}
              </h2>
              <p className="text-Primary text-sm font-normal line-through">
                $199.99
              </p>
            </div>
          </div>
        </div>
        {/* -------Checkout final--------- */}
        <div className="mt-6">
          <p className="text-base text-Primary font-normal flex items-center justify-between">
            Subtotal <span>${CheckPrice}</span>
          </p>
          <p className="text-base text-Primary font-normal flex items-center justify-between mt-2">
            Shipping estimate <span>$5.00</span>
          </p>
          <p className="text-base text-Primary font-normal flex items-center justify-between mt-2">
            Tax estimate <span>$24.90</span>
          </p>
          <h2 className="text-second font-semibold text-base flex items-center justify-between mt-6">
            Order total <span>${CheckPrice + 24}</span>
          </h2>
          <button className="text-base font-medium text-white bg-second mt-6 w-full h-[52px] rounded-full cursor-pointer hover:scale-[1.05] duration-300">
            Confirm order
          </button>
        </div>
      </section>
    </>
  );
};

export default CheckSummery;
