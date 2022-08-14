import React from "react";

import wave from "../assets/wave.svg";
import ordinateur from "../assets/ordinateur.png";

const Intro = () => {
  return (
    <section
      id="accueil"
      className="bg-no-repeat bg-cover md:bg-center w-full"
      style={{ backgroundImage: `url(${wave})` }}
    >
      <div className="flex flex-col lg:flex-row uppercase lg:h-[100vh] lg:items-center  justify-between w-11/12 mx-auto">
        <div className="lg:w-6/12 lg:mt-10 w-12/12">
          <h1 className="flex font-bold md:text-4xl text-2xl leading-normal md:mb-6 mb-2 2xl:text-6xl">
            Soigner l'image des entreprises sénégalaises sur le web
          </h1>
          <p className="text-sm  w-full md:mb-7 md:text-lg 2xl:text-4xl">
            NOUS AIDONS votre ENTREPRISE À ACQUÉRIR UNE MEILLEURE VISIBILITÉ ET
            À SOIGNER SA COMMUNICATION SUR interNET grace à un site web moderne
            adapté à votre cible.
          </p>
          <div>
            <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 lg:text-md mt-5 lg:block 2xl:text-3xl">
              CONTACTEZ-NOUS{" "}
            </button>
          </div>
        </div>
        <div className="self-center">
          <img src={ordinateur} alt="ordinateur" className="2xl:w-[1000px]" />
        </div>
      </div>
    </section>
  );
};

// className="xl:relative  xl:block lg:top-0 md:left-22 xl:left-40  right-18 md:bottom-10 sm:bottom-8  h-fit self-center"

export default Intro;
