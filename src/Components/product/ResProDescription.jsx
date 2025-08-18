import { PiStarFill } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";

const ResProDescription = ({ value, setCount, count }) => {
  return (
    <section className="relative ml-4 mt-10 lg:hidden inline-block">
      {/* <div className="conatainer"> */}
      <div className="proDescriptionDiv w-full mx-auto items-center flex flex-col justify-center">
        <div className="  flex flex-col border  border-[#E5E7EB] rounded-[16px] p-[33px]">
          <h2 className=" mb-[4px] text-[24px]  font-semibold font-poppins text-second">
            {value.title}
          </h2>
          <div className="flex flex-col justify-between">
            <h2 className="text-[24px] mb-6 font-poppins font-semibold text-second">
              {value.price}$
            </h2>
            <div className="flex gap-[6px] items-center">
              <PiStarFill className="text-[#FBBF24]" />
              <p className="text-[16px] font-semibold font-poppins text-[#4B5563]">
                4.9
              </p>
              <p className="text-[16px] font-medium font-poppins text-[#4B5563]">
                (98)
              </p>
            </div>
          </div>

          <h2 className="mt-[32px] mb-[12px] text-[16px] font-semibold font-poppins text-second">
            Size : S
          </h2>
          <div className="sizeRow flex gap-[8px] flex-wrap">
            <button className="py-[10px] px-[30px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
              S
            </button>
            <button className="py-[10px] px-[30px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
              M
            </button>
            <button className="py-[10px] px-[30px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
              L
            </button>
            <button className="py-[10px] px-[30px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
              XL
            </button>
            <button className="py-[10px] px-[30px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer">
              2XL
            </button>
          </div>

          <div className="mt-[38px] flex-wrap gap-5 flex justify-between">
            <div className="flex gap-[16px] items-center bg-[#E5E7EB] rounded-full py-[6px] px-[10px]">
              <button
                onClick={() => setCount(count - 1)}
                className=" px-[10px]  text-second rounded-full bg-white text-[18px] font-bold"
              >
                -
              </button>
              <h2 className="text-[16px] font-medium font-poppins text-[#4B5563]">
                {count}
              </h2>
              <button
                onClick={() => setCount(count + 1)}
                className=" px-[10px] py-[1px]  text-second rounded-full bg-white text-[18px] font-bold"
              >
                +
              </button>
            </div>

            <div className="w-fit bg-second py-[10px] px-[32px] rounded-full flex gap-[8px] items-center">
              <RiShoppingBag4Fill className="text-white" />
              <button className="text-[16px] font-medium font-poppins text-white">
                Add to cart
              </button>
            </div>
          </div>
          <div className="hidden">
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
        <div className=" w-[100%]">
          <h2 className="mt-10  lg:hidden inline-block mb-[4px] text-[20px] font-semibold font-poppins text-second">
            About this product
          </h2>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ResProDescription;
