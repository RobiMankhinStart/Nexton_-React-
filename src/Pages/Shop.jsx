import React, { useState } from "react";
import { Range } from "react-range"; // Add this import
import BreadCrumb from "../Components/common/BreadCrumb";
import AllShopProducts from "../Components/shop/AllShopProducts";

const Shop = () => {
  //    .......for category
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { id: "1", label: "Men's fashion" },
    { id: "2", label: "Women's fashion" },
    { id: "3", label: "Kids & Toys" },
    { id: "4", label: "Accessories" },
    { id: "5", label: "Cosmetics" },
    { id: "6", label: "Shoes" },
    { id: "7", label: "Sports" },
  ];

  //    .......for price range
  const [values, setValues] = useState([100, 500]);
  const min = 0;
  const max = 1000;

  //    .......for sort order

  const [selectedOrder, setSelectedOrder] = useState("");

  const SortOrders = [
    { id: "option1", label: "Most Popular" },
    { id: "option2", label: "Best Rating" },
    { id: "option3", label: "Newest" },
    { id: "option4", label: "Price Low - Hight" },
    { id: "option5", label: "Price Hight - Low" },
  ];
  return (
    <section id="shop" className="pt-10 pb-10">
      <div className="container">
        <BreadCrumb breadcontent={"Shop"} breadlink={"/shop"} />
        <div className="shop_columns mt-2 flex gap-11">
          <div className="left">
            <div className="category pb-10 border-b border-b-[#94A3B8]">
              <h2 className="text-[18px] font-poppins font-semibold text-[#111827] mb-2">
                Categories
              </h2>
              <div className="space-y-3 mt-4">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={option.id}
                      name="shipping"
                      className="hidden"
                      checked={selectedOption === option.id}
                      onChange={() => setSelectedOption(option.id)}
                    />
                    <label
                      htmlFor={option.id}
                      className={`flex items-center cursor-pointer`}
                    >
                      <span
                        className={`inline-block w-5 h-5 border-2 mr-3 flex-shrink-0 rounded-[4px] ${
                          selectedOption === option.id
                            ? "bg-blue-600 border-blue-600"
                            : "border-[#94A3B8] hover:border-blue-600"
                        }`}
                      >
                        {selectedOption === option.id && (
                          <svg
                            className="w-full h-full text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="select-none text-primary text-[14px] font-poppins">
                        {option.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="priceRange mt-8 pb-10 border-b border-b-[#94A3B8]">
              <div className="space-y-4">
                <h3 className="text-[18px] font-poppins font-semibold text-[#111827]">
                  Price range
                </h3>

                <div className="pt-2">
                  <Range
                    step={10}
                    min={min}
                    max={max}
                    values={values}
                    onChange={(vals) => setValues(vals)}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="h-1 w-full rounded-full bg-gray-200"
                        style={{
                          background: `linear-gradient(to right, 
                  #E5E7EB 0%, 
                  #E5E7EB ${(values[0] / max) * 100}%, 
                  #3B82F6 ${(values[0] / max) * 100}%, 
                  #3B82F6 ${(values[1] / max) * 100}%, 
                  #E5E7EB ${(values[1] / max) * 100}%, 
                  #E5E7EB 100%)`,
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className="h-3 w-3 rounded-full bg-white border-2 border-blue-500 focus:outline-none"
                      />
                    )}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <div className="space-y-1 mr-6">
                    <p className=" text-primary font-poppins font-normal text-[16px]">
                      Min price
                    </p>
                    <p className="w-[130px] py-2 px-4 border-[#4B5563] rounded-[16px] border flex justify-between text-primary font-poppins font-medium text-[14px]">
                      {values[0]} <span>$</span>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className=" text-primary font-poppins font-normal text-[16px]">
                      Max price
                    </p>
                    <p className="w-[130px] py-2 px-4 border-[#4B5563] rounded-[16px] border flex justify-between text-primary font-poppins font-medium text-[14px]">
                      {values[1]} <span>$</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="SortOrder mt-8">
              <h3 className="text-[18px] mb-2 font-poppins font-semibold text-[#111827]">
                Sort order
              </h3>
              <div className="space-y-2 py-4">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={option.id}
                      name="radio-group"
                      value={option.id}
                      checked={selectedOrder === option.id}
                      onChange={() => setSelectedOrder(option.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={option.id}
                      className="ml-2 block text-primary text-[14px] font-poppins"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <AllShopProducts />
        </div>
      </div>
    </section>
  );
};

export default Shop;
