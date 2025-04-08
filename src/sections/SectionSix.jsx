import React from "react";

const SectionSix = () => {
  return (
    <section
      data-aos="fade-in"
      className="mt-30 flex flex-col items-center"
      aria-label="Our Process Section"
    >
      {/* Section Heading */}
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        Our Process
      </h1>
      
      {/* Section Subheading */}
      <p className="text-slate-400 w-[70%] lg:mt-4 mt-2 lg:text-xl md:text-md text-sm text-center">
        At KeySystem, we leave you with a lasting impression.
      </p>

      {/* Grid of Process Steps */}
      <div className="lg:mt-12 grid lg:grid-cols-2 gap-4 p-10 lg:w-[90%]">
        
        {/* First Process Step: Strategic Consultation */}
        <div className="relative bg-gradient-to-r lg:col-span-2 md:col-span-2 flex justify-between items-center rounded-lg from-[#04050B] to-[#181B4D]">
          <div className="p-8">
            <h5 className="font-black lg:text-3xl text-xl">Strategic Consultation</h5>
            <p className="mt-4 lg:text-lg md:text-sm">
              We kick off with a strategic consultation to <br /> understand
              your brand, goals, and audience.
            </p>
          </div>
          <div className="absolute right-0 bottom-0">
            <img
              src="/puzzle.svg"
              className="lg:w-40 w-20 h-20 lg:h-40"
              alt="A puzzle piece representing the strategic consultation phase"
            />
          </div>
        </div>

        {/* Second Process Step: Collaboration */}
        <div className="relative bg-gradient-to-r flex justify-between items-center rounded-lg from-[#04050B] to-[#181B4D]">
          <div className="p-8">
            <h5 className="font-black lg:text-3xl text-xl">Collaboration</h5>
            <p className="mt-4 lg:text-lg md:text-sm">
              At KeySystem, we collaborate closely <br /> to ensure the end
              result <br />
              meets your expectations and <br /> makes you happy.
            </p>
          </div>
          <div className="absolute right-0 bottom-0">
            <img
              src="/handshake.svg"
              className="lg:w-40 w-20 h-20 lg:h-40"
              alt="Handshake symbolizing collaboration"
            />
          </div>
        </div>

        {/* Third Process Step: Delivery */}
        <div className="relative bg-gradient-to-r flex justify-between items-center rounded-lg from-[#04050B] to-[#181B4D]">
          <div className="p-8">
            <h5 className="font-black lg:text-3xl text-xl">Delivery</h5>
            <p className="mt-4 w-[80%] lg:text-lg md:text-sm">
              Our delivery rate is 100%; our clients deserve nothing less.
            </p>
          </div>
          <div className="absolute right-0 bottom-0">
            <img
              src="/checkboard.svg"
              className="lg:w-40 w-20 h-20 lg:h-40"
              alt="A checkboard symbolizing successful delivery"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
