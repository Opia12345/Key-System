import React from "react";

const SectionOne = () => {
  return (
    <>
      <section className="sectionOne mt-30 flex flex-col items-center">
        <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
          Why we are your Trusted Consultant
        </h1>
        <p className="text-slate-400 mt-2 lg:text-xl md:text-sm text-xs text-center">
          Empowering Businesses with Cutting-edge Technology
        </p>
        <p className="text-slate-300 w-[70%] mt-8 font-semibold lg:text-3xl md:text-md text-sm text-center">
          Excellence isn’t a goal, it’s our DNA; Our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>

        <div className="relative flex flex-col items-center">
          <p className="text-slate-400 lg:text-lg p-4 md:text-sm text-xs text-center">
            Watch the video to see how we are innovating to keep businesses on
            top of their games.
          </p>
          <img
            className="w-[70%] mt-4 z-20"
            src="/section_one_image.png"
            alt=""
          />
          <img
            src="/section_one_overlay.svg"
            className="absolute bottom-0 w-full opacity-50"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default SectionOne;
