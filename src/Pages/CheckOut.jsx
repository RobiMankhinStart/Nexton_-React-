import CheckInfo from "../Components/checkOut/CheckInfo";
import CheckSummery from "../Components/checkOut/CheckSummary";
import ResponsiveCheckout from "../Components/checkOut/ResponsiveCheckout";
import BreadCrumb from "../Components/common/BreadCrumb";

const CheckOut = () => {
  // ------Hooks

  return (
    <>
      <section
        id="Checkout"
        className="container mt-[40px] border-t border-t-[#E5E7EB] pt-10"
      >
        <div className="ml-3">
          <h2 className="text-4xl lg:inline-block hidden font-semibold text-second mb-4">
            Checkout
          </h2>
          <BreadCrumb
            breadcontent={"Checkout"}
            breadlink={"/checkout/:checkout"}
          />
        </div>
        <div className="flex lg:gap-10 md:justify-center lg:justify-around items-start mt-[52px]">
          <ResponsiveCheckout />
          <CheckInfo />
          <div>
            <CheckSummery />
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
