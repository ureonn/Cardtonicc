import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center m-9 gap-24">
      <div className="left md:mt- md:px-14">
        <h1 className="flex items-center">
          <img className="h-9" src="logo.jpeg" alt="" />
          <span className="text-blue-950 text-xl font-bold">Cardtonic</span>
        </h1>
        <h1 className="md:text-2xl text-[16px] mt-6 text-blue-950 font-medium">
          Create An Account.
        </h1>
        <p className="text-xs mt-2">Be sure to provide correct details.</p>
        <form action="" className="mt-6">
          <div>
            <input
              className="text-[12px] md:text-[16px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              type="name"
              placeholder="Create Username"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-[12px] md:text-[16px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-[12px] md:text-[16px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              placeholder="Select Country"
              type="country"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-[12px] md:text-[16px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              placeholder="Phone Number"
              type="number"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-[12px] md:text-[16px] bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              placeholder="Enter Password"
              type="password"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-[12px] md:text-[14px] tracking-tighter bg-gray-200 p-2 pl-4 w-full rounded-md  border focus:outline-none focus:border-blue-500"
              placeholder="Enter Referral Code (Optional)"
              type="code"
            />
          </div>
          <div className="flex justify-center text-[12px] bg-blue-950 rounded-full mt-4 text-white p-3 hover:bg-black">
            <button>Create Account</button>
          </div>
          <div className="text-[13px] mt-4 flex justify-center">
            <form action="">
              Have an account?{" "}
              <a className="underline font-mono font-medium" href="">
                Login Now
              </a>
            </form>
          </div>
        </form>
      </div>
      <div className="hidden md:flex max-w-[50%]">
        <img src="img.webp" alt="" />
      </div>
    </div>
  );
};

export default Signup;
