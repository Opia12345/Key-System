import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTwo = () => {
  return (
    <section className="mt-30 flex flex-col items-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Our Offerings
      </h1>
      <p className="text-white w-[70%] lg:mt-4 mt-1 lg:text-2xl md:text-md text-sm text-center">
        Leverage KeySystem’s cutting-edge expertise to transform your business.
        Our tailored software and cybersecurity solutions drive efficiency,
        security, and growth. We empower businesses to thrive in the digital
        age.
      </p>
      <div className="mt-6">
        <button className="header_button_1">Learn More</button>
      </div>

      <div className="mt-[70px] grid lg:grid-cols-3 text-lg md:grid-cols-3 text-center p-8 gap-6">
        {/* GROUP ONE */}
        <div className="flex flex-col items-center gap-6">
          {/* ITEM ONE */}
          <div class="bg-gradient-to-b flex flex-col items-center item_one from-[#0A3440E3] to-[#05071EA6] rounded-full p-4">
            Core banking services
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>

          {/* ITEM TWO */}
          <div class="bg-gradient-to-b item_one flex flex-col items-center from-[#0D400AE3] to-[#05071EA6] rounded-full p-4">
            Staff augmentation solutions
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>

          {/* ITEM THREE */}
          <div class="bg-gradient-to-b item_one flex flex-col items-center from-[#400A0AE3] to-[#05071EA6] rounded-full p-4">
            Business Intelligence
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>
        </div>

        {/* GROUP TWO */}
        <div className="flex lg:mt-12 md:mt-12 flex-col items-center gap-6">
          {/* ITEM ONE */}
          <div class="bg-gradient-to-b flex flex-col items-center item_one from-[#0A0E40E3] to-[#05071EA6] rounded-full p-4">
            Digital Banking & financial inclusion
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>

          {/* ITEM TWO */}
          <div class="bg-gradient-to-b item_one flex flex-col items-center from-[#40330AE3] to-[#05071EA6] rounded-full p-4">
            Internal audit solutions
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>

          {/* ITEM THREE */}
          <div class="bg-gradient-to-b item_one flex flex-col items-center from-[#3CA3BAE3] to-[#05071EA6] rounded-full p-4">
            KeySystem software testing
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>
        </div>

        {/* GROUP THREE */}
        <div className="flex flex-col items-center gap-6">
          {/* ITEM ONE */}
          <div class="bg-gradient-to-b flex flex-col items-center item_one from-[#400A3AE3] to-[#05071EA6] rounded-full p-4">
            Online/mobile lending solution
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>

          {/* ITEM TWO */}
          <div class="bg-gradient-to-b item_one flex flex-col items-center from-[#4A8C2BE3] to-[#05071EA6] rounded-full p-4">
            Data Warehouse
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>

          {/* ITEM THREE */}
          <div class="bg-gradient-to-b item_one flex flex-col items-center from-[#6012CEB8] to-[#05071EA6] rounded-full p-4">
            Cybersecurity Solutions
            <img src="/pointer.svg" className="w-[20px] mt-2" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
