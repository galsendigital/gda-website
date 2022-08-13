import React from "react";

import homme from "../assets/homme.png";
import femme from "../assets/femme.png";

const ManWoman = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-gradient1 to-gradient2 h-auto md:px-10 px-5">
        <div className="flex justify-between flex-col md:flex-row gap-y-4">
          <div className="flex self-center h-fit">
            <span className="h-2/2 bg-barre p-0.5 mr-4"></span>
            <h2 className="font-second font-bold text-xl text-white lg:text-3xl h-fit lg:w-3/4">
              GALSEN DIGITAL AGENCY
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="font-first text-xl sm:text-3xl md:text-right text-center text-white leading-tight lg:text-4xl lg:w-3/4 lg:self-end">
              L’ AGENCE DIGITALE CRÉATIVE ET CENTRÉE CLIENT
            </h2>
            <span className="lg:w-32 w-20 h-1 bg-barre mt-2 p-0.5 hidden sm:self-end md:block"></span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 md:justify-between items-center mt-7 md:mt-20 lg:flex-row lg:w-10/12 mx-auto">
          <div className="max-w-maxwidth lg:max-w-md relative overflow-hidden">
            <img src={homme} alt="old man struggling with his computer" />
            <div className="absolute w-full bg-gradient-to-t from-gradient3 via-gradient-4 to-gradient-5 h-[70%] w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
            <p className="w-full md:text-3xl lg:text-4xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10">
              Vous souhaitez gagner <br /> en{" "}
              <span className="text-barre">visibilité</span> sur le web ?
            </p>
          </div>
          <div className="max-w-maxwidth lg:max-w-md relative">
            <img src={femme} alt="happy business woman" />
            <div className="absolute w-full bg-gradient-to-t from-gradient3 via-gradient6 to-gradient7 h-[70%] w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
            <p className="w-full md:text-3xl lg:text-4xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10">
              Bénéficiez d’un <span className="text-secondary">site web</span>{" "}
              <br />
              adapté à vos besoins !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManWoman;
