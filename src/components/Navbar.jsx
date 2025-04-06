import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Links from "./Links";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="/keySystem.svg"
          className="w-34 cursor-pointer"
          alt="KeySystem_Logo"
        />
      </Link>

      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex">
        <Links />
      </div>

      {/* CONTACT BUTTON */}
      <button className="navbar_button hidden lg:flex items-center gap-2">
        <FontAwesomeIcon icon={faPhone} />
        +234 818 444 1404
      </button>

      {/* HAMBURGER ICON */}
      <button
        className="lg:hidden text-white text-xl"
        onClick={() => setIsMobileOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={isMobileOpen ? faXmark : faBarsStaggered} />
      </button>

      {/* MOBILE NAVIGATION */}
      <MobileNav
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
    </nav>
  );
};

export default Navbar;
