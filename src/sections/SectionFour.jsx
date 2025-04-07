import React from "react";

const SectionFour = () => {
  return (
    <section className="mt-30 flex flex-col items-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Compliance Certifications/ <br />
        Standards We Specialize In
      </h1>
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-1 lg:text-xl md:text-md text-sm text-center">
        Elevate Your Organization's Security Posture with Our
        Compliance/Standards Consulting Services.
      </p>
      <button className="header_button_1 mt-4">Contact Us</button>

      <div className="mt-8 lg:p-10 w-[70%]">
        <img src="/section_four_image.svg" alt="" />
      </div>
    </section>
  );
};

export default SectionFour;
