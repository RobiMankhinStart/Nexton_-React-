import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router";
import Cart from "./common/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchPro } from "../SearchSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const cartItems = JSON.parse(localStorage.getItem("proId")) || [];
  const [searchProducts, setSearchProducts] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    const searchProductVar = value.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchProducts(searchProductVar);
  };
  // console.log(searchProducts);
  // console.log(value);
  const handleToShopPage = (product) => {
    dispatch(searchPro(product));
    console.log(product);
    setSearch("");
    navigate("/shop");
  };
  return (
    <div
      id="NavBar"
      className="fixed top-0 left-0 right-0 z-20 py-[27px] hidden lg:block dark:text-white"
    >
      {" "}
      {/* Search Results */}
      {search.length > 0 && (
        <div className="max-h-[400px] overflow-y-auto fixed top-[12%] left-0 w-full  p-2 flex flex-col bg-amber-200">
          {searchProducts?.length === 0 ? (
            <div className="text-[22px] flex justify-center rounded-xl w-full text-white font-bold font-mono px-10 p-2 bg-red-500 mx-auto">
              No product Found...
            </div>
          ) : (
            <div className="">
              {searchProducts.map((item) => (
                <div
                  onClick={() => handleToShopPage(item.title)}
                  key={item.id}
                  className="cursor-pointer font-semibold font-mono mt-1 p-[2px] border-b border-b-gray-400 w-full"
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="container ">
        <div className="Menu_Row flex justify-between items-center">
          <Link to={"/"} className="menu_Logo w-[119px] ">
            <img src={logo} alt="logo" />
          </Link>
          <div className="Search_Bar flex items-center w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px]">
            <RiSearch2Line className="mr-[10px] ml-[24px] size-[20px] " />
            <input
              onChange={(e) => {
                setSearch(e.target.value), handleSearch();
              }}
              type="text"
              className="outline-none border-none text-[14px] text-primary 
               font-poppins"
              placeholder="Search in products..."
            />
          </div>
          <div className="relative Menu_Buttons items-center flex gap-[22px] text-primary">
            <Link to={"/Login"} className="cursor-pointer">
              <RiUserLine className="size-[24px] cursor-pointer" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="p-[-1] border-2"
            >
              <LiaShoppingCartSolid className="size-[32px] text-primary cursor-pointer" />
            </button>
            <span className="text-[12px] font-poppins font-[600] text-white absolute right-[-7px] top-[-4px] size-[20px] rounded-full flex items-center justify-center bg-[#0EA5E9]">
              {cartItems?.length || 0}
            </span>
          </div>
        </div>
      </div>
      {open && <Cart open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
