import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Links from "./Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileNav = ({ isMobileOpen, setIsMobileOpen }) => {
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "auto";

    // FUNCTION TO HANDLE CLICKS OUTSIDE THE MENU
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen, setIsMobileOpen]);

  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 right-0 w-3/4 h-screen bg-[#05071E] z-10 px-6 py-10 flex flex-col gap-6 text-white shadow-lg"
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-900"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>

            <Links mobile />
            <div className="mt-auto">
              <button className="mobile_nav_button">
                <FontAwesomeIcon icon={faPhone} />
                +234 818 444 1404
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
