import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import SingleCard from "../common/SingleCard";

const HomeReco = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10px",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
          variableWidth: false,
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
          variableWidth: false,
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

  // ...navigation to product page
  const navigate = useNavigate();

  const showProductPage = (item) => {
    navigate(`/product/${item.id}`);
  };
  const [value, setValue] = useState([]);
  console.log(value);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
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
              {value?.map((item, index) => (
                <div key={index} className="">
                  <SingleCard
                    showProductPage={() => showProductPage(item)}
                    title={item.title}
                    img={item.images[0]}
                    price={item.price}
                    category={item.category.slug}
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

export default HomeReco;
