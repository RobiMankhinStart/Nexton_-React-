import { useState, useEffect } from "react";
import { IoResize } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router";
// import ProductImg from "../../assets/Images/ProductImage.png";

const CheckSummery = () => {
  const [Product, setProduct] = useState([]);
  const params = useParams();
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
    <>
      <section
        id="Checkout-Summery"
        className="w-[618px] md:w-[100%] lg:inline-block hidden"
      >
        <div>
          <h2 className="text-2xl font-poppins font-semibold text-second">
            Order summary
          </h2>
        </div>
        {/* -------Product 1 Show--------- */}
        <div className="h-[500px] mt-6 p-2 overflow-y-scroll flex  flex-col">
          {Product.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-8 py-6 border-t border-[#E5E7EB] mt-6"
            >
              <div className="w-[180px] ">
                <img src={item.images?.[0]} alt="Product" />
              </div>
              {/* -------Product 1--------- */}
              <div className="flex items-center justify-between w-full">
                <div>
                  <h2 className="font-semibold text-base text-second">
                    {item.slug}
                  </h2>
                  <p className="text-Primary text-sm font-normal flex items-center gap-1 mt-1">
                    <IoResize /> One size
                  </p>
                  <div className="bg-[#E5E7EB]  w-[107px] p-2 rounded-[20px] flex items-center gap-4 mt-[20px]">
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
                </div>
                <div className=" text-end">
                  <h2 className="font-semibold text-base text-second">
                    ${item.price}
                  </h2>
                  <p className="text-Primary text-sm font-normal line-through">
                    $199.99
                  </p>
                  <div
                    onClick={() => removeItem(item.id)}
                    className="w-[30px]  ml-auto"
                  >
                    <MdDeleteOutline className="text-2xl cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* -------Checkout final--------- */}
        <div className="mt-6">
          <p className="text-base text-Primary font-normal flex items-center justify-between">
            Subtotal <span>${subTotal}</span>
          </p>
          <p className="text-base text-Primary font-normal flex items-center justify-between mt-2">
            Shipping estimate <span>$5.00</span>
          </p>
          <p className="text-base text-Primary font-normal flex items-center justify-between mt-2">
            Tax estimate <span>$24.90</span>
          </p>
          <h2 className="text-second font-semibold text-base flex items-center justify-between mt-6">
            Order total <span>${subTotal + 24 + 5}</span>
          </h2>
          <button className="text-base font-medium text-white bg-second mt-6 w-full h-[52px] rounded-full cursor-pointer hover:scale-[1.05] duration-300">
            Confirm order
          </button>
        </div>
      </section>
    </>
  );
};

export default CheckSummery;
