import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionOne = () => {
  return (
    <>
      <section
        data-aos="fade-down"
        className="sectionOne lg:mt-30 mt-15 flex flex-col items-center"
        aria-label="Why we are your Trusted Consultant Section"
      >
        {/* Section Heading */}
        <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
          Why we are your Trusted Consultant
        </h1>

        {/* Section Subtitle */}
        <p className="text-slate-400 lg:mt-4 mt-1 lg:text-xl md:text-sm text-xs text-center">
          Empowering Businesses with Cutting-edge Technology
        </p>

        {/* Section Description */}
        <p className="text-slate-300 w-[70%] mt-8 font-semibold lg:text-3xl md:text-md text-sm text-center">
          Excellence isn’t a goal, it’s our DNA; Our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>

        {/* Call to action */}
        <div className="relative flex flex-col items-center">
          <p className="text-slate-400 lg:text-lg p-4 md:text-sm text-xs text-center">
            Watch the video to see how we are innovating to keep businesses on
            top of their games.
          </p>

          {/* Lazy-loaded Image */}
          <LazyLoadImage
            wrapperClassName="w-[70%] mt-4 z-20"
            className="w-full"
            src="/section_one_image.png"
            alt="A diverse group of company clients in a meeting, discussing business growth"
            effect="blur"
            aria-describedby="image-description"
          />

          {/* Overlay Image */}
          <img
            src="/section_one_overlay.svg"
            className="absolute bottom-0 w-full opacity-50"
            alt="Overlay design for visual effect"
          />
        </div>
      </section>
    </>
  );
};

export default SectionOne;
