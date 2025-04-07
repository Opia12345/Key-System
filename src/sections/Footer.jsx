import React from "react";
import { services } from "../data/data";

const Footer = () => {
  return (
    <footer className="p-10">
      <div className="flex items-start flex-wrap gap-6 justify-evenly">
        {/* GROUP ONE */}
        <div>
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
    </footer>
  );
};

export default Footer;
