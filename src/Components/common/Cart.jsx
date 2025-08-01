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

  const localIds = JSON.parse(localStorage.getItem("proId")) || [];
  // console.log(localIds);

  // filtering only the items that arein the local storage ....
  const cartItems = value?.filter((item) => localIds?.includes(item.id));
  console.log(cartItems);

  // calculating total price
  const totalPrice = cartItems.reduce((sum, items) => {
    return sum + items.price;
  }, 0);
  // console.log(totalPrice);

  // removing a product from cart...
  const [refresh, setRefresh] = useState(false);

  const removeItem = (proID) => {
    const updatedIDs = localIds.filter((item) => item !== proID);
    localStorage.setItem("proId", JSON.stringify(updatedIDs));
    setRefresh(!refresh);
  };
  console.log(removeItem);

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

        <div className="AllProducts flex flex-col gap-2 mt-5 h-[400px] overflow-y-scroll">
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="SingleProduct mt-3 h-[70px] flex items-center justify-between pr-2"
            >
              <div className="flex gap-2 items-center">
                <div className="w-[80px] text-center rounded-lg overflow-hidden ">
                  <img src={item.images[0]} alt="img" />
                </div>
                <h2 className="truncate max-w-[160px] font-poppins text-md font-semibold text-primary">
                  {item.title}
                </h2>
              </div>
              <div className="price flex flex-col items-center justify-center font-poppins font-medium text-primary">
                <h4>{item.price}$</h4>
                <div onClick={() => removeItem(item.id)} className="w-[30px]">
                  <MdDeleteOutline className="text-2xl cursor-pointer" />
                </div>
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
            {totalPrice}$
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
