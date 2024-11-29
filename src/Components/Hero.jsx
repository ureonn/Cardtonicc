import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrApple } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="">
      <div className="mt-14 justify-around flex">
        <h1 className="flex items-center border gap-3 rounded-full">
          <span className="pl-2 p-2 text-[13px] text-gray-500 md:text-[15px]">
            Try our Gift Card Developer API{" "}
          </span>
          <span className="bg-blue-700 rounded-full p-2 text-white">
            <FaArrowRight />
          </span>
        </h1>
      </div>
      <div className="mt-8 px-14">
        <h1 className="text-center md:px-48 text-4xl md:leading-snug md:text-5xl text-gray-500 font-semibold">
          Explore gift cards and{" "}
          <span className="text-blue-400">digital payments solutions</span>
        </h1>
        <p className="mt-7 text-center md:text-2xl text-[18px] md:px-56 text-gray-600">
          Cardtonic is the best platform to buy and sell gift cards, pay bills,
          buy gadgets and get virtual dollar cards.
        </p>
        <div className="mt-9">
          <button className="w-full flex md:hidden items-center justify-center hover:bg-blue-400 text-white bg-blue-950 rounded-full p-7 font-medium">
            <span className="pr-2 flex justify-center items-center">
              <BiWorld size={25} />
            </span>
            Web Sign Up
          </button>
          <button className="w-full flex items-center md:hidden justify-center mt-4 hover:bg-blue-400 text-white bg-blue-300 rounded-full p-7 font-medium">
            <span className="pr-2 flex justify-center items-center">
              <span className="pr-2 text-gray-800">
                <IoLogoGooglePlaystore size={20} />
              </span>
              <span className="pr-2 text-gray-800">
                <GrApple size={20} />
              </span>
            </span>
            Download the App
          </button>
        </div>
        <div className="flex justify-around">
          <button className="md:flex items-center px-14 hidden justify-around hover:bg-blue-400 text-white bg-blue-950 rounded-full p-7 font-medium">
            <span className="pr-2 flex justify-center items-center">
              <BiWorld size={25} />
            </span>
            Web Sign Up
          </button>
        </div>
        <div className="mt-14 flex justify-around">
          <iframe
            className="rounded-3xl"
            width="1100"
            height="500"
            src="https://www.youtube.com/embed/OtLB2-Qm6KA?si=b6t5ctaCAJjEwODX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
