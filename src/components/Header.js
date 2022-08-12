import React from "react";

import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="flex  sm:flex-col md:flex-row md:justify-between mb-5 md:mb-20 lg:text-xl xl:text-2xl text-md pt-10 md:px-10 px-5 lg:items-center">
      <nav className="flex  md:flex-row mb-3">
        <div className="sm:mr-10 mr-5">
          <img src={logo} alt="gda" className="w-10 mb-3" />
        </div>
        <ul className="font-bold flex text-xs lg:text-xl xl:text-2xl md:flex-row gap-x-2 md:gap-x-7 leading-normal items-start">
          <li>
            <a href="#acceuil" className="hover:text-secondary duration-150">
              ACCUEIL
            </a>
          </li>
          <li>
            <a href="#avantages" className="hover:text-secondary">
              AVANTAGES
            </a>
          </li>
          <li>
            <a href="#ce-qu-ils-pensent" className="hover:text-secondary">
              CE QU'ILS PENSENT
            </a>
          </li>
          <li>
            <a href="#autres-services" className="hover:text-secondary">
              AUTRES SERVICES
            </a>
          </li>
        </ul>
      </nav>
      <div className="self-center">
        <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 xl:text-2xl lg:text-md hidden md:block">
          CONTACTEZ-NOUS
        </button>
      </div>
    </header>
  );
};

export default Header;
