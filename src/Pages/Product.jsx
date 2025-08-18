import { useEffect, useState } from "react";
import { WiStars } from "react-icons/wi";
import { PiStarFill } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import BreadCrumb from "../Components/common/BreadCrumb";
import ProductReco from "../Components/product/ProductReco";
import { useParams } from "react-router";
import axios from "axios";
import MainProductSlider from "../Components/product/MainProductSlider";
import { BsStars } from "react-icons/bs";
import ResProDescription from "../Components/product/ResProDescription";

const Product = () => {
  const params = useParams();

  const [value, setValue] = useState({});
  // console.log(value);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.singleproduct}`)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, [params.singleproduct]);
  const keyWord = [
    {
      icon: <WiStars />,
      Name: "men's fashion",
    },
    {
      icon: <WiStars />,
      Name: "winter hat",
    },
    {
      icon: <WiStars />,
      Name: "colorful accessory",
    },
    {
      icon: <WiStars />,
      Name: "warm headwear",
    },
  ];

  const [count, setCount] = useState(1);

  return (
    <>
      <section
        id="product"
        className="pt-[40px] pb-[90px] border-t border-t-[#E5E7EB]"
      >
        <div className="container">
          {/* <BreadCrumb
            breadcontent={"product"}
            breadlink={"/product/:singleproduct"}
          /> */}

          <div className="detailRow flex flex-col lg:flex-row justify-between items-center lg:items-start mt-4">
            <div className="relative proImg mx-auto lg:mx-0 w-full lg:w-[804px]">
              <MainProductSlider images={value?.images} />
              <ResProDescription
                value={value}
                setCount={setCount}
                count={count}
              />
              {/* ......................
          ..................
             */}
              <div className=" w-[95%]">
                <h2 className="mt-[105px] hidden lg:inline-block mb-[4px] text-[36px] font-semibold font-poppins text-second">
                  {value.title}
                </h2>
                <p className="lg:w-[735px]  ml-3 w-[80%] text-[16px] font-normal font-poppins text-[#4B5563]">
                  {value.description}
                </p>
                <h2 className="mt-[60px] ml-3 lg:ml-0 mb-[4px] text-[24px] font-semibold font-poppins text-second">
                  Fabric + Care
                </h2>
                <p className="w-full lg:w-[735px] ml-3 lg:ml-0 text-[16px] font-normal font-poppins text-[#4B5563]">
                  Material: Soft wool blend
                </p>
                <p className="w-full lg:w-[735px] ml-3 lg:ml-0 text-[16px] font-normal font-poppins text-[#4B5563]">
                  Color: Various
                </p>
                <h2 className="mt-[60px] ml-3 lg:ml-0 mb-[4px] text-[24px] font-semibold font-poppins text-second">
                  Sale performance
                </h2>
                <p className="w-full lg:w-[735px] ml-3 lg:ml-0 text-[16px] font-normal font-poppins text-[#4B5563]">
                  Sales: 0
                </p>
                <p className="w-full lg:w-[735px] ml-3 lg:ml-0 text-[16px] font-normal font-poppins text-[#4B5563]">
                  Review Count: -
                </p>

                <p className="w-full lg:w-[735px] ml-3 lg:ml-0 text-[16px] font-normal font-poppins text-[#4B5563]">
                  Review Average:
                </p>
                <h2 className="mt-[60px] ml-3 lg:ml-0 mb-[4px] text-[24px] font-semibold font-poppins text-second">
                  Keywords
                </h2>
              </div>
              {/* ........................
            ................... */}
              <div className="keyRow ml-3 lg:ml-0 flex-wrap flex gap-[8px] items-center">
                {keyWord.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-fit flex gap-[4px] items-center py-[8px] px-[14px] rounded-full border border-[#E5E7EB]"
                    >
                      {item.icon}
                      <p className="text-[12px] font-normal font-poppins text-[#4B5563]">
                        {item.Name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="proDescription w-[460px] h-fit border lg:inline-block hidden border-[#E5E7EB] rounded-[16px] p-[33px]">
              <div className="flex justify-between">
                <div className="flex gap-[6px] items-center">
                  <PiStarFill className="text-[#FBBF24]" />
                  <p className="text-[16px] font-semibold font-poppins text-[#4B5563]">
                    4.9
                  </p>
                  <p className="text-[16px] font-medium font-poppins text-[#4B5563]">
                    142 reviews
                  </p>
                </div>
                <h2 className="text-[24px] font-poppins font-semibold text-second">
                  {value.price}$
                </h2>
              </div>

              <h2 className="mt-[32px] mb-[12px] text-[16px] font-semibold font-poppins text-second">
                Size:S
              </h2>
              <div className="sizeRow flex gap-[8px] flex-wrap">
                <button className="py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
                  S
                </button>
                <button className="py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
                  M
                </button>
                <button className="py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
                  L
                </button>
                <button className="py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
                  XL
                </button>
                <button className="py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
                  XXL
                </button>
              </div>

              <div className="mt-[38px] flex-wrap flex gap-4 justify-between">
                <div className="count flex gap-[16px] items-center bg-[#E5E7EB] rounded-full w-fit py-[8px] px-[12px]">
                  <button
                    onClick={() => setCount(count - 1)}
                    className=" px-[12px] py-[5px] text-second rounded-full bg-white text-[18px] font-bold"
                  >
                    -
                  </button>
                  <h2 className="text-[16px] font-medium font-poppins text-[#4B5563]">
                    {count}
                  </h2>
                  <button
                    onClick={() => setCount(count + 1)}
                    className=" px-[12px] py-[5px] text-second rounded-full bg-white text-[18px] font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="w-fit bg-second py-[14px] px-[32px] rounded-full flex gap-[8px] items-center">
                  <RiShoppingBag4Fill className="text-white" />
                  <button className="text-[16px] font-medium font-poppins text-white">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-[32px]">
                <p className="text-[16px] font-normal font-poppins text-[#4B5563]">
                  $169.99 x 1
                </p>
                <p className="text-[16px] font-normal font-poppins text-[#4B5563]">
                  $169.99
                </p>
              </div>
              <div className="flex justify-between mt-[10px]">
                <p className="text-[16px] font-normal font-poppins text-[#4B5563]">
                  Tax estimate
                </p>
                <p className="text-[16px] font-normal font-poppins text-[#4B5563]">
                  $0
                </p>
              </div>
              <span className="w-full h-[2px] bg-[#4B5563] inline-block"></span>

              <div className="flex justify-between mt-[16px]">
                <h2 className="text-[16px] font-semibold font-poppins text-second">
                  Total
                </h2>
                <h2 className="text-[16px] font-semibold font-poppins text-second">
                  $169.99
                </h2>
              </div>
            </div>
          </div>

          <ProductReco />
        </div>
      </section>
    </>
  );
};

export default Product;
