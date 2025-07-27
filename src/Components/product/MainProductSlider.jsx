import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainProductSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="p-4 text-gray-500">No images available</div>;
  }

  // Thumbnail slider settings
  //   const thumbnailSettings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: Math.min(4, images.length),
  //     slidesToScroll: 1,
  //     focusOnSelect: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: Math.min(3, images.length),
  //         },
  //       },
  //       {
  //         breakpoint: 640,
  //         settings: {
  //           slidesToShow: Math.min(2, images.length),
  //         },
  //       },
  //     ],
  //   };

  return (
    <div className="flex justify-between items-center w-[804px]">
      {/* Thumbnail Slider */}
      {/* <div className=" flex-col px-2">
        <Slider {...thumbnailSettings}>
          {images.map((image, index) => (
            <div
              key={`thumb-${index}`}
              className="px-1 outline-none cursor-pointer"
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-20 object-cover border transition-colors ${
                  index === currentImageIndex
                    ? "border-blue-500 border-2"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div> */}

      {/* Thumbnails Column - Left Side */}
      <div className="  flex items-start gap-10 flex-col">
        {images.map((image, index) => (
          <div
            key={`thumb-${index}`}
            className={`max-w-[150px] rounded-lg  cursor-pointer border-2 transition-all ${
              index === currentImageIndex
                ? "border-blue-500 scale-105"
                : "border-transparent hover:border-gray-300"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full rounded-md object-cover"
            />
          </div>
        ))}
      </div>
      {/* Main Image Display */}
      <div className="w-[640px] ">
        <img
          src={images[currentImageIndex]}
          alt={`Product view ${currentImageIndex + 1}`}
          className="w-full rounded-xl h-auto max-h-[650px] object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default MainProductSlider;

// import React, { Component } from "react";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";

// const MainProductSlider = ({ images }) => {
//   // Returning null if no images are provided
//   if (!images || images.length === 0) {
//     return <div>No images available</div>;
//   }
//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <img src={`${images[i]}/abstract0${i + 1}.jpg`} />
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div>
//       {" "}
//       <div className="slider-container">
//         <Slider {...settings}>
//           {images?.map((image, i) => (
//             <div key={i}>
//               <img src={image + "/abstract01.jpg"} className="w-full" />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default MainProductSlider;
