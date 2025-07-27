import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CheckInfo from "../Components/checkOut/CheckInfo";
import CheckSummery from "../Components/checkOut/CheckSummary";
import BreadCrumb from "../Components/common/BreadCrumb";

const CheckOut = () => {
  // ------Hooks
  const [Product, SetProduct] = useState([]);
  const params = useParams();

  // ---------Api
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/197`)
      .then((res) => {
        SetProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section id="Checkout" className="container mt-[40px]">
        <div>
          <h2 className="text-4xl font-semibold text-second mb-4">Checkout</h2>
          <BreadCrumb breadcontent={"Checkout"} breadlink={"/Checkout"} />
        </div>
        <div className="flex justify-between items-start mt-[52px]">
          <CheckInfo />
          <CheckSummery
            CheckImg={Product.images?.[0]}
            CheckPrice={Product.price}
            CheckName={Product.slug}
          />
        </div>
      </section>
    </>
  );
};

export default CheckOut;
