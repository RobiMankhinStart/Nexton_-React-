import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreCard from "./common/ExploreCard";

const Explore = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: false,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
          // centerPadding: "100px",
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="py-[88px]">
      <div className="container  ">
        <div className="explore_row  ">
          <h2 className="mb-10 lg:inline-block hidden text-[#111827] font-poppins font-semibold text-[36px]">
            Start exploring.
            <span className="text-[#4B5563]">
              Good things are waiting for you
            </span>
          </h2>
          <h2 className="lg:hidden ml-6 mb-6 inline-block text-[#111827] font-poppins font-semibold text-[24px]">
            Start exploring.
          </h2>
          <div className="mt-10 px-4">
            <Slider {...settings}>
              <div className="px-3">
                {" "}
                {/* Increased padding */}
                <ExploreCard name={"For Men's"} detail={"Starting at $24"} />
              </div>
              <div className="px-3">
                <ExploreCard name={"For Women's"} detail={"Starting at $19"} />
              </div>
              <div className="px-3">
                <ExploreCard
                  name={"Accessories"}
                  detail={"Explore accessories"}
                />
              </div>
              <div className="px-3">
                <ExploreCard name={"For Men's"} detail={"Starting at $24"} />
              </div>
              <div className="px-3">
                <ExploreCard name={"For Women's"} detail={"Starting at $19"} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
// {/* <style jsx global>{`
//         /* Adding gap between slides */
//         .slick-slide {
//           padding: 0 10px; /* Adjust this value for spacing */
//           box-sizing: border-box;
//         }
//         /* Removing default slick margin */
//         .slick-list {
//           margin: 0 -10px; /* Negative margin to compensate for padding */
//           overflow: hidden;
//         }
//         /* Center the slider */
//         .slick-track {
//           display: flex;
//           align-items: center;
//         }
//       `}</style> */}
