import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTwo = () => {
  return (
    <section
      data-aos="fade-down"
      className="mt-30 flex flex-col items-center"
      aria-label="Our Offerings Section"
    >
      {/* Section Heading */}
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Our Offerings
      </h1>

      {/* Section Description */}
      <p className="text-white w-[70%] lg:mt-4 mt-1 lg:text-2xl md:text-md text-sm text-center">
        Leverage KeySystem’s cutting-edge expertise to transform your business.
        Our tailored software and cybersecurity solutions drive efficiency,
        security, and growth. We empower businesses to thrive in the digital
        age.
      </p>

      {/* Learn More Button */}
      <div className="mt-6">
        <button className="header_button_1">Learn More</button>
      </div>

      {/* Offerings Grid */}
      <div
        className="mt-[70px] grid lg:grid-cols-3 text-lg md:grid-cols-3 text-center p-8 gap-6"
        aria-label="Offerings Group"
      >
        {/* GROUP ONE */}
        <div
          className="flex flex-col items-center gap-6"
          aria-labelledby="group-one"
        >
          {/* ITEM ONE */}
          <div
            className="bg-gradient-to-b flex flex-col items-center item_one from-[#0A3440E3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="core-banking"
          >
            Core banking services
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating core banking services"
              aria-describedby="core-banking-description"
            />
          </div>

          {/* ITEM TWO */}
          <div
            className="bg-gradient-to-b item_one flex flex-col items-center from-[#0D400AE3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="staff-augmentation"
          >
            Staff augmentation solutions
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating staff augmentation solutions"
              aria-describedby="staff-augmentation-description"
            />
          </div>

          {/* ITEM THREE */}
          <div
            className="bg-gradient-to-b item_one flex flex-col items-center from-[#400A0AE3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="business-intelligence"
          >
            Business Intelligence
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating business intelligence"
              aria-describedby="business-intelligence-description"
            />
          </div>
        </div>

        {/* GROUP TWO */}
        <div
          className="flex lg:mt-12 md:mt-12 flex-col items-center gap-6"
          aria-labelledby="group-two"
        >
          {/* ITEM ONE */}
          <div
            className="bg-gradient-to-b flex flex-col items-center item_one from-[#0A0E40E3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="digital-banking"
          >
            Digital Banking & financial inclusion
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating digital banking and financial inclusion"
              aria-describedby="digital-banking-description"
            />
          </div>

          {/* ITEM TWO */}
          <div
            className="bg-gradient-to-b item_one flex flex-col items-center from-[#40330AE3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="internal-audit"
          >
            Internal audit solutions
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating internal audit solutions"
              aria-describedby="internal-audit-description"
            />
          </div>

          {/* ITEM THREE */}
          <div
            className="bg-gradient-to-b item_one flex flex-col items-center from-[#3CA3BAE3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="software-testing"
          >
            KeySystem software testing
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating software testing"
              aria-describedby="software-testing-description"
            />
          </div>
        </div>

        {/* GROUP THREE */}
        <div
          className="flex flex-col items-center gap-6"
          aria-labelledby="group-three"
        >
          {/* ITEM ONE */}
          <div
            className="bg-gradient-to-b flex flex-col items-center item_one from-[#400A3AE3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="online-lending"
          >
            Online/mobile lending solution
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating online/mobile lending solution"
              aria-describedby="online-lending-description"
            />
          </div>

          {/* ITEM TWO */}
          <div
            className="bg-gradient-to-b item_one flex flex-col items-center from-[#4A8C2BE3] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="data-warehouse"
          >
            Data Warehouse
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating data warehouse"
              aria-describedby="data-warehouse-description"
            />
          </div>

          {/* ITEM THREE */}
          <div
            className="bg-gradient-to-b item_one flex flex-col items-center from-[#6012CEB8] to-[#05071EA6] rounded-full p-4"
            aria-labelledby="cybersecurity"
          >
            Cybersecurity Solutions
            <img
              src="/pointer.svg"
              className="w-[20px] mt-2"
              alt="Pointer icon indicating cybersecurity solutions"
              aria-describedby="cybersecurity-description"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
