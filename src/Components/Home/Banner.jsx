import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerbgOne from "../../assets/hero-bg.png";
import BannerbgTwo from "../../assets/banner-container.png";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: (dots) => (
      <div className="absolute bottom-6 w-full flex justify-start md:justify-center p-0 m-0">
        <ul className="flex m-0 p-0 items-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-white mx-1.5 transition-all duration-300" />
    ),
  };

  const bannerImages = [BannerbgOne, BannerbgTwo];

  return (
    <div className="relative">
      <Slider {...settings}>
        {bannerImages.map((bg, index) => (
          <div key={index} className="relative">
            <section
              style={{ backgroundImage: `url(${bg})` }}
              className="h-screen bg-no-repeat bg-cover bg-left md:bg-center px-6 lg:py-[148px] pt-40 pb-[199px] lg:pl-[120px] lg:pr-[784px]"
            >
              <div className="container flex flex-col">
                <h2 className="text-primary font-poppins text-sm lg:text-xl font-medium">
                  Starting from: $49.99
                </h2>
                <h1 className="lg:py-6 pt-2 pb-10 font-poppins text-3xl lg:text-[64px] lg:w-[632px] w-[312px] font-semibold">
                  Exclusive collection for everyone
                </h1>
                <Link
                  className="px-9 py-5 gap-2 w-[198px] rounded-[40px] flex bg-[#111827] font-poppins text-base font-medium text-white justify-center items-center"
                  to="/"
                >
                  Explore now
                  <RiSearch2Line className="size-5" />
                </Link>
              </div>
            </section>
          </div>
        ))}
      </Slider>
      <style>{`
        .slick-dots li.slick-active div {
          background-color: black !important;
          border-color: black !important;
          transform: scale(1.1);
        }
        .slick-dots li div:hover {
          opacity: 0.8;
        }
        .slick-slide {
          transition: opacity 500ms ease !important;
        }
        .slick-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
