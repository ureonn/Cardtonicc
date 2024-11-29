import React, { useState } from "react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="nav flex justify-between px-10 p-2 shadow-lg">
        <h1 className="flex">
          <img className="h-9 md:h-12" src="logo.jpeg" alt="" />
          <span className="sm:text-xs md:text-xl items-center flex font-medium text-blue-950">
            Cardtonic
          </span>
        </h1>
        <div className={`${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex-col-row top-20 ml-4 bg-white shadow-md p-4 absolute left-0">
            <li>Gift Cards</li>
            <li>Products</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-9 text-gray-600 font-medium">
            <li>Gift Cards</li>
            <li>Products</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className="items-center gap-2 hidden md:flex">
          <span className="flex justify-center bg-gray-300 text-4xl rounded-full p-2">
            <MdOutlineQrCodeScanner size={20} />
          </span>
          <button className="flex bg-blue-950 text-gray-300 rounded-full py-2 px-4 text-[14px]">
            Get started
          </button>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden sm:flex flex items-center text-bold text-xl"
        >
          <RiMenu3Line size={29} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
