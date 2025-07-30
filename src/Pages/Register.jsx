import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router";
import BreadCrumb from "../Components/common/BreadCrumb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast, Zoom } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import axios from "axios";
import { PulseLoader } from "react-spinners";

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
  // state fot submit button loading ..............
  const [buttonload, setButtonload] = useState(false);
  const navigate = useNavigate();

  // .............states for form validation ............
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [userNameErrorBorder, setUserNameErrorBorder] =
    useState("border-[#E5E7EB]");
  const [showPass, setShowPass] = useState(false);
  const [showAgainPass, setShowAgainPass] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailErrorBorder, setEmailErrorBorder] = useState("border-[#E5E7EB]");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [passErrorBorder, setPassErrorBorder] = useState("border-[#E5E7EB]");

  const [passAgain, setPassAgain] = useState("");
  const [passAgainError, setPassAgainError] = useState("");
  const [passAgainErrorBorder, setPassAgainErrorBorder] =
    useState("border-[#E5E7EB]");

  //---------------------------- PASSWORD VALIDATION
  const handleSubmit = (e) => {
    if (!userName) {
      setUserNameError("Please enter your Name");
      setUserNameErrorBorder("border-red-600");
    }
    if (!email) {
      setEmailError("Please enter your Email");
      setEmailErrorBorder("border-red-600");
    }
    if (!password) {
      setPassError("Please enter your password");
      setPassErrorBorder("border-red-600");
    }
    if (!passAgain) {
      setPassAgainError("Enter your password again");
      setPassAgainErrorBorder("border-red-600");
    } else {
      setButtonload(true),
        axios
          .post("https://api.escuelajs.co/api/v1/users/", {
            name: userName,
            email: email,
            password: password,
            avatar: "https://picsum.photos/800",
          })
          .then((res) => {
            console.log(res),
              toast.success("Registered Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              }),
              setButtonload(false),
              navigate("/Login");
          })
          .catch((err) => {
            console.log(err),
              setButtonload(false),
              toast.error("something went wrong!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
              });
          });
      // setEmail(""),
      // setUserName(""),
      // setPassword(""),
      // setPassAgain("");
    }
  };

  return (
    <section
      id="Register"
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
            {/* -----userName  */}
            <div>
              <p className="text-base font-semibold text-second">User Name</p>
              <p className="text-red-600 font-poppins">{userNameError}</p>
              <input
                onChange={(e) => {
                  setUserName(e.target.value),
                    setUserNameError(""),
                    setUserNameErrorBorder("border-[#E5E7EB]");
                }}
                className={`not-visited:w-full border  ${userNameErrorBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`}
                placeholder="name......."
                type="text"
              />
            </div>
            {/* -----Email  */}
            <div>
              <p className="text-base font-semibold text-second">Email</p>
              <p className="text-red-600 font-poppins">{emailError}</p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value),
                    setEmailErrorBorder("border-[#E5E7EB]"),
                    setEmailError("");
                }}
                className={`not-visited:w-full border  ${emailErrorBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`}
                placeholder="email....."
                type="email"
              />
            </div>
            {/* -----Password  */}
            <div className="relative">
              <p className="text-base font-semibold text-second">Password</p>
              <p className="text-red-600 font-poppins">{passError}</p>
              <input
                onChange={(e) => {
                  setPassErrorBorder("border-[#E5E7EB]"),
                    setPassword(e.target.value),
                    setPassError("");
                }}
                className={`w-full border ${passErrorBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`}
                type={showPass ? "text" : "password"}
              />
              {showPass ? (
                <FaEyeSlash
                  onClick={() => setShowPass(!showPass)}
                  className="absolute bottom-[15px] right-3"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPass(!showPass)}
                  className="absolute bottom-[15px] right-3"
                />
              )}
            </div>
            {/* -----Password again */}
            <div className="relative">
              <p className="text-base font-semibold text-second">
                Password (Again)
              </p>
              <p className="text-red-600 font-poppins">{passAgainError}</p>
              <input
                onChange={(e) => {
                  setPassAgainErrorBorder("border-[#E5E7EB]"),
                    setPassAgain(e.target.value),
                    setPassAgainError("");
                }}
                className={`w-full ${passAgainErrorBorder} border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2`}
                type={showAgainPass ? "text" : "password"}
              />
              {showAgainPass ? (
                <LuEye
                  onClick={() => setShowAgainPass(!showAgainPass)}
                  className="absolute bottom-[15px] right-3"
                />
              ) : (
                <LuEyeClosed
                  onClick={() => setShowAgainPass(!showAgainPass)}
                  className="absolute bottom-[15px] right-3"
                />
              )}
            </div>
          </div>

          {/* ------Submit Button------ */}
          <div className="mt-[24px] flex flex-col gap-[24px]">
            {buttonload ? (
              <button
                type="submit"
                className="w-full cursor-no-drop bg-second rounded-full text-white py-[14px]"
              >
                <PulseLoader color="#24ffbd" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-second rounded-full text-white py-[14px] cursor-pointer"
              >
                Continue
              </button>
            )}

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
