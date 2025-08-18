import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbRouteAltLeft } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";

const CheckInfo = () => {
  return (
    <>
      <section className="lg:inline-block hidden w-[638px]">
        {/* -------------First Section----------------- */}
        <div className="border-2 border-[#E5E7EB] w[100%] py-[24px] rounded-[16px]">
          <div className="border-b-2 border-[#E5E7EB]">
            <h2 className="text-Primary font-medium text-base flex items-center gap-4 pl-[24px] pb-[24px]">
              <FaRegCircleUser className="text-2xl" />
              CONTACT INFO
            </h2>
          </div>

          <div className="p-[24px] flex item-center gap-4 flex-wrap justify-between ">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Your phone number
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="number"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Email address
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="email"
              />
            </div>
          </div>
        </div>
        {/* -------------Second Section----------------- */}
        <div className="border-2 border-[#E5E7EB] py-[24px] rounded-[16px] mt-[40px]">
          <div className="border-b-2 border-[#E5E7EB]">
            <h2 className="text-Primary font-medium text-base flex items-center gap-4 pl-[24px] pb-[24px]">
              <TbRouteAltLeft className="text-2xl" />
              SHIPPING ADDRESS
            </h2>
          </div>
          {/* ---------inputs 1-------- */}
          <div className="p-[24px] flex item-center gap-4 flex-wrap justify-between">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                First name
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Last name
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
          {/* ---------inputs 2-------- */}
          <div className="px-[24px] flex item-center gap-4 flex-wrap justify-between mt-[24px]">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Address line 1
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[383px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Apt, Suite
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[180px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
          {/* ---------inputs 3-------- */}
          <div className="px-[24px] mt-[24px]">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Address line 2
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[100%] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
          {/* ---------inputs 4-------- */}
          <div className="p-[24px] flex item-center flex-wrap gap-4 justify-between">
            <div>
              <p className="text-base font-semibold text-second mb-2">City</p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Country
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
          {/* ---------inputs 5-------- */}
          <div className="p-[24px] flex item-center gap-4 flex-wrap justify-between">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                State/Province
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Postal code
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[283px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* -------------Third Section----------------- */}
        <div className="border-2 border-[#E5E7EB] py-[24px] rounded-[16px] mt-[40px]">
          <div className="border-b-2 border-[#E5E7EB]">
            <h2 className="text-Primary font-medium text-base flex items-center gap-4 pl-[24px] pb-[24px]">
              <CiCreditCard1 className="text-2xl" />
              PAYMENT
            </h2>
          </div>
          {/* ---------Input 1-------- */}
          <div className="px-[24px] mt-[24px]">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Card number
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-full h-[43px] pl-2 outline-none"
                type="number"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2 mt-[24px]">
                Name on the card
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-full h-[43px] pl-2 outline-none"
                type="number"
              />
            </div>
          </div>
          {/* ---------Input 2-------- */}
          <div className="px-[24px] flex item-center flex-wrap gap-4 justify-between mt-[24px]">
            <div>
              <p className="text-base font-semibold text-second mb-2">
                Expiration date (MM/YY)
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[386px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-second mb-2">CVC</p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px] w-[180px] h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckInfo;
