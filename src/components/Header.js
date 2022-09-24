import React from "react";

import logo from "../assets/logo-gda.svg";
//import wave from "../assets/wave.svg";
import ordinateur from "../assets/ordinateur.png";
import homme from "../assets/homme.png";
import femme from "../assets/femme.png";
import "./../css/general.css";

import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section>
      <div className="flex w-full z-10 mx-auto fixed top-0 bg-background">
        <div className="flex justify-between items-center w-11/12 xl:w-4/5  mx-auto py-1 px-2 sm: px-0">
          <nav className="DESKTOP-MENU flex space-x-10 ">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <ul className="hidden space-x-8 lg:flex items-center uppercase text-xl font-bold 2xl:text-2xl">
              <li>
                <a href="#accueil" className="links">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#avantages" className="links">
                  Avantages
                </a>
              </li>
              <li>
                <a href="#avis" className="links">
                  Ce qu'ils pensent
                </a>
              </li>
              <li>
                <a href="#services" className="links">
                  Autres services
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <button
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=221785395220&text=Bonjour%20GDA,%20",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-primary text-white font-bold px-5 py-3 rounded-xl transform hover:scale-105 hover:bg-secondary  duration-500 lg:text-md hidden lg:block 2xl:text-2xl"
            >
              CONTACTEZ-NOUS{" "}
            </button>
          </div>
        </div>
        <nav
          className={`${isNavOpen
            ? "activeNav flex items-center sm:justify-center lg:hidden fixed -right-0 px-10  top-0 w-[100vw]  z-10  bg-primary h-[100vh]  uppercase font-bold translate-x-0 opacity-1 duration-700"
            : "disableNav flex items-center sm:justify-center lg:hidden fixed  top-0 -right-96 w-[100vw] bg-background h-[100vh] uppercase font-bold translate-x-full opacity-0 duration-700"
            }`}
        >
          <div
            className="absolute top-3 right-[2%]"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-12 w-12 text-background mr-3 cursor-pointer"
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

          <ul className="space-y-10 text-xl text-background text-center flex flex-col   w-full ">
            <li>
              <a
                href="#accueil"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#avantages"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Avantages
              </a>
            </li>
            <li>
              <a
                href="#avis"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Ce qu'ils pensent
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Autres services
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="flex flex-col space-y-1.5 lg:hidden self-center relative right-[5%] cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-1 w-8 bg-primary"></span>
          <span className="block h-1 w-8 bg-primary"></span>
          <span className="block h-1 w-8 bg-primary"></span>
        </div>
      </div>

      <div id="hero-section" className="bg-no-repeat bg-cover md:bg-center w-full">
        <div className="w-full hero-bg">
          <svg className="w-full" viewBox="0 0 1440 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g >
              <path d="M0 391V163.5C75 176.5 196.428 350.084 488 298C638.5 271.116 743 217.5 885.5 63.9999C1031.13 -92.8689 1339.5 134.5 1440 134.5V391H0Z" fill="url(#paint0_linear_178_406)" />
            </g>
            <defs>
              <filter id="filter0_d_178_406" x="-4" y="0.807617" width="1448" height="390.193" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_178_406" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_178_406" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_178_406" x1="719.75" y1="-264.552" x2="719.75" y2="391" gradientUnits="userSpaceOnUse">
                <stop stop-color="#210124" />
                <stop offset="1" stop-color="#1B9AAA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row uppercase lg:items-center  lg:justify-between w-11/12 xl:w-4/5 mx-auto -mb-4 2xl:h-[70vh]">
          <div className="lg:w-6/12 w-12/12">
            <h1 className="flex font-bold md:text-4xl text-2xl leading-normal md:mb-6 mb-2 2xl:text-5xl">
              Soigner l'image des entreprises sénégalaises sur le web
            </h1>
            <p className="text-sm  w-full md:mb-7 md:text-lg 2xl:text-2xl">
              NOUS AIDONS votre ENTREPRISE À ACQUÉRIR UNE MEILLEURE VISIBILITÉ
              ET À SOIGNER SA COMMUNICATION SUR interNET grace à un site web
              moderne adapté à votre cible.
            </p>
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=221785395220&text=Bonjour%20GDA,%20",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="bg-primary text-white font-bold px-5 py-3 mt-3 rounded-xl transform hover:scale-105 hover:bg-secondary  duration-500 lg:text-md  lg:block 2xl:text-2xl shadow-md shadow-gray-900"
              >
                CONTACTEZ-NOUS{" "}
              </button>
            </div>
          </div>
          <div className="self-center">
            <img src={ordinateur} alt="ordinateur" className="2xl:w-[600px]" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gradient1 to-gradient2 h-auto w-full mt-3 pt-10">
        <div className="flex justify-between flex-col md:flex-row gap-y-4 w-11/12 xl:w-4/5 mx-auto">
          <div className="flex h-fit w-2/4 md:1/4">
            <span className="h-2/2 bg-barre p-0.5 mr-4"></span>
            <h2 className="font-second font-bold text-md text-white lg:text-3xl h-fit sm:max-w-[150px] md:max-w-[160px] lg:max-w-[220px] xl:max-w-[300px] 2xl:text-3xl 2xl:max-w-[300px]">
              GALSEN DIGITAL AGENCY
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="font-first text-xl sm:text-3xl md:text-right text-right text-white leading-tight lg:text-4xl 2xl:max-w-[600px] self-end text-shadow-custom">
              L’ AGENCE DIGITALE CRÉATIVE ET CENTRÉE CLIENT
            </h2>
            <span className="lg:w-32 2xl:w-36 w-20 h-1 bg-barre mt-2 p-0.5  sm:self-end"></span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 md:justify-between items-center mt-7 md:mt-20 lg:flex-row lg:w-11/12 xl:w-4/5 mx-auto">
          <div className="max-w-maxwidth lg:max-w-md 2xl:max-w-full relative">
            <img
              src={homme}
              alt="old man struggling with his computer"
              className="2xl:h-[70vh]"
            />
            <div className="absolute w-full bg-gradient-to-t from-gradient3 via-gradient-4 to-gradient-5 h-full w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
            <p className="w-full md:text-3xl lg:text-3xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10 2xl:text-4xl">
              Vous souhaitez gagner <br /> en{" "}
              <span className="text-barre">visibilité</span> sur le web ?
            </p>
          </div>
          <div className="max-w-maxwidth lg:max-w-md 2xl:max-w-full relative">
            <img
              src={femme}
              alt="happy business woman"
              className="2xl:h-[70vh]"
            />
            <div className="absolute w-full bg-gradient-to-t from-gradient8 via-gradient6 to-gradient7 h-full w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
            <p className="w-full md:text-3xl lg:text-3xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10 2xl:text-4xl">
              Bénéficiez d’un <span className="text-secondary">site web</span>{" "}
              <br />
              adapté à vos besoins !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
