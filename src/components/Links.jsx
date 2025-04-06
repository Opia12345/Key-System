import React, { useState } from "react";
import { navbar_links } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Links = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleMouseEnter = () => setIsServicesOpen(true);
  const handleMouseLeave = () => setIsServicesOpen(false);
  return (
    <div className="flex items-center gap-4">
      {navbar_links.map((link, index) => {
        {
          /* START THE DROPDOWN */
        }
        if (link.label === "Services") {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="lg:flex items-center hidden gap-2 cursor-pointer text-slate-400 hover:text-white">
                <h5
                  className={`${
                    location.pathname === link.url ? "font-bold text-white" : ""
                  }`}
                >
                  {link.label}
                </h5>
                <FontAwesomeIcon
                  className="text-[13px] text-slate-400"
                  icon={faChevronDown}
                />
              </span>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-[120%] left-0 w-40 bg-white rounded-md shadow-lg p-3 z-10"
                  >
                    {link.dropdown?.map((item, index) => (
                      <Link
                        key={index}
                        to={item.url}
                        className="block py-1 px-2 text-gray-700 hover:bg-gray-100 rounded"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        // END THE DROPDOWN

        {
          /* ALL LINKS */
        }
        return (
          <Link key={index} to={link.url}>
            <span className="lg:flex hidden items-center gap-2">
              <h5
                className={`text-slate-400 hover:text-white ${
                  location.pathname === link.url ? "font-bold text-white" : ""
                }`}
              >
                {link.label}
              </h5>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
