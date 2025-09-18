import React, { useState } from "react";
import resLogo from "../assets/favicon.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
import { MdOutlineCancel } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import Cart from "./common/Cart";
import { useSelector } from "react-redux";

const ResNavbar = () => {
  // const cartItems = JSON.parse(localStorage.getItem("proId")) || [];
  const reduxCardIds = useSelector((state) => state.searchProduct.cartItems);

  const [open, setOpen] = useState(false);

  const [showNav, setShowNav] = useState(false);
  return (
    <div
      id="NavBar"
      className=" fixed top-0 left-0 right-0 z-9 lg:hidden py-5 px-4 dark:text-white"
    >
      <div className="container">
        <div className="Menu_Row w-full flex items-center justify-between">
          <Link to={"/"} className="menu_Logo w-[24px] ">
            <img src={resLogo} alt="logo" />
          </Link>
          <div className="Search_Bar flex items-center w-[200px] h-[36px] bg-[#F8F8F8] rounded-[100px]">
            <RiSearch2Line className="mr-[6px] ml-[16px] size-[14px] " />
            <input
              type="text"
              className="outline-none border-none text-[12px] w-[121px] text-primary 
                 font-poppins"
              placeholder="Search in products..."
            />
          </div>
          <div className="relative Menu_Buttons items-center flex text-primary">
            <FaBars
              onClick={() => setShowNav(true)}
              className={`${
                showNav ? "opacity-0 pointer-events-none:" : "opacity-100"
              } absolute right-[2px] transition-all duration-400 size-[32px] cursor-pointer`}
            />
            <GiCancel
              onClick={() => setShowNav(false)}
              className={`${
                showNav ? " opacity-100" : "opacity-0 pointer-events-none"
              } absolute right-[2px] transition-all duration-400 size-[32px] cursor-pointer`}
            />
          </div>
        </div>
        <div
          className={`${
            showNav
              ? "opacity-100  top-[78px] left-[10px]"
              : "opacity-0 pointer-events-none left-[10px] top-[-100px]"
          } absolute z-10 left-[10px] transition-all duration-500  flex flex-col gap-2 items-center bg-[#4B5563] mx-auto rounded-md`}
        >
          <div className="py-4 px-3 content_Row w-[90%] mx-auto flex flex-col items-center rounded-md bg-emerald-100 ">
            <div className="relative Menu_Buttons items-center flex flex-col gap-[22px] text-primary">
              <RiUserLine className="size-[24px] cursor-pointer" />
              <LiaShoppingCartSolid
                onClick={() => {
                  setOpen(!open), setShowNav(false);
                }}
                className="size-[32px] border-2 p-[-1px] text-primary cursor-pointer"
              />
              <span className="text-[12px] font-poppins font-[600] text-white absolute right-[-7px] top-[42px] size-[20px] rounded-full flex items-center justify-center bg-[#0EA5E9]">
                {reduxCardIds?.length || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart open={open} setOpen={setOpen} />}
    </div>
  );
};

export default ResNavbar;
