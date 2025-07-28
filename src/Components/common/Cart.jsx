import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router";

const Cart = ({ setOpen }) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  const localIds = JSON.parse(localStorage.getItem("proId"));
  // console.log(localIds);
  const cartItems = value?.filter((item) => localIds?.includes(item.id));
  console.log(cartItems);
  return (
    <section className="z-40 relative">
      <div
        onClick={() => setOpen(false)}
        className="fixed top-0 w-full  h-screen bg-[#00000050] z-40"
      ></div>
      <div className="fixed top-0 right-0 z-50 w-[400px] h-screen bg-white p-3">
        <div
          className="flex items-center justify-between
        "
        >
          <h2 className="text-3xl font-semibold font-poppins text-second">
            Cart
          </h2>
          <MdOutlineCancel
            onClick={() => setOpen(false)}
            className="text-4xl cursor-pointer"
          />
        </div>

        <div className="AllProducts mt-5 h-[400px] overflow-y-scroll">
          {/* {AllProduct?.map((item, i) => (
            <div
              key={i}
              className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1"
            >
              <div className="flex gap-4 items-center">
                <div
                  onClick={() => {
                    DeleteCart(item.id);
                  }}
                  className="w-[30px]"
                >
                  <MdDeleteOutline className="text-3xl cursor-pointer" />
                </div>
                <div className="w-[50px] text-center rounded-md ">
                  <img src={item.images[0]} alt="img" />
                </div>
                <h2 className="font-poppins text-lg font-semibold text-primary">
                  {item.title}
                </h2>
              </div>
              <div className="price font-poppins font-medium text-primary">
                {item.price} $
              </div>
            </div>
          ))} */}
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1"
            >
              <div className="flex gap-4 items-center">
                <div
                  onClick={() => {
                    // DeleteCart(item.id);delete cart
                  }}
                  className="w-[30px]"
                >
                  <MdDeleteOutline className="text-3xl cursor-pointer" />
                </div>
                <div className="w-[50px] text-center rounded-md ">
                  <img src={item.images[0]} alt="img" />
                </div>
                <h2 className="font-poppins text-lg font-semibold text-primary">
                  {item.title}
                </h2>
              </div>
              <div className="price font-poppins font-medium text-primary">
                {item.price}$
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-5 border-t">
          <p className="font-semibold  font-poppins text-[16px] text-primary">
            Total :{" "}
          </p>
          <p className="font-semibold  font-poppins text-[16px] text-primary">
            {/* {TotalCredit} */}
            10$
          </p>
        </div>
        <Link
          onClick={() => setOpen(false)}
          className="mt-5 flex p-1 rounded-md items-center justify-center font-semibold bg-black font-poppins text-[16px] text-white"
          to={"/checkout/asc"}
        >
          Check Out
        </Link>
      </div>
    </section>
  );
};

export default Cart;
