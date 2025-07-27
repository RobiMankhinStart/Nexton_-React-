import FooterImg from "../assets/logo.png";
// -------Images
import visaImg from "../assets/visa.png";
import paypalImg from "../assets/paypal.png";
import stripeImg from "../assets/stripe.png";
import verisignImg from "../assets/verisign.png";
// -----Icons------
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-[#E5E7EB] pt-[48px] lg:pt-[60px] mt-[100px] px-[24px] lg:px-0">
      <div className="container">
        <section
          id="Footer_Row"
          className="flex items-start lg:items-center justify-between flex-col gap-[60px] lg:gap-0 lg:flex-row md:flex-row"
        >
          {/* -----First Column----- */}
          <div>
            <div className="mb-5">
              <img src={FooterImg} alt="Logo" />
            </div>
            <div className="flex  flex-col gap-[12px]">
              <Link className="flex items-center gap-2 duration-[.3s] hover:scale-[1.05]">
                <FaFacebook className="text-[20px]" fill="#4676ED" />
                <p className="text-base text-Primary font-normal">Facebook</p>
              </Link>
              <Link className="flex items-center gap-2 duration-[.3s] hover:scale-[1.05]">
                <FaYoutube
                  className="text-[20px] bg-[#DA0000] p-[3px] rounded-full"
                  fill="#ffffff"
                />
                <p className="text-base text-Primary font-normal">Youtube</p>
              </Link>
              <Link className="flex items-center gap-2 duration-[.3s] hover:scale-[1.05]">
                <FaTelegram className="text-[20px]" fill="#38B0E3" />
                <p className="text-base text-Primary font-normal">Telegram</p>
              </Link>
              <Link className="flex items-center gap-2 duration-[.3s] hover:scale-[1.05]">
                <FaTwitter
                  className="text-[20px] bg-[#5A99EC] p-[4px] rounded-full"
                  fill="#ffffff"
                />
                <p className="text-base text-Primary font-normal">Twitter</p>
              </Link>
            </div>
          </div>
          {/* -----Second Column----- */}
          <div>
            <div className="mb-5">
              <h2 className="text-base font-semibold text-second">
                Getting started
              </h2>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Release Notes
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary hover:text-second hover:scale-[1.02]"
              >
                Upgrade Guide
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Browser Support
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Dark Mode
              </Link>
            </div>
          </div>
          {/* -----Third Column----- */}
          <div>
            <div className="mb-5">
              <h2 className="text-base font-semibold text-second">Explore</h2>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Prototyping
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Design systems
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Pricing
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Security
              </Link>
            </div>
          </div>
          {/* -----Fourth Column----- */}
          <div>
            <div className="mb-5">
              <h2 className="text-base font-semibold text-second">Community</h2>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Discussion Forums
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Code of Conduct
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                Contributing
              </Link>
              <Link
                to={"/"}
                className="text-base font-normal text-Primary duration-[.3s] hover:text-second hover:scale-[1.02]"
              >
                API Reference
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div
        id="Footer_Bottom"
        className="border-t-[1px] border-[#E5E7EB] py-[36px] mt-[60px]"
      >
        <div className="container">
          <div className="flex items-center justify-center lg:justify-between flex-wrap gap-[12px] lg:flex-nowrap lg:gap-0 md:justify-between">
            <div>
              <h2 className="text-base text-Primary font-normal">
                Nexton eCommerce. © 2024
              </h2>
            </div>
            <div className="flex items-center gap-[5px]">
              <Link to={"/"}>
                <img
                  className="lg:w-full md:w-[50px] w-[40px] duration-[.3s] hover:scale-[1.07]"
                  src={visaImg}
                  alt="Icons"
                />
              </Link>
              <Link to={"/"}>
                <img
                  className="lg:w-full md:w-[50px] w-[40px] duration-[.3s] hover:scale-[1.07]"
                  src={paypalImg}
                  alt="Icons"
                />
              </Link>
              <Link to={"/"}>
                <img
                  className="lg:w-full md:w-[50px] w-[40px] duration-[.3s] hover:scale-[1.07]"
                  src={stripeImg}
                  alt="Icons"
                />
              </Link>
              <Link to={"/"}>
                <img
                  className="lg:w-full md:w-[50px] w-[40px] duration-[.3s] hover:scale-[1.07]"
                  src={verisignImg}
                  alt="Icons"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
