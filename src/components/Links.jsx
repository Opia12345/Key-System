import React, { useState } from "react";
import { navbar_links } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Links = ({ mobile = false }) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen((prev) => !prev);
  const handleMouseEnter = () => !mobile && setIsServicesOpen(true);
  const handleMouseLeave = () => !mobile && setIsServicesOpen(false);

  return (
    <div className={`flex ${mobile ? "flex-col gap-6" : "gap-4 items-center"}`}>
      {navbar_links.map((link, index) => {
        const isActive = location.pathname === link.url;

        if (link.label === "Services") {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  mobile ? "text-slate-400" : "text-slate-400 hover:text-white"
                }`}
                onClick={mobile ? toggleServices : undefined}
              >
                <h5 className={`${isActive ? "font-bold text-white" : ""}`}>
                  {link.label}
                </h5>
                <FontAwesomeIcon className="text-[13px]" icon={faChevronDown} />
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`${
                      mobile
                        ? "mt-2 pl-4 flex flex-col gap-2"
                        : "absolute top-[120%] left-0 w-40 bg-white rounded-md shadow-lg p-3 z-10"
                    }`}
                  >
                    {link.dropdown?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.url}
                        className={`${
                          mobile
                            ? "text-white text-sm"
                            : "block py-1 px-2 text-gray-700 hover:bg-gray-100 rounded"
                        }`}
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

        // Normal links
        return (
          <Link key={index} to={link.url}>
            <span
              className={`${
                mobile
                  ? "text-md text-slate-400"
                  : "lg:flex hidden items-center gap-2 text-slate-400 hover:text-white"
              }`}
            >
              <h5 className={isActive ? "font-bold text-white" : ""}>
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
