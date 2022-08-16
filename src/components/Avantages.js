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
          className="font-second text-gradient3 text-3xl md:text-5xl 2xl:text-[4em] text-center px-5"
        >
          IL VOUS PERMETTRA EGALEMENT
        </h2>
        <img
          src={dotted2}
          alt="dotted line"
          className="relative bottom-16 hidden xl:block"
        />
      </section>

      <section className="space-y-10 xl:space-y-0 mt-10 flex flex-col items-center w-11/12 mx-auto  xl:flex-row xl:justify-between lg:items-center mb-24 mt-14">
        <div className="box">
          <div className="flex justify-between mb-10">
            <h3 className="font-bold xl:text-xl 2xl:text-3xl">
              D’AVOIR UN <span className="text-tertiary">SUPPORT</span> DE{" "}
              <span className="text-tertiary">COMMUNICATION</span> 24h/24 !
            </h3>
            <img
              src={megaphone}
              alt="megaphone"
              className="self-start 2xl:w-52"
            />
          </div>
          <p className="lg:w-11/12 xl:text-xl 2xl:text-3xl">
            Contrairement à vous, votre site internet sera disponible tout le
            temps pour vos clients.
          </p>
        </div>

        <div className="box">
          <div className="flex justify-between mb-10">
            <h3 className="font-bold xl:text-xl  2xl:text-3xl">
              DE GAGNER ÉNORMÉMENT DE{" "}
              <span className="text-tertiary">TEMPS</span> !
            </h3>
            <img
              src={hourglass}
              alt="hourglass"
              className="self-start 2xl:w-40"
            />
          </div>
          <p className="xl:text-xl 2xl:text-3xl">
            Votre site internet vous permettra d’informatiser vos tâches
            manuelles en les automatisant !
          </p>
        </div>

        <div className="box">
          <div className="flex justify-between mb-10">
            <h3 className="font-bold xl:text-xl  2xl:text-3xl">
              DE VOUS OUVRIR À DE NOUVELLES{" "}
              <span className="text-tertiary">PERSPECTIVES</span> !
            </h3>
            <img src={rocket} alt="rocket" className="self-start 2xl:w-52" />
          </div>
          <p className="lg:w-11/12 xl:text-xl 2xl:text-3xl 2xl:">
            Quoi de mieux qu’internet et l’infinité du web pour s’ouvrir à de
            nouveaux marchés ?
          </p>
        </div>
      </section>

      <section
        className="bg-no-repeat bg-cover bg-center flex items-center flex-col py-20 mb-20 lg:mb-20 px-5 md:px-10"
        style={{ backgroundImage: `url(${waveband})` }}
      >
        <h2 className="md:text-3xl text-2xl text-center font-bold text-white  font-second mb-5 2xl:text-6xl 2xl:pb-12">
          NOUS SOMMES LÀ POUR VOUS ALORS N’HÉSITEZ PLUS !
        </h2>
        <div className="flex items-center">
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=221785395220&text=Bonjour%20GDA,%20",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-primary text-white font-bold px-6 py-3 rounded-xl md:text-2xl text-sm 2xl:text-5xl hover:scale-105  duration-500 2xl:py-5  shadow-md shadow-gray-900"
          >
            CONTACTEZ-NOUS
          </button>
        </div>
      </section>
    </div>
  );
};

export default Avantages;
