import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router";

const Cart = ({ setOpen }) => {
  return (
    <div className="fixed top-0 w-full  h-screen bg-[#00000050] z-20">
      <div className="w-[400px] h-screen bg-white ml-auto p-3">
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
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
          <div className="SingleProduct mt-3 h-[70px] flex items-center justify-between px-1">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] text-center rounded-md ">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  alt="img"
                />
              </div>
              <h2 className="font-poppins text-lg font-semibold text-primary">
                Product Name
              </h2>
            </div>
            <div className="price font-poppins font-medium text-primary">
              120 $
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5 border-t">
          <p className="font-semibold  font-poppins text-[16px] text-primary">
            Total :{" "}
          </p>
          <p className="font-semibold  font-poppins text-[16px] text-primary">
            820 $
          </p>
        </div>
        <Link
          onClick={() => setOpen(false)}
          className="mt-5 flex p-1 rounded-md items-center justify-center font-semibold bg-black font-poppins text-[16px] text-white"
          to={"/"}
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default Cart;
