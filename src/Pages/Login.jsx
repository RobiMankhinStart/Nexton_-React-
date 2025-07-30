import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });
  const handleLogin = () => {
    if (!userData.email) {
      setUserData((prev) => ({ ...prev, emailError: "enter your email" }));
    }
    if (!userData.password) {
      setUserData((prev) => ({
        ...prev,
        passwordError: "enter your password",
      }));
    } else {
      console.log("done");
    }
  };
  console.log(userData);
  return (
    <>
      <section
        id="Register_Box"
        className="mt-[40px] mb-[72px] flex items-center justify-center"
      >
        <div className="w-[440px]">
          {/* -------Header-------- */}
          <div>
            <h2 className="text-[36px] font-semibold text-second text-center mb-[60px]">
              Login
            </h2>
          </div>

          {/* -------Input Box-------- */}
          <div className="flex flex-col gap-[24px]">
            {/* -----Email  */}
            <div>
              <p className="text-base font-semibold text-second">Email</p>
              <p className="text-red-600 font-poppins">{userData.emailError}</p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    email: e.target.value,
                    emailError: "",
                  }))
                }
                className="w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2"
                placeholder="example@example.com"
                type="email"
              />
            </div>
            {/* -----Password  */}
            <div>
              <p className="text-base font-semibold text-second">Password</p>
              <p className="text-red-600 font-poppins">
                {userData.passwordError}
              </p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                    passwordError: "",
                  }))
                }
                className="w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2"
                type="password"
              />
            </div>
          </div>

          {/* ------Submit Button------ */}
          <div className="mt-[24px] flex flex-col gap-[24px]">
            <button
              onClick={handleLogin}
              className="w-full bg-second rounded-full text-white py-[14px] cursor-pointer"
            >
              Continue
            </button>
            <p className="text-Primary font-medium text-[14px] text-center">
              OR
            </p>
            <div>
              <p className="text-Primary text-base font-normal text-center">
                New user?{" "}
                <Link className="text-[#0EA5E9]" to={"/Register"}>
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
