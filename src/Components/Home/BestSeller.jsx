import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import SingleCard from "../common/SingleCard";

const BestSeller = () => {
  // -----------Api
  const [products, setProducts] = useState([]);
  const MyNavigate = useNavigate();

  const showProductPage = (ProductDetails) => {
    MyNavigate(`/product/${ProductDetails}`);
  };

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ----------Slider
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  // --------Local Storage
  const addToCart = (ProItems) => {
    const proDuctids = JSON.parse(localStorage.getItem("proId")) || [];
    proDuctids?.push(ProItems);

    localStorage.setItem("proId", JSON.stringify(proDuctids));
  };
  return (
    <section id="Recommend" className="mt-[88px] ml-[24px] pb-[70px] lg:ml-0">
      <div className="container">
        <div className="flex lg:items-center justify-between flex-col gap-2 lg:gap-0 lg:flex-row">
          <div className="text-2xl lg:text-4xl font-semibold text-second">
            Best Sellers.{" "}
            <span className=" text-[#4B5563] hidden lg:inline-block">
              Best selling of the month
            </span>
          </div>
        </div>

        <div className="slider-container flex">
          <Slider {...settings}>
            {products?.slice(0, 9).map((item) => (
              <SingleCard
                addToCart={() => addToCart(item.id)}
                showProductPage={() => showProductPage(item.id)}
                title={item.title}
                img={item.images[0]}
                price={item.price}
                category={item.category.slug}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
