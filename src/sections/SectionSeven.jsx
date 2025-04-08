import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionSeven = () => {
  return (
    <section
      className="mt-30 flex flex-col items-center"
      aria-label="Our Partners Section"
    >
      {/* Section Heading */}
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Our Partners
      </h1>

      {/* Section Subheading */}
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-2 lg:text-xl md:text-md text-sm text-center">
        Creating a Synergy with global brands.
      </p>

      {/* Partner Logos or Banner Image */}
      <div className="w-[100%] lg:mt-4 flex justify-center bg-[#050617]">
        <LazyLoadImage
          src="/section_seven_image.svg"
          effect="blur"
          wrapperClassName="p-8"
          className="w-full"
          alt="Logos of KeySystem's global partners"
        />
      </div>
    </section>
  );
};

export default SectionSeven;
