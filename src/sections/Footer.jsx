import React from "react";
import { services } from "../data/data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="p-10">
      <div className="grid lg:grid-cols-2 gap-4 lg:p-20">
        {/* GROUP ONE */}
        <div className="place-self-start place-content-center items-center">
          <img src="/keySystem.svg" alt="" />
          <small className="text-xs mt-2">
            &copy; 2025 KeySystem Technology Limited. All rights reserved.
          </small>
        </div>

        {/* GROUP TWO */}
        <div>
          <h1 className="font-bold text-2xl text-slate-300 mb-4">Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index}>
                <h5 className="font-light">{service.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:p-20 gap-4 mt-12 lg:-mt-12">
        {/* GROUP ONE */}
        <div>
          <h1 className="font-bold text-2xl text-slate-300 mb-4">
            QUICK LINKS
          </h1>
          <Link to="/">
            <h5 className="mb-1 font-semibold text-slate-400 hover:text-white transition-all ease-in-out duration-300">
              About Us
            </h5>
          </Link>
          <Link to="/">
            <h5 className="mb-1 font-semibold text-slate-400 hover:text-white transition-all ease-in-out duration-300">
              Sitemap
            </h5>
          </Link>
        </div>

        {/* GROUP TWO */}
        <div>
          <h1 className="font-bold col-span-2 text-2xl text-slate-300 mb-4">
            Contact
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="text-md font-bold mb-1">Nigeria</h5>
              <p>
                55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria
                Island
              </p>
            </div>

            <div>
              <h5 className="text-md font-bold mb-1">United Kingdom</h5>
              <p>
                39 Kenyon Lane, Off Moston Lane, Moston, Manchester, United
                Kingdom, M40 9JG
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:p-20 gap-4 mt-4">
        {/* EMPTY LEFT COLUMN */}
        <div></div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4">
          <div>
            <h5 className="text-md font-bold mb-1">United Kingdom</h5>
            <p>Tel: +44 161 948 1444</p>
          </div>

          <div>
            <h5 className="text-md font-bold mb-1">United Arab Emirates</h5>
            <p>Tel: +971 50 423 8817</p>
          </div>

          <div>
            <h5 className="text-md font-bold mb-1">Canada</h5>
            <p>Tel: +1 647 977 1435</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:p-20 gap-4 mt-12 lg:-mt-12">
        {/* GROUP ONE */}
        <div className="flex items-end mb-4 text-xl gap-6">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faXTwitter} className="icon" />
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </div>

        {/* GROUP TWO */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="text-md font-bold mb-1">Nigeria</h5>
              <p>Tel: +234 818 444 1404</p>
            </div>

            <div>
              <h5 className="text-md font-bold mb-1">Email</h5>
              <p>enquiries@keysystemltd.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
