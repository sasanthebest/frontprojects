"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-between navbar py-2">
      <Image alt="logo" src="assets/logo.svg" width={100} height={100} />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link
            href={`project2/${nav.id}`}
            key={index}
            className={`font-pippins text-white p-3 cursor-pointer font-normal text-[16px]`}
          >
            {nav.title}
          </Link>
        ))}
      </ul>
      <div
        className="sm:hidden flex flex-1 justify-end items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <CgClose size={24} className="text-white" />
        ) : (
          <HiOutlineBars3BottomRight size={24} className="text-white" />
        )}

        <div
          className={`${isOpen ? "flex" : "hidden"} p-6 bg-black-gradient 
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
        
        `}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((nav, index) => (
              <Link
                href={`project2/${nav.id}`}
                key={index}
                className={`font-pippins text-white p-3 cursor-pointer font-normal text-[16px]`}
              >
                {nav.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
