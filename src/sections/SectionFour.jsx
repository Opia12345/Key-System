import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionFour = () => {
  return (
    <section
      data-aos="fade-up"
      className="mt-30 flex flex-col items-center"
      aria-label="Compliance and Standards Section"
    >
      {/* Section Heading */}
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Compliance Certifications/ <br />
        Standards We Specialize In
      </h1>

      {/* Section Subheading */}
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-1 lg:text-xl md:text-md text-sm text-center">
        Elevate Your Organization's Security Posture with Our
        Compliance/Standards Consulting Services.
      </p>

      {/* Contact Us Button */}
      <button
        className="header_button_1 mt-4"
        aria-label="Contact us for compliance services"
      >
        Contact Us
      </button>

      {/* Compliance Image */}
      <div className="mt-8 lg:p-10 w-[70%]">
        <LazyLoadImage
          src="/section_four_image.svg"
          effect="blur"
          alt="A collection of compliance certifications and standards"
          aria-describedby="compliance-image-description"
        />
      </div>

      {/* Hidden description for the image */}
      <p id="compliance-image-description" className="sr-only">
        A collection of compliance certifications and standards that the
        organization specializes in, ensuring high security and trust.
      </p>
    </section>
  );
};

export default SectionFour;
