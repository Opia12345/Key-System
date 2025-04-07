import React from "react";
import Header from "../components/Header";
import PostHeader from "../components/PostHeader";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import SectionFour from "../sections/SectionFour";
import SectionFive from "../sections/SectionFive";
import SectionSix from "../sections/SectionSix";
import SectionSeven from "../sections/SectionSeven";
import SectionEight from "../sections/SectionEight";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[#030517] text-white">
        <Header />
        <PostHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <div className="bg-gradient-to-b from-[#03020A00] via-[#020106] to-[#03020A00]">
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
        </div>
        <SectionEight />
        <Footer />
      </div>
    </>
  );
};

export default Home;
