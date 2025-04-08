import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PostHeader = () => {
  return (
    <>
      <div
        className="relative lg:-mt-12 -mt-[100px] flex justify-center items-center"
        aria-label="Post header section"
      >
        {/* Decorative Stroke Image */}
        <img
          src="/stroke.svg"
          className="absolute top-10 right-0"
          alt="Decorative stroke design at the top right"
          loading="lazy"
        />
        
        {/* Post Number */}
        <h5 className="absolute left-0 top-20">3</h5>
        
        {/* Header Image with Lazy Loading */}
        <LazyLoadImage
          src="/header_image.png"
          alt="Illustration of business or technology header graphic"
          effect="blur"
          wrapperClassName="w-[70%] z-20"
          className="w-full"
        />
      </div>

      <div className="mt-4 flex justify-center">
        {/* Companies Image */}
        <LazyLoadImage
          src="/companies.svg"
          effect="blur"
          alt="Illustration representing various companies"
        />
      </div>
    </>
  );
};

export default PostHeader;
