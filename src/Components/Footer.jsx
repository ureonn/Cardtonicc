import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid">
      <div className="grid mx-24 md:hidden">
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Features </span>
          <span>
            <FaPlus />
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Products </span>
          <span>
            <FaPlus />
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Available Gift Cards</span>
          <span>
            <FaPlus />
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Resources</span>
          <span>
            <FaPlus />
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Company</span>
          <span>
            <FaPlus />
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Connect</span>
          <span>
            <FaPlus />
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-14 text-md font-medium text-gray-700">
          <span>Social</span>
          <span>
            <FaPlus />
          </span>
        </div>
      </div>
      <div className="hidden md:flex justify-around my-14">
        <div className="space-y-7">
          <h1 className="text-[17px] font-medium text-gray-600">Features</h1>
          <ul className="text-[14px] text-gray-400 space-y-4">
            <li>
              <a href="">Buy Gift Cards</a>
            </li>
            <li>
              <a href="">Sell Gift Cards</a>
            </li>
            <li>
              <a href="">Just Gadgets</a>
            </li>
            <li>
              <a href="">Dollar Cards</a>
            </li>
            <li>
              <a href="">Bill Payments</a>
            </li>
            <li>
              <a href="">Bank Accounts</a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="text-[17px] font-medium text-gray-600">Products</h1>
          <ul className="text-[14px] text-gray-400 space-y-4">
            <li>
              <a href="">Airtime</a>
            </li>
            <li>
              <a href="">Data</a>
            </li>
            <li>
              <a href="">Electricity</a>
            </li>
            <li>
              <a href="">TV Subscription</a>
            </li>
            <li>
              <a href="">Apple</a>
            </li>
            <li>
              <a href="">Samsung</a>
            </li>
            <li>
              <a href="">Laptop</a>
            </li>
            <li>
              <a href="">Playstation</a>
            </li>
            <li>
              <a href="">Betting</a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="text-[17px] font-medium text-gray-600">
            Available Gift Cards
          </h1>
          <ul className="text-[14px] text-gray-400 space-y-4">
            <li>
              <a href="">Travel Gift Cards</a>
            </li>
            <li>
              <a href="">Lifestyle Gift Cards</a>
            </li>
            <li>
              <a href="">Music Gift Cards</a>
            </li>
            <li>
              <a href="">Supermarket Gift Cards</a>
            </li>
            <li>
              <a href="">Gaming Gift Cards</a>
            </li>
            <li>
              <a href="">Streaming Gift Cards</a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="text-[17px] font-medium text-gray-600">Resources</h1>
          <ul className="text-[14px] text-gray-400 space-y-4">
            <li>
              <a href="">Ghanaians</a>
            </li>
            <li>
              <a href="">Blogoooooo</a>
            </li>
            <li>
              <a href="">Rewards</a>
            </li>
            <li>
              <a href="">Gift Cards Rate</a>
            </li>
            <li>
              <a href="">Developer API</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="text-[17px] font-medium text-gray-600">Company</h1>
          <ul className="text-[14px] text-gray-400 space-y-4">
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">#CTGivesBack</a>
            </li>
            <li>
              <a href="">Upskill</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="text-[17px] font-medium text-gray-600">Connect</h1>
          <ul className="text-[14px] text-gray-400 space-y-4">
            <li>
              <a href="">Get In Touch</a>
            </li>
            <li>
              <a href="">support@cardtonic.com</a>
            </li>
            <li>
              <a href="">+234(0)13430619</a>
            </li>
            <li>
              <a href="">+234(0)13430619</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex justify-around bg-gray-100 p-12">
        <div className="text-[14px] font-medium items-center gap-1 text-gray-400 justify-center md:text-xl flex">
          <span>
            <FaRegCopyright />
          </span>
          Cardtonic 2024
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-9">
            <li>
              <a href="">X</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">WhatsApp</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Threads</a>
            </li>
            <li>
              <a href="">Tiktok</a>
            </li>
            <li>
              <a href="">LinkdIn</a>
            </li>
            <li>
              <a href="">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
