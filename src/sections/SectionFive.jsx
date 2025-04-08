import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionFive = () => {
  return (
    <section
      className="mt-30 flex flex-col items-center"
      aria-label="Trust Section"
    >
      {/* Section Heading */}
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        They Trust Us
      </h1>

      {/* Section Subheading */}
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-2 lg:text-xl md:text-md text-sm text-center">
        And so can you.
      </p>

      {/* Trust Image */}
      <div className="mt-8 lg:p-10 w-[70%]">
        <LazyLoadImage
          src="/section_five_image.svg"
          effect="blur"
          alt="A collection of logos from trusted partners"
          aria-describedby="trust-image-description"
        />
      </div>

      {/* Hidden description for the image */}
      <p id="trust-image-description" className="sr-only">
        A collection of logos from trusted companies and organizations that use
        our services.
      </p>
    </section>
  );
};

export default SectionFive;
