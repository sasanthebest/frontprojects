"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="text-3xl font-bold text-[#f26a21]">Sasan</h1>
      <ul className="hidden md:flex items-center">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className={`md:hidden  `} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <AiOutlineClose
            size={20}
            className={`${isOpen && "transform duration-300"}`}
          />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={`md:hidden ease-in-out duration-700 border-r-gray-900 bg-[#000300] ${
          isOpen
            ? " fixed left-0 top-0 w-[60%] h-full border-r  "
            : "fixed left-[-100%]"
        } `}
      >
        <h1 className="text-3xl font-bold text-[#f26a21] p-4">Sasan</h1>
        <ul className="uppercase pt-6 px-2">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
