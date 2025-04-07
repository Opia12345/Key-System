import React from "react";

const SectionSeven = () => {
  return (
    <section className="mt-30 flex flex-col items-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Our Partners
      </h1>
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-2 lg:text-xl md:text-md text-sm text-center">
        Creating a Synergy with global brands.
      </p>

      <div className="w-[100%] lg:mt-4 flex justify-center bg-[#050617]">
        <img src="/section_seven_image.svg" className="p-8" alt="" />
      </div>
    </section>
  );
};

export default SectionSeven;
