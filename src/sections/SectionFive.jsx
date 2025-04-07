import React from "react";

const SectionFive = () => {
  return (
    <section className="mt-30 flex flex-col items-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        They Trust Us
      </h1>
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-2 lg:text-xl md:text-md text-sm text-center">
        And so can you.
      </p>

      <div className="mt-8 lg:p-10 w-[70%]">
        <img src="/section_five_image.svg" alt="" />
      </div>
    </section>
  );
};

export default SectionFive;
