import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import SingleCard from "../common/SingleCard";
import { useDispatch } from "react-redux";
import { addTocart, searchPro } from "../../SearchSlice";

const HomeReco = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
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
  const dispatch = useDispatch();
  const showProductPage = (item) => {
    navigate(`/product/${item.id}`);
  };
  const [value, setValue] = useState([]);
  // console.log(value);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  // add to card.........
  const [refresh, setRefresh] = useState(false);

  const addToCart = (item) => {
    const proDuctids = JSON.parse(localStorage.getItem("proId")) || [];
    proDuctids.push(item);
    localStorage.setItem("proId", JSON.stringify(proDuctids));
    setRefresh(!refresh);
    // console.log(JSON.parse(localStorage.getItem("proId")));
    dispatch(addTocart(item));
  };
  // navigate to shop page /
  const handleToShop = () => {
    navigate("/shop");
    dispatch(searchPro(null));
  };
  return (
    <section className="py-[88px] ">
      <div className="container ">
        <div className="reco_Row  ">
          <h2 className="flex ml-6 md:ml-0 gap-2 text-[24px] md:text-[36px] font-poppins font-semibold text-[#111827]">
            Recommendations.
            <span className="text-[#4B5563] hidden lg:inline-block text-[36px] font-poppins font-semibold">
              Best matching products for you
            </span>
          </h2>
          <div className="mt-10 ">
            <Slider {...settings}>
              {value?.slice(0, 9).map((item, index) => (
                <SingleCard
                  key={index}
                  addToCart={() => addToCart(item.id)}
                  showProductPage={() => showProductPage(item)}
                  title={item.title}
                  img={item.images[0]}
                  price={item.price}
                  category={item.category.slug}
                />
              ))}
            </Slider>
          </div>
          <div className="mt-10 flex justify-center">
            <div
              className="cursor-pointer w-[160px] px-3 rounded-md text-center  p-2 bg-cyan-600 font-poppins text-white font-semibold"
              onClick={handleToShop}
            >
              See More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReco;
