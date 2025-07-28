import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleProductReco from "../common/SingleProductReco";

const ProductReco = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProduct(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(Product)

  // slick
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <section id="reco" className="mt-[88px] mb-[88px]">
        <div className="container">
          <div>
            <h2 className="text-[36px] font-poppins font-semibold mb-[40px] hidden lg:block">
              Recommended
              <span className="ml-2 ">products</span>
            </h2>
            <h2 className="text-[24px] px-[24px] font-poppins font-semibold mb-[40px] lg:hidden">
              Recommendations
            </h2>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {Product?.slice(0, 9).map((item, i) => {
                return (
                  <SingleProductReco
                    key={i}
                    proImg={item.images[0]}
                    proName={item.title}
                    proPrice={item.price}
                    proDis={"$199.99"}
                    proRat={"4.3"}
                    proTotal={"98"}
                  />
                );
              })}
            </Slider>
          </div>

          {/* <div className="mt-[50px] flex justify-center">
            <Link
              to="/allreco"
              className="py-[10px] px-[30px] bg-sky-600 rounded-2xl text-[20px] text-white font-poppins cursor-pointer hover:tracking-[1px] duration-[.4s]"
            >
              Explore
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductReco;
