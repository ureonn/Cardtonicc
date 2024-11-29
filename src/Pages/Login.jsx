import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center m-9 gap-24">
      <div className="left md:px-14">
        <h1 className="flex items-center md:mb-32">
          <img className="h-9" src="logo.jpeg" alt="" />
          <span className="text-blue-950 text-xl font-bold">Cardtonic</span>
        </h1>
        <h1 className="md:text-2xl text-[16px] mt-6 text-blue-950 font-medium">
          Login With Email.
        </h1>
        <p className="text-xs mt-2">
          Please enter email and password to login to you account.
        </p>
        <form action="" className="mt-6">
          <div>
            <input
              className="text-[14px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-[14px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mt-3 pl-4">
            <label htmlFor="">
              <a className="text-[14px] underline text-blue-600" href="">
                Forgot Password?
              </a>
            </label>
          </div>
          <div className="mt-24">
            <label
              className="text-[14px] font-mono flex justify-center items-center"
              htmlFor=""
            >
              Not yet a user?
              <a
                className="text-[14px] underline font-mono text-blue-600"
                href=""
              >
                {" "}
                Create Account
              </a>
            </label>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-gray-500 text-white text-[13px]  hover:bg-black w-full rounded-full p-3">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex w-full max-w-[50%] md:mb-14">
        <img src="img.webp" alt="" />
      </div>
    </div>
  );
};

export default Login;
