import React, { useState } from "react";
import { Form, Link } from "react-router";
import BreadCrumb from "../Components/common/BreadCrumb";

const Register = () => {
  // const [emailError, setEmailError] = useState("");
  // const [email, setEmail] = useState("");

  // const [pass, setPass] = useState("");
  // const [passError, setPassError] = useState("");

  // const [passAgain, setPassAgain] = useState("");
  // const [againError, setAgainError] = useState("");

  // const handleSubmit = (behave) => {
  //   behave.preventDefault();
  //   //----------------------------EMAIL VALIDATION
  //   if (!email) {
  //     setEmailError("Please enter your Email");
  //   } else if (!pass) {
  //     setPassError("Please enter your Password");
  //   } else {
  //     const upperCase = /[A-Z]/.test(pass);
  //     const lowerCase = /[a-z]/.test(pass);
  //     const digit = /[0-9]/.test(pass);
  //     const Length = pass.length >= 8;
  //     if (!upperCase) {
  //       setPassError("Password must contain at least one uppercase letter");
  //     } else if (!lowerCase) {
  //       setPassError("Password must contain at least one lowercase letter");
  //     } else if (!digit) {
  //       setPassError("Password must contain at least one digit 0-9");
  //     } else if (!Length) {
  //       setPassError("Password must be at least 8 characters");
  //     }
  //   }
  //   if (passAgain != pass) {
  //     setAgainError("Password does not match");
  //   }
  // };
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("border-[#E5E7EB]");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const [passAgain, setPassAgain] = useState("");
  const [passAgainError, setPassAgainError] = useState("");

  //---------------------------- PASSWORD VALIDATION
  const handleSubmit = (e) => {
    if (!email) {
      setEmailError("border-red-600");
    }
    if (!password) {
      setPassError("Please enter your password");
    }
    if (!passAgain) {
      setPassAgainError("Please enter your password again");
    }
    console.log(e);
  };

  return (
    <section
      id="Register_Box"
      className="mt-[40px] mb-[72px] flex items-center justify-center"
    >
      <div className="container">
        <BreadCrumb breadcontent={"Register"} breadlink={"/register"} />

        <Form onSubmit={handleSubmit} className=" w-[440px] mx-auto">
          {/* -------Header-------- */}
          <div>
            <h2 className="text-[36px] font-semibold text-second text-center mb-[60px]">
              Register
            </h2>
          </div>

          {/* -------Input Box-------- */}
          <div className="flex flex-col gap-[24px]">
            {/* -----Email  */}
            <div>
              <p className="text-base font-semibold text-second">Email</p>
              {/* <p className="text-red-600 font-poppins">{emailError}</p> */}
              <input
                onChange={(e) => {
                  setEmail(e.target.value), setEmailError("border-[#E5E7EB]");
                }}
                className={`not-visited:w-full border  ${emailError} rounded-[12px] h-[43px] px-5 outline-none mt-2`}
                placeholder="example@example.com"
                type="email"
              />
            </div>
            {/* -----Password  */}
            <div>
              <p className="text-base font-semibold text-second">Password</p>
              <p className="text-red-600 font-poppins">{passError}</p>
              <input
                onChange={(e) => {
                  setPassword(e.target.value), setPassError("");
                }}
                className="w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2"
                type="password"
              />
            </div>
            {/* -----Password again */}
            <div>
              <p className="text-base font-semibold text-second">
                Password (Again)
              </p>
              <p className="text-red-600 font-poppins">{passAgainError}</p>
              <input
                onChange={(e) => {
                  setPassAgain(e.target.value), setPassAgainError("");
                }}
                className="w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2"
                type="password"
              />
            </div>
          </div>

          {/* ------Submit Button------ */}
          <div className="mt-[24px] flex flex-col gap-[24px]">
            <button
              type="submit"
              className="w-full bg-second rounded-full text-white py-[14px] cursor-pointer"
            >
              Continue
            </button>
            <p className="text-Primary font-medium text-[14px] text-center">
              OR
            </p>
            <div>
              <p className="text-Primary text-base font-normal text-center">
                Already a member?{" "}
                <Link className="text-[#0EA5E9]" to={"/Login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Register;
