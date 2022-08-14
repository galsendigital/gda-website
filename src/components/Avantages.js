import React from "react";

import megaphone from "../assets/megaphone.png";
import hourglass from "../assets/hourglass.png";
import rocket from "../assets/rocket.png";
import dotted from "../assets/dotted-line.svg";
import dotted2 from "../assets/dotted-line-2.svg";
import waveband from "../assets/wave-band.png";

const Avantages = () => {
  return (
    <div id="avantages">
      <section className="pt-10 md:pt-20 flex items-center justify-center w-11/12 mx-auto">
        <img
          src={dotted}
          alt="dotted-line"
          className="relative top-14 hidden xl:block"
        />
        <h2
          id="avantages"
          className="font-second text-gradient3 text-3xl md:text-5xl 2xl:text-[5em] text-center px-5"
        >
          IL VOUS PERMETTRA EGALEMENT
        </h2>
        <img
          src={dotted2}
          alt="dotted line"
          className="relative bottom-16 hidden xl:block"
        />
      </section>

      <section className="w-11/12 mx-auto flex flex-col flex-wrap lg:flex-row justify-center items-center gap-y-5 lg:gap-x-5 2xl:gap-x-10 px-5 md:px-10 md:mt-16 mt-10  md:mb-20 mb-10 outline">
        <div className="bg-primary text-white max-w-maxwidth p-3 md:p-5 rounded-xl  shadow-md shadow-gray-700 2xl:max-w-[500px]">
          <div className="flex items-center ">
            <h3 className="md:text-lg 2xl:text-4xl text-md uppercase md:pb-7 pb-3">
              D’avoir un <span className="text-tertiary">support</span> de{" "}
              <span className="text-tertiary">communication</span> 24h/24 !
            </h3>
            <img
              src={megaphone}
              alt="megaphone"
              className="self-start 2xl:w-52"
            />
          </div>
          <p className="md:text-lg 2xl:text-2xl text-md">
            Contrairement à vous, votre site internet sera disponible tout le{" "}
            <br className="hidden" />
            temps pour vos clients.
          </p>
        </div>

        <div className="bg-primary text-white max-w-maxwidth p-3 md:p-5  rounded-xl shadow-md shadow-gray-700 2xl:max-w-[500px]">
          <div className="flex items-center">
            <h3 className="md:text-lg 2xl:text-4xl text-md uppercase md:pb-7 pb-3">
              DE GAGNER ÉNORMÉMENT DE{" "}
              <span className="text-tertiary">TEMPS</span> !
            </h3>
            <img
              src={hourglass}
              alt="hourglass"
              className="self-start 2xl:w-48"
            />
          </div>
          <p className="md:text-lg text-md 2xl:text-2xl">
            Votre site internet vous permettra d’informatiser vos tâches
            manuelles en les automatisant !
          </p>
        </div>

        <div className="bg-primary text-white max-w-maxwidth  p-3 md:p-5  rounded-xl shadow-md shadow-gray-700 2xl:max-w-[500px]">
          <div className="flex items-center">
            <h3 className="md:text-lg text-md 2xl:text-4xl uppercase md:pb-7 pb-3">
              DE VOUS OUVRIR À DE NOUVELLES{" "}
              <span className="text-tertiary">PERSPECTIVES</span> !
            </h3>
            <img src={rocket} alt="megaphone" className="self-start 2xl:w-48" />
          </div>
          <p className="md:text-lg text-md 2xl:text-2xl">
            Quoi de mieux qu’internet et l’infinité du web pour s’ouvrir à de
            nouveaux marchés ?
          </p>
        </div>
      </section>
      <section
        className="bg-no-repeat bg-cover bg-center flex items-center flex-col py-20 lg:mb-20 px-5 md:px-10"
        style={{ backgroundImage: `url(${waveband})` }}
      >
        <h2 className="md:text-3xl text-2xl text-center font-bold text-white  font-second mb-5 2xl:text-6xl 2xl:pb-12">
          NOUS SOMMES LÀ POUR VOUS ALORS N’HÉSITEZ PLUS !
        </h2>
        <div className="flex items-center">
          <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl md:text-2xl text-sm 2xl:text-5xl hover:scale-105  duration-200 2xl:py-5">
            CONTACTEZ-NOUS
          </button>
        </div>
      </section>
    </div>
  );
};

export default Avantages;
