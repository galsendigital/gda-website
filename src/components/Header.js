import React from "react";

import logo from "../assets/Logo.png";

import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between md:px-10 px-5 py-8">
      <a href="/" className="">
        <img src={logo} alt="gda" className="w-10" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-1 w-8 animate-pulse bg-primary"></span>
            <span className="block h-1 w-8 animate-pulse bg-primary"></span>
            <span className="block h-1 w-8 animate-pulse bg-primary"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col  items-center justify-between font-bold text-xl min-h-[250px] uppercase">
              <li>
                <a
                  href="#accueil"
                  className="hover:text-secondary duration-150"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#avantage"
                  className="hover:text-secondary duration-150"
                >
                  Avantages
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-secondary duration-150">
                  Ce qu'ils pensent
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-secondary duration-150"
                >
                  Autres services
                </a>
              </li>
            </ul>
          </div>
          <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 lg:text-md hidden lg:block">
            CONTACTEZ-NOUS{" "}
          </button>{" "}
        </section>

        <div className="flex space-x-10">
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center uppercase text-xl font-bold">
            <li>
              <a href="#accueil" className="hover:text-secondary duration-150">
                Accueil
              </a>
            </li>
            <li>
              <a href="#avantage" className="hover:text-secondary duration-150">
                Avantages
              </a>
            </li>
            <li>
              <a href="#avis" className="hover:text-secondary duration-150">
                Ce qu'ils pensent
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary duration-150">
                Autres services
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 lg:text-md hidden lg:block">
        CONTACTEZ-NOUS{" "}
      </button>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 70vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

// const Header = () => {
//   return (
//     <header className="flex">
//       <nav className="flex items-center md:flex-row mb-3 outline">
//         <div className="sm:mr-10 mr-5 flex self-end">
//           <img src={logo} alt="gda" className="w-10 mb-3" />
//         </div>
//         <ul className="font-bold flex text-xs lg:text-xl xl:text-2xl md:flex-row gap-x-2 md:gap-x-7 leading-normal items-start">
//           <li>
//             <a href="#acceuil" className="hover:text-secondary duration-150">
//               ACCUEIL
//             </a>
//           </li>
//           <li>
//             <a href="#avantages" className="hover:text-secondary">
//               AVANTAGES
//             </a>
//           </li>
//           <li>
//             <a href="#ce-qu-ils-pensent" className="hover:text-secondary">
//               CE QU'ILS PENSENT
//             </a>
//           </li>
//           <li>
//             <a href="#autres-services" className="hover:text-secondary">
//               AUTRES SERVICES
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <div className="self-center">
//         <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 xl:text-2xl lg:text-md hidden md:block">
//           CONTACTEZ-NOUS
//         </button>
//       </div>
//     </header>
//   );
// };

export default Header;
