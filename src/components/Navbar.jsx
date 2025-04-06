import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Links from "./Links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/keySystem.svg" className="w-34 cursor-pointer" alt="Logo" />
      </Link>

      {/* START THE LINKS COMPONENT WITH THE DROPDOWN */}
      <Links />

      {/* CONTACT BUTTON */}
      <button className="navbar_button">
        <FontAwesomeIcon icon={faPhone} />
        +234 818 444 1404
      </button>

      {/* RESPONSIVE BUTTON */}
      <button className="lg:hidden block text-lg">
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
    </nav>
  );
};

export default Navbar;
