import React from "react";

const SectionEight = () => {
  return (
    <section
      data-aos="fade-in"
      className="relative mt-30 flex flex-col pb-20 items-center overflow-hidden"
      aria-label="Call to Action Section"
    >
      {/* Decorative Left Overlay Image */}
      <div className="absolute left-0 top-0 w-80 z-0" aria-hidden="true">
        <img
          src="/section_eight_overlay.svg"
          className="w-full h-auto"
          alt="Abstract decorative background on the left"
        />
      </div>

      {/* Main Card Container */}
      <div className="relative card_2 w-[70%] flex flex-col lg:flex-row justify-between items-center rounded-lg bg-gradient-to-r from-[#030517] to-[#181B4D] overflow-hidden z-10 p-8">
        {/* Text Section */}
        <div className="w-full lg:w-[70%] z-10">
          <h1 className="text-3xl font-black text-white">
            Ready to get started?
          </h1>
          <p className="text-slate-400 text-sm">Shoot us a Mail</p>

          {/* Description */}
          <h5 className="mt-3 text-white">
            Join numerous corporations, organizations, and businesses as they
            scale their teams, tap into new market opportunities and build
            innovative products with KeySystem Technology.
          </h5>
          <h5 className="mt-3 text-white">
            Join thousands of students who are ready to learn new skills or take
            their career to the next level by enrolling in one of our training
            programs today.
          </h5>

          {/* CTA Button */}
          <button
            className="header_button_1 mt-4"
            aria-label="Send us a mail now"
          >
            Send Us a Mail Now
          </button>
        </div>

        {/* Decorative Right Overlay Image */}
        <div
          className="absolute right-0 top-0 w-full lg:w-60 opacity-60 z-0"
          aria-hidden="true"
        >
          <img
            src="/concentric_circle.svg"
            className="w-full h-auto"
            alt="Decorative concentric circle"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
