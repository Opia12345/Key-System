import React from "react";

const SectionThree = () => {
  return (
    <section className="bg-[#030517] mt-30 flex flex-col items-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-black">
        What we Represent
      </h1>
      <p className="text-slate-400 w-[70%] mt-2 lg:text-xl md:text-md text-sm text-center">
        Our relentless pursuit of excellence is the driving force behind our
        success.
      </p>
      <p className="text-slate-400 w-[70%] mt-6 lg:text-xl md:text-md text-sm text-center">
        Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
        excellence is the driving force behind our success. Excellence is our
        legacy, and we are proud to carry it forward. Watch the video to see how
        we are innovating to keep businesses on top of their games.
      </p>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 w-[80%] h-auto gap-6 lg:p-10 mt-8">
        <div className="card bg-[url('/combined.svg')] bg-center bg-cover bg-no-repeat w-full">
          <div className="flex justify-center">
            <img src="/target.svg" className="z-30 w-90 h-90" alt="Target" />
          </div>
          <div className="p-8 mt-8">
            <h5 className="text-3xl font-black">Our Vision</h5>
            <p className="text-left mt-3">
              To be the trusted partner for businesses seeking to leverage
              technology to improve decision-making, unlock new opportunities,
              and achieve transformative growth.
            </p>
          </div>
        </div>

        <div className="card bg-[url('/combined.svg')] bg-center bg-cover bg-no-repeat w-full">
          <div className="flex justify-center">
            <img
              src="/magnifying_glass.svg"
              className="z-30 w-90 h-90"
              alt="Magnifying Glass"
            />
          </div>
          <div className="p-8 mt-4">
            <h5 className="text-3xl font-black">Our Mission</h5>
            <p className="text-left mt-3">
              We bridge the gap between technology and business, delivering
              customized ICT solutions that drive efficiency, growth, and
              competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
