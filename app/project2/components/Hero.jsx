import React from "react";
import Image from "next/image";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col  px-6 sm:px-16 xl:px-0">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image
            alt="discount"
            src="/assets/Discount.svg"
            width={32}
            height={32}
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
            <span className="text-white">20% </span> Discount For {"  "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[42px] ss:text-[62px] leading-[75px] ss:leading-[100px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>

        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[470px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est repellat
          laborum tenetur, nostrum iure ab quos dolorum voluptates quidem ea
          animi. Fuga necessitatibus ea doloremque? Tempore itaque hic aliquid
          praesentium!
        </p>
      </div>

      <div id="robot ">
        <Image
          alt="billing"
          src="/assets/robot.png"
          width={200}
          height={200}
          className="w-[100%] h-[100%] relative z-[5] mt-4"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pblue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
