import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrApple } from "react-icons/gr";

const Kd = () => {
  return (
    <div>
      <div className="mt-24 px-24 md:px:14">
        <h1 className="text-3xl font-bold text-gray-500">Gift Cards</h1>
        <div className="bg-sky-200 rounded-3xl px-9 pt-9 mt-8 md:flex">
          <div>
            <h1 className="text-2xl md:text-4xl font-medium text-gray-800">
              Sell Gift Cards
            </h1>
            <p className="text-xm md:text-xl mt-4 text-gray-600 mb-8">
              Instantly convert the gigt cards you don't need to cash.
            </p>
            <button className="flex md:text-[18px] items-center gap-2 text-gray-600 font-medium">
              Explore sell
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div>
            <img className="w-full" src="download-Photoroom (2).png" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-9 px-24 md:px:14">
        <div className="bg-sky-100 rounded-3xl pt-9 mt-8 md:flex">
          <div className="px-9">
            <h1 className="text-2xl md:text-4xl font-medium text-gray-800">
              Buy Gift Cards
            </h1>
            <p className="text-xm md:text-xl mt-4 text-gray-600 mb-8">
              Easily buy from our catalogue of 14,000+ local and international
              gift cards
            </p>
            <button className="flex md:text-[18px] items-center gap-2 text-gray-600 font-medium">
              Explore buy
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div>
            <img
              className="w-full rounded-xl"
              src="cards-Photoroom.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-24 md:px:14">
          <h1 className="text-3xl font-bold text-gray-500">Products</h1>
          <div className="bg-[#021651] rounded-3xl px-9 pt-9 mt-8 md:flex justify-around">
            <div className="">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Just Gadgets
              </h1>
              <p className="text-xm md:text-xl mt-4 text-gray-100 mb-8">
                Instantly convert the gigt cards you don't need to cash.
              </p>
              <button className="flex md:text-[18px] items-center gap-2 text-green-200 font-medium">
                Explore sell
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
            <div className="mt-9 flex justify-center">
              <img
                className="px-9 flex md:h-60"
                src="download-Photoroom (3).png"
                alt=""
              />
            </div>
          </div>
          <div className="md:flex gap-9 md:justify-around">
            <div className="bg-blue-100 rounded-3xl px-9 pt-9 mt-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-medium text-black">
                  Virtual Dollar Card
                </h1>
                <p className="text-xm md:text-xl mt-4 text-gray-600 mb-8">
                  Shop online and make international purchases with our virtual
                  dollar card.
                </p>
                <button className="flex md:text-[18px] items-center gap-2 text-blue-600 font-medium">
                  Explore Cards
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
              <img
                className="w-full mt-9 flex justify-items-center"
                src="download-Photoroom (1).png"
                alt=""
              />
            </div>
            <div className="bg-blue-100 rounded-3xl px-9 pt-9 mt-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-medium text-black">
                  Bill Payments
                </h1>
                <p className="text-xm md:text-xl mt-4 text-gray-600 mb-8">
                  Organise and pay all your utility bills easily and seamlessly.
                </p>
                <button className="flex md:text-[18px] items-center gap-2 text-blue-600 font-medium">
                  Explore Bills
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
              <img
                className="w-full mt-9 flex justify-items-center"
                src="download-Photoroom.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className="text-4xl px-24 font-medium text-gray-400">
          Testimonials & News
        </h1>
        <div className="md:flex md:p-0 px-24 justify-around gap-2 overflow-hidden animate-scroll-left">
          <div className="bg-gray-200 max-w-md h-[500px] rounded-3xl p-7 mt-9">
            <h1 className="text-8xl text-sky-800">"</h1>
            <p className="text-xl md:hidden text-gray-500">
              Cardtonic is fast, relaible, and doesn't delay transactions.
            </p>
            <p className="text-2xl font-medium text-gray-500 hidden md:flex">
              I was able to buy a sephora gift card within a minute. Quite
              impressive
            </p>
            <h1 className="flex justify-between mt-20 items-center">
              <span className="text-xl flex sm:hidden font-medium text-gray-700">
                @dodonmaso{" "}
              </span>
              <span className="hidden text-xl md:grid font-medium text-sky-700">
                Babalola Muiz <span className="text-[14px]">App Store</span>
              </span>
              <span>
                <img src="download-Photoroom (5).png" alt="" />
              </span>
            </h1>
          </div>
          <div className="bg-gray-200 hidden md:grid h-[500px] max-w-md rounded-3xl p-7 mt-9">
            <h1 className="text-8xl text-sky-800">"</h1>
            <p className="text-xl text-gray-500">
              I love the way their customer service responded to me.
            </p>
            <h1 className="flex justify-between mt-20 items-center">
              <span className="text-[16px] tracking-tighter grid text-sky-700 font-medium">
                Convenant Mathew <span className="text-[14px]">App Store</span>
              </span>
              <span>
                <img src="download-Photoroom (4).png" alt="" />
              </span>
            </h1>
          </div>
          <div className="bg-gray-200 h-[500px] md:grid rounded-3xl hidden max-w-full p-7 mt-9">
            <h1 className="text-8xl text-sky-800">"</h1>
            <p className="text-xl text-gray-500">
              The withdrawal was quiicker than I expected. Keep it up guys.
            </p>
            <h1 className="flex justify-between mt-20 items-center">
              <span className="text-[16px] tracking-tighter grid text-sky-700 font-medium">
                Ifeanyi Joseph<span className="text-[14px]">App Store</span>
              </span>
              <span>
                <img src="download-Photoroom (6).png" alt="" />
              </span>
            </h1>
          </div>
          <div className="bg-gray-200 h-[500px] md:grid rounded-3xl hidden max-w-full p-7 mt-9">
            <h1 className="text-8xl text-sky-800">"</h1>
            <p className="text-2xl font-medium text-gray-500">
              I highly rate this App. I recommended it to my brothers and
              friends. And they also love it.
            </p>
            <h1 className="flex justify-between mt-20 items-center">
              <span className="text-xl tracking-tighter grid text-sky-700 font-medium">
                Nuruudeen Abduralrasaq
                <span className="text-[14px]">App Store</span>
              </span>
              <span>
                <img src="download-Photoroom (7).png" alt="" />
              </span>
            </h1>
          </div>
          <div className="bg-gray-200 h-[500px] md:grid rounded-3xl hidden max-w-full p-7 mt-9">
            <h1 className="text-8xl text-sky-800">"</h1>
            <p className="text-2xl font-medium text-gray-500">
              Cardtonic is fast, relaible, and doesn't delay transactions.
            </p>
            <h1 className="flex justify-between mt-20 items-center">
              <span className="text-xl tracking-tighter grid text-sky-700 font-medium">
                Nuruudeen
                <span className="text-[14px]">App Store</span>
              </span>
              <span>
                <img src="download-Photoroom (8).png" alt="" />
              </span>
            </h1>
          </div>
        </div>
        <div className="justify-around flex-wrap gap-9 mx-24 my-24 flex">
          <span className="max-w-28">
            <img
              className=""
              src="Screenshot_28-11-2024_10625_cardtonic.com-Photoroom.png"
              alt=""
            />
          </span>
          <span className="max-w-40">
            <img src="Naija-Photoroom.png" alt="" />
          </span>
          <span>
            <img
              src="Screenshot_28-11-2024_1071_cardtonic.com-Photoroom.png"
              alt=""
            />
          </span>
          <span className="max-w-md">
            <img
              src="Screenshot_28-11-2024_10745_cardtonic.com-Photoroom.png"
              alt=""
            />
          </span>
          <span className="max-w-md">
            <img
              src="Screenshot_28-11-2024_10819_cardtonic.com-Photoroom.png"
              alt=""
            />
          </span>
        </div>
        <div className="md:flex gap-9 md:justify-around bg-gray-100">
          <div className="flex justify-center">
            <img className="w-full" src="footerImage.webp" alt="" />
          </div>
          <div className="mt-14 mx-14">
            <h1 className="text-center md:text-3xl text-2xl font-medium text-gray-800">
              Download The App
            </h1>
            <p className="text-center mt-8 text-gray-500">
              Experience the best of Cardtonic on your phone or tablet.
              Available for iOS and Android operating systems.
            </p>
            <div className="mt-9  pb-14">
              <button className="w-full flex items-center justify-center mt-4 text-white bg-black rounded-full p-7 font-medium">
                <span className="pr-1 flex justify-center items-center">
                  <span className="pr-1 text-white">
                    <GrApple size={30} />
                  </span>
                </span>
                <span className="text-[14px]">Get on iphone</span>
              </button>
              <button className="w-full flex items-center justify-center mt-4 text-white bg-green-600 rounded-full p-7 font-medium">
                <span className="pr-2 flex justify-center items-center">
                  <span className="pr-1 text-white">
                    <IoLogoGooglePlaystore size={30} />
                  </span>
                </span>
                <span className="text-[14px]">Get on Android</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kd;
