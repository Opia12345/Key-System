import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header data-aos="fade-in" className="relative h-screen overflow-hidden">
      {/* Image Oveerlay */}
      <div className="absolute right-0">
        <img src="/image.png" alt="light overlay for decoration" className="" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Header Content */}
      <div className="flex text-center p-4 flex-col items-center z-10 relative justify-center h-full">
        <span className="bg-[#2E6D9C] lg:text-lg md:text-lg text-xs font-light px-4 py-2 rounded-full border">
          Welcome to KeySystem
        </span>
        <div>
          <h1 className="lg:text-8xl md:text-7xl text-4xl font-black mt-4">
            IT Consulting for <br /> Forward-thinking <br /> Businesses
          </h1>
          <h5 className="mt-4 md:text-xl lg:text-3xl text-xs">
            Driving Digital Transformation, One Solution at a Time.
          </h5>
        </div>
        <div className="flex mt-8 items-center gap-3">
          <button className="header_button_1">Get Started</button>
          <button className="header_button_2">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
