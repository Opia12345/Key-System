import React, { useEffect } from "react";
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
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //AOS SETUP
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <>
      {/* all sections */}
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
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
