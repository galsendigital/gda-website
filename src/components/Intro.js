import React from "react";

import wave from "../assets/wave.png";
import ordinateur from "../assets/ordinateur.png";

const Intro = () => {
  return (
    <div>
      <section
        className="flex flex-col lg:flex-row uppercase h-[100vh] lg:items-center pb-10 bg-no-repeat bg-cover md:bg-center md:px-10 px-5"
        style={{ backgroundImage: `url(${wave})` }}
      >
        <div className=" w-full lg:w-6/12 lg:mt-10">
          <h1 className="flex font-bold md:text-4xl text-2xl w-11/12 leading-normal md:mb-6 mb-2">
            Soigner l'image des entreprises sénégalaises sur le web
          </h1>
          <p className="text-sm  w-full md:mb-7 md:text-lg">
            NOUS AIDONS votre ENTREPRISE À ACQUÉRIR UNE MEILLEURE VISIBILITÉ ET
            À SOIGNER SA COMMUNICATION SUR interNET grace à un site web moderne
            adapté à votre cible.
          </p>
          <div>
            <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 lg:text-md mt-5 lg:block">
              CONTACTEZ-NOUS{" "}
            </button>
          </div>
        </div>
        <div className="xl:relative  xl:block lg:top-0 md:left-22 xl:left-40  right-18 md:bottom-10 sm:bottom-8  h-fit self-center">
          <img src={ordinateur} alt="ordinateur" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
