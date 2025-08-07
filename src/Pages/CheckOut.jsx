import CheckInfo from "../Components/checkOut/CheckInfo";
import CheckSummery from "../Components/checkOut/CheckSummary";
import BreadCrumb from "../Components/common/BreadCrumb";

const CheckOut = () => {
  // ------Hooks

  return (
    <>
      <section id="Checkout" className="container mt-[40px]">
        <div>
          <h2 className="text-4xl font-semibold text-second mb-4">Checkout</h2>
          <BreadCrumb
            breadcontent={"Checkout"}
            breadlink={"/checkout/:checkout"}
          />
        </div>
        <div className="flex justify-between items-start mt-[52px]">
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
