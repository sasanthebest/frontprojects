import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const GetStarted = () => {
  return (
    <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="w-[100%] h-[100%] flex  flex-col items-center justify-center rounded-full bg-primary">
        <div className="flex flex-row items-center justify-center mr-3 gap-1">
          <p className="text-gradient font-poppins font-medium text[18px] leading-[23px] ">
            <span>Get</span>
          </p>
          <FiArrowUpRight size={15} />
        </div>
        <p className="text-gradient font-poppins font-medium text[18px] leading-[23px]">
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
