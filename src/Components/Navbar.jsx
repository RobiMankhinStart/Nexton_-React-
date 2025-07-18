import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Link } from "react-router";
import Cart from "./Cart";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="NavBar"
      className="fixed top-0 left-0 right-0 z-10 py-[27px] hidden lg:block dark:text-white"
    >
      <div className="container ">
        <div className="Menu_Row flex justify-between items-center">
          <Link to={"/"} className="menu_Logo w-[119px] ">
            <img src={logo} alt="logo" />
          </Link>
          <div className="Search_Bar flex items-center w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px]">
            <RiSearch2Line className="mr-[10px] ml-[24px] size-[20px] " />
            <input
              type="text"
              className="outline-none border-none text-[14px] text-primary 
               font-poppins"
              placeholder="Search in products..."
            />
          </div>
          <div className="relative Menu_Buttons items-center flex gap-[22px] text-primary">
            <RiUserLine className="size-[24px] cursor-pointer" />
            <LiaShoppingCartSolid
              onClick={() => setOpen(true)}
              className="size-[32px] border-2 p-[-1px] text-primary cursor-pointer"
            />
            <span className="text-[12px] font-poppins font-[600] text-white absolute right-[-7px] top-[-4px] size-[20px] rounded-full flex items-center justify-center bg-[#0EA5E9]">
              3
            </span>
          </div>
        </div>
      </div>
      {open ? <Cart open={open} setOpen={setOpen} /> : ""}
    </div>
  );
};

export default Navbar;
