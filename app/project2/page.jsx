import React from "react";
import Hero from "./components/Hero";

const page = () => {
  return (
    <>
      <div className=" items-start justify-center">
        <div className="w-full xl:max-w-[1280px] text-white">
          <Hero />
        </div>
      </div>

      <div className="sm:px-16 p-6 items-start justify-center">
        <div className="w-full xl:max-w-[1280px] text-white">
          Stats Business Billing CardDeal Testimonials Clients CTA
        </div>
      </div>
    </>
  );
};

export default page;
