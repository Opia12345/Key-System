import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 100px or more
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
      className={`scroll_icon scroll_to_top ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Up arrow icon */}
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default ScrollToTop;
