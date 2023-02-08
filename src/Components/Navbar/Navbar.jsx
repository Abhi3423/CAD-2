import React from "react";

import logo from "../../Assets/images/logo.svg";
import img from "../../Assets/images/navbar_img.svg";

const Navbar = () => {
  return (
    <div className="font-pixeboy text-white-off text-lg w-full fixed top-12 flex items-center justify-around hover:cursor-pointer z-10">
      <img src={logo} alt="CN logo" />
      <div className="h-12 w-[600px] rounded-lg drop-shadow-white bg-black bg-opacity-50 backdrop-blur-2xl backdrop-brightness-150">
        <ul className="flex flex-row justify-evenly items-center h-full w-full">
          <li className="hover:scale-110 duration-200 hover:text-gray-200">
            ABOUT
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200">
            SCHEDULE
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200">
            PRIZES
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200">
            SPONSORS
          </li>
        </ul>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Navbar;
