import React from "react";

const PostHeader = () => {
  return (
    <>
      <div className="relative lg:-mt-12 -mt-[100px] flex justify-center items-center">
        <img src="/stroke.svg" className="absolute right-0" alt="" />
        <h5 className="absolute left-0 top-20">3</h5>
        <img src="/header_image.png" className="w-[70%] z-20" alt="" />
      </div>

      <div className="mt-4 flex justify-center">
        <img src="/companies.svg" alt="" />
      </div>
    </>
  );
};

export default PostHeader;
