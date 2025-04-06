import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Links from "./Links";

const Navbar = () => {
  return (
    <nav className="p-6 bg-gradient-to-r fixed w-full top-0 right-0 from-[#05071E] via-[#000080] to-[#111A89] h-[80px] flex items-center justify-around">
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
      <button className="md:hidden block text-lg">
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
    </nav>
  );
};

export default Navbar;
