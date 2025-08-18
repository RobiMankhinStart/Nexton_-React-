import { useState, useEffect } from "react";
import { IoResize } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbRouteAltLeft } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";

const ResponsiveCheckout = () => {
  const [Product, setProduct] = useState([]);
  const localIDs = JSON.parse(localStorage.getItem("proId")) || [];

  // ---------Api
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        const cartItems = res.data.filter((item) => localIDs.includes(item.id));

        const dataWithQTY = cartItems.map((item) => {
          return { ...item, qty: 1, uniquePrice: item.price };
        });
        setProduct(dataWithQTY);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(Product);
  // removing a product from cart...
  const [refresh, setRefresh] = useState(false);
  const removeItem = (proID) => {
    const removedIDs = localIDs.filter((id) => id != proID);
    localStorage.setItem("proId", JSON.stringify(removedIDs));
    setRefresh(!refresh);
  };

  // console.log(Product);
  // increasing quantity .............
  const increaseQty = (id) => {
    setProduct((prev) =>
      prev.map((item) => {
        if (item.id != id) return item;
        else {
          const updatedQty = Number(item.qty + 1);
          const updatedPrice = Number(item.uniquePrice * updatedQty);
          return { ...item, qty: updatedQty, price: updatedPrice };
        }
      })
    );
  };

  // decreasing quantity .............

  const decreaseQTY = (id) => {
    setProduct((prev) =>
      prev.map((item) => {
        if (item.id != id) return item;
        else if (item.qty == 1) return item;
        const updatedQty = item.qty - 1;
        const updatedPrice = item.uniquePrice * updatedQty;
        return { ...item, qty: updatedQty, price: updatedPrice };
      })
    );
  };

  // total Price........
  const subTotal = Product.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
  return (
    <section className="w-[95%]  flex flex-col lg:hidden mx-auto">
      <h2 className="text-xl mb-6 ml-3 font-poppins font-semibold text-second">
        Order summary
      </h2>
      <div className="h-[500px] border-b border-b-[#E5E7EB] p-2 overflow-y-scroll max-w-[90%] mx-auto flex items-center flex-col">
        {Product.map((item) => (
          <div
            key={item.id}
            className=" flex items-center gap-[3%] md:gap-[6%] py-6 border-t border-[#E5E7EB] mt-6"
          >
            <div className="max-w-[150px] ">
              <img src={item.images?.[0]} alt="Product" />
            </div>
            {/* -------Product 1--------- */}
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-base text-second">
                    {item.slug}
                  </h2>
                  <p className="text-Primary text-sm font-normal flex items-center gap-1 mt-1">
                    <IoResize /> One size
                  </p>
                </div>
                <div className="flex justify-center gap-8  items-center">
                  <div className="flex flex-col ">
                    <h2 className="font-semibold text-base text-second">
                      ${item.price}
                    </h2>
                    <p className="text-Primary text-sm font-normal line-through">
                      $199.99
                    </p>
                  </div>

                  <div className="bg-[#E5E7EB] mb-5  w-[110px] p-2 rounded-[20px] flex items-center gap-4 mt-[20px]">
                    <button
                      className="bg-white pb-[2px] flex justify-center items-center w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:scale-105  duration-[.1s] select-none"
                      onClick={() => decreaseQTY(item.id)}
                    >
                      -
                    </button>
                    <p className="text-base text-Primary font-medium">
                      {item.qty}
                    </p>
                    <button
                      className="bg-white pb-[2px] flex justify-center items-center w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:scale-105  duration-[.1s] select-none"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div onClick={() => removeItem(item.id)} className="w-[30px]">
                    <MdDeleteOutline className="text-2xl cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* <div className=" text-end">
               
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-xl mt-[50px] mb-6 ml-3 font-poppins font-semibold text-second">
        Shipping details
      </h2>
      <div className="border-2 border-[#E5E7EB] py-[24px] rounded-[16px]">
        <div className="border-b-2 border-[#E5E7EB]">
          <h2 className="text-Primary font-medium text-base flex items-center gap-4 pl-[24px] pb-[24px]">
            <FaRegCircleUser className="text-2xl" />
            CONTACT INFO
          </h2>
        </div>

        <div className="p-[24px] flex flex-col item-center gap-6 justify-between">
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
      {/* .............shipping address section....... 
      ........................................ */}
      <div className="border-2 border-[#E5E7EB] py-[24px] rounded-[16px] mt-[40px]">
        <div className="border-b-2 border-[#E5E7EB]">
          <h2 className="text-[#4B5563] font-poppins font-medium text-base flex items-center gap-4 pl-[24px] pb-[24px]">
            <TbRouteAltLeft className="text-2xl" />
            SHIPPING ADDRESS
          </h2>
        </div>
        {/* ---------inputs 1-------- */}
        {/* ---------inputs 2-------- */}
        <div className="p-[24px] ">
          <div className="w-[100%] flex items-center gap-4 justify-center">
            <div className="">
              <p className="text-base font-poppins font-semibold text-[#111827] mb-2">
                First name
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="text-base font-poppins font-semibold text-second mb-2">
                Last name
              </p>
              <input
                className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-2 outline-none"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="p-[24px] w-[100%] flex flex-col gap-6 item-center justify-between mt-[24px]">
          <div>
            <p className="text-base font-poppins font-semibold text-second mb-2">
              Address line 1
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px] w-full h-[43px] pl-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <p className="text-base font-poppins font-semibold text-second mb-2">
              Apt, Suite
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px] w-full h-[43px] pl-2 outline-none"
              type="text"
            />
          </div>
        </div>
        {/* ---------inputs 3-------- */}
        <div className="px-[24px] mt-[24px]">
          <div>
            <p className="text-base font-poppins font-semibold text-second mb-2">
              Address line 2
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px] w-full h-[43px] pl-2 outline-none"
              type="text"
            />
          </div>
        </div>
        {/* ---------inputs 4-------- */}
        <div className="py-[24px] px-3 flex item-center justify-between w-[90%]  items-center gap-4 ">
          <div>
            <p className="text-base  font-semibold font-poppins text-second mb-2">
              City
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-1 outline-none"
              type="text"
            />
          </div>
          <div>
            <p className="text-base font-poppins font-semibold text-second mb-2">
              Country
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-1 outline-none"
              type="text"
            />
          </div>
        </div>
        {/* ---------inputs 5-------- */}
        <div className="p-[24px] flex gap-4 item-center justify-center w-[100%]">
          <div>
            <p className="text-base font-poppins font-semibold text-second mb-2">
              State/Province
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <p className="text-base font-poppins font-semibold text-second mb-2">
              Postal code
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px] h-[43px] pl-2 outline-none"
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
        <div className="px-[24px] flex item-center justify-center gap-4 mt-[24px]">
          <div>
            <p className="text-base font-semibold text-second mb-2">
              Expiration date
            </p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-second mb-2">CVC</p>
            <input
              className="border-2 border-[#E5E7EB] rounded-[12px]  h-[43px] pl-2 outline-none"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* ....................fourth section ............... */}
      <div className="mt-[80px]">
        <h2 className="text-xl mb-6 ml-3 font-poppins font-semibold text-second">
          Confirm your order
        </h2>
        <div className="mt-6">
          <p className="text-base text-[#4B5563] font-poppins font-normal flex items-center justify-between">
            Subtotal <span>${subTotal}</span>
          </p>
          <p className="text-base text-[#4B5563] font-poppins font-normal flex items-center justify-between mt-2">
            Shipping estimate <span>$5.00</span>
          </p>
          <p className="text-base text-[#4B5563] font-poppins font-normal flex items-center justify-between mt-2">
            Tax estimate <span>$24.90</span>
          </p>
          <h2 className="text-second font-semibold text-base flex items-center justify-between mt-6">
            Order total <span>${subTotal + 24 + 5}</span>
          </h2>
          <button className="text-base font-medium text-white bg-second mt-6 w-full h-[52px] rounded-full cursor-pointer hover:scale-[1.05] duration-300">
            Confirm order
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveCheckout;
