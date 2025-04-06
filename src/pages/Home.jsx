import React from "react";
import Header from "../components/Header";
import PostHeader from "../components/PostHeader";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";

const Home = () => {
  return (
    <>
      <div className="bg-[#030517] text-white">
        <Header />
        <PostHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
};

export default Home;
