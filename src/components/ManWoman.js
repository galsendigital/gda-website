import React from "react";

import homme from "../assets/homme.png";
import femme from "../assets/femme.png";

const ManWoman = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-gradient1 to-gradient2 h-auto w-full">
        <div className="flex justify-between flex-col md:flex-row gap-y-4 w-11/12 mx-auto">
          <div className="flex h-fit w-2/4 md:1/4">
            <span className="h-2/2 bg-barre p-0.5 mr-4"></span>
            <h2 className="font-second font-bold text-xl text-white lg:text-3xl h-fit xl:w-2/4 2xl:text-5xl 2xl:w-5/12">
              GALSEN DIGITAL AGENCY
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="font-first text-xl sm:text-3xl md:text-right text-right text-white leading-tight lg:text-4xl 2xl:text-6xl self-end">
              L’ AGENCE DIGITALE CRÉATIVE ET CENTRÉE CLIENT
            </h2>
            <span className="lg:w-32 2xl:w-52 w-20 h-1 bg-barre mt-2 p-0.5  sm:self-end"></span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 md:justify-between items-center mt-7 md:mt-20 lg:flex-row lg:w-11/12 mx-auto">
          <div className="max-w-maxwidth lg:max-w-md 2xl:max-w-full relative overflow-hidden">
            <img
              src={homme}
              alt="old man struggling with his computer"
              className="2xl:h-[80vh]"
            />
            <div className="absolute w-full bg-gradient-to-t from-gradient3 via-gradient-4 to-gradient-5 h-[70%] w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
            <p className="w-full md:text-3xl lg:text-4xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10 2xl:text-6xl">
              Vous souhaitez gagner <br /> en{" "}
              <span className="text-barre">visibilité</span> sur le web ?
            </p>
          </div>
          <div className="max-w-maxwidth lg:max-w-md 2xl:max-w-full relative">
            <img
              src={femme}
              alt="happy business woman"
              className="2xl:h-[80vh]"
            />
            <div className="absolute w-full bg-gradient-to-t from-gradient3 via-gradient6 to-gradient7 h-[70%] w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
            <p className="w-full md:text-3xl lg:text-4xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10 2xl:text-6xl">
              Bénéficiez d’un <span className="text-secondary">site web</span>{" "}
              <br />
              adapté à vos besoins !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManWoman;
