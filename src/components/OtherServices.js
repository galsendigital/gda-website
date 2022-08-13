import React from "react";

import brush from "../assets/paint-brush.png";
import archery from "../assets/archery.png";
import hat from "../assets/degree-hat.png";

const OtherServices = () => {
  return (
    <div>
      <section
        id="autres-services"
        className="flex flex-col items-center bg-gradient3 text-white md:px-10 px-5 md:py-14 py-7"
      >
        <h2 className="font-bold md:text-4xl text-2xl text-center font-second pb-10">
          EN PLUS DE LA CRÉATION DE SITES / APPLICATIONS WEB,
          <br /> L’AGENCE PROPOSE ÉGALEMENT DES SERVICES DE :
        </h2>
        <div className="flex flex-col gap-y-9 gap-x-9 lg:flex-row md:justify-center w-full">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="mb-5 bg-primary rounded-md p-1">
                <img src={brush} alt="paint brush" className="md:w-14 w-10" />
              </div>
              <h3 className="md:text-xl font-bold border-b-4 border-tertiary mb-3 md:mb-8">
                GRAPHISME
              </h3>
              <p className="text-xs md:text-sm font-third text-center">
                (LOGO, CARTES DE VISITE, AFFICHE ETC.)
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <div className="mb-5 bg-primary rounded-md p-1">
                <img src={archery} alt="archery" className="md:w-14 w-10" />
              </div>
              <h3 className="md:text-xl font-bold text-center border-b-4 border-tertiary mb-3 md:mb-8">
                COMMUNITY MANAGEMENT
              </h3>
              <p className="text-xs md:text-sm font-third uppercase text-center max-w-xs">
                Mise en place de stratégies adaptées à votre cible.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <div className="mb-5 bg-primary rounded-md p-1">
                <img src={hat} alt="degree hat" className="md:w-14 w-10" />
              </div>
              <h3 className="md:text-xl font-bold border-b-4 border-tertiary mb-3 md:mb-8">
                FORMATION
              </h3>
              <p className="text-xs md:text-sm font-third text-center uppercase max-w-xs">
                Nous aidons nos clients à prendre en mains les outils qu’il leur
                faut.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServices;
