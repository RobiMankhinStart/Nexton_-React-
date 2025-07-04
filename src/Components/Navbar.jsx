import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
const Navbar = () => {
  return (
    <div id="NavBar" className="py-[27px]">
      <div className="container">
        <div className="Menu_Row flex justify-between">
          <div className="menu_Logo w-[119px] ">
            <img src={logo} alt="logo" />
          </div>
          <div className="Search_Bar flex items-center w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px]">
            <RiSearch2Line className="mr-[10px] ml-[24px] size-[20px] " />
            <input
              type="text"
              className="text-[14px] text-primary
               font-poppins"
              placeholder="Search in products..."
            />
          </div>
          <div className="Menu_Buttons items-center flex gap-[22px] text-primary">
            <RiUserLine className="size-[24px]" />
            <LiaShoppingCartSolid className="size-[30px] text-primary" />
            <span className="size-[20px] flex items-center justify-center bg-[#0EA5E9]">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
