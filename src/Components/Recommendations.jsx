import React, { useState } from "react";
import RecommanCard from "./common/RecommanCard";
import ricoImg from "../assets/image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

const Recommendations = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          centerMode: true,
        },
      },
    ],
  };

  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="py-[88px] ">
      <div className="container ">
        <div className="reco_Row  ">
          <h2 className="flex ml-6 md:ml-0 gap-2 text-[24px] md:text-[36px] font-poppins font-semibold text-[#111827]">
            Recommendations.
            <span className="text-[#4B5563] hidden lg:inline-block text-[36px] font-poppins font-semibold">
              {""}
              Best matching products for you
            </span>
          </h2>
          <div className="mt-10 ">
            <Slider {...settings}>
              {value.map((item, index) => (
                <div key={index} className="">
                  <RecommanCard
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    rating={item.rating.rate}
                    count={item.rating.count}
                    category={item.category}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              className=" w-[160px] px-3 rounded-md text-center  p-2 bg-cyan-600 font-poppins text-white font-semibold"
              to="/shop"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
