import React from "react";

import Header from "./Header";

import ordinateur from "../assets/ordinateur.png";
import homme from "../assets/homme.png";
import femme from "../assets/femme.png";

import wave from "../assets/wave.png";
import dotted from "../assets/dotted-line.svg";
import dotted2 from "../assets/dotted-line-2.svg";
import waveband from "../assets/wave-band.png";

import megaphone from "../assets/megaphone.png";
import hourglass from "../assets/hourglass.png";
import rocket from "../assets/rocket.png";
import brush from "../assets/paint-brush.png";
import archery from "../assets/archery.png";
import hat from "../assets/degree-hat.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const Accueil = () => {
  return (
    <div id="acceuil">
      <Header />
      <main className="">
        <section
          className="flex  md:h-[100vh] bg-no-repeat bg-cover bg-left md:bg-center md:px-10 px-5"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div className="uppercase  w-7/12">
            <h1 className="flex font-bold md:text-4xl text-2xl w-11/12 leading-normal md:mb-6 mb-3">
              Soigner l'image des <br className="hidden lg:block" />
              entreprises sénégalaises sur
              <br className="hidden" /> le web
            </h1>
            <p className="text-xs mb-3 w-full md:mb-12 md:text-lg lg:text-2xl">
              NOUS AIDONS votre ENTREPRISE À ACQUÉRIR UNE MEILLEURE VISIBILITÉ
              ET À SOIGNER SA COMMUNICATION SUR interNET grace à un site web
              moderne adapté à votre cible.
            </p>
            <div className="">
              <button className="bg-primary text-white font-bold px-6 py-3 mb-5 rounded-xl md:text-2xl text-sm hover:bg-secondary duration-200">
                CONTACTEZ-NOUS
              </button>
            </div>
          </div>
          <div className="relative  sm:block lg:top-0  right-18 md:bottom-10 sm:bottom-8  h-fit">
            <img src={ordinateur} alt="ordinateur" />
          </div>
        </section>

        <section className="bg-gradient-to-b from-gradient1 to-gradient2 h-auto md:px-10 px-5 pt-20">
          <div className="flex justify-between flex-col md:flex-row gap-y-4">
            <div className="flex h-fit">
              <span className="h-2/2 bg-barre p-0.5 mr-4"></span>
              <h2 className="font-second font-bold text-xl text-white lg:text-4xl h-fit">
                GALSEN DIGITAL AGENCY
              </h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-first text-xl sm:text-3xl  md:text-3xl md:text-right text-center text-white leading-tight lg:text-6xl">
                L’ AGENCE DIGITALE CRÉATIVE ET CENTRÉE CLIENT
              </h2>
              <span className="lg:w-48 w-20 h-1 bg-barre mt-2 p-0.5 hidden sm:self-end md:block"></span>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 lg:flex-row md:justify-between items-center mt-7 md:mt-20">
            <div className="max-w-maxwidth lg:max-w-xl relative overflow-hidden">
              <img src={homme} alt="old man struggling with his computer" />
              <div className="absolute w-full bg-gradient-to-t from-gradient3 via-gradient-4 to-gradient-5 h-[70%] w-[98.5%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-lg"></div>
              <p className="w-full md:text-3xl lg:text-4xl text-2xl font-bold absolute bottom-0 text-white text-center mb-10">
                Vous souhaitez gagner <br /> en{" "}
                <span className="text-barre">visibilité</span> sur le web ?
              </p>
            </div>
            <div className="max-w-maxwidth lg:max-w-xl relative">
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

        <section className="pt-10 md:pt-20 flex items-center justify-center">
          <img
            src={dotted}
            alt="dotted-line"
            className="relative top-14 hidden xl:block"
          />
          <h2
            id="avantages"
            className="font-second text-gradient3 text-3xl md:text-5xl text-center px-5"
          >
            IL VOUS PERMETTRA EGALEMENT
          </h2>
          <img
            src={dotted2}
            alt="dotted line"
            className="relative bottom-16 hidden xl:block"
          />
        </section>

        <section className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-y-5 lg:gap-x-5 px-5 md:px-10 md:mt-16 mt-10  md:mb-20 mb-10 ">
          <div className="bg-primary text-white max-w-maxwidth p-3 md:p-5 rounded-xl drop-shadow-2xl">
            <div className="flex items-center">
              <h3 className="md:text-lg text-md uppercase md:pb-7 pb-3">
                D’avoir un <span className="text-tertiary">support</span> de{" "}
                <span className="text-tertiary">communication</span> 24h/24 !
              </h3>
              <img src={megaphone} alt="megaphone" className="self-start" />
            </div>
            <p className="md:text-lg text-md">
              Contrairement à vous, votre site internet sera disponible tout le{" "}
              <br className="hidden" />
              temps pour vos clients.
            </p>
          </div>

          <div className="bg-primary text-white max-w-maxwidth p-3 md:p-5  rounded-xl">
            <div className="flex items-center">
              <h3 className="md:text-lg text-md uppercase md:pb-7 pb-3">
                DE GAGNER ÉNORMÉMENT DE{" "}
                <span className="text-tertiary">TEMPS</span> !
              </h3>
              <img src={hourglass} alt="hourglass" className="self-start" />
            </div>
            <p className="md:text-lg text-md">
              Votre site internet vous permettra d’informatiser vos tâches
              manuelles en les automatisant !
            </p>
          </div>

          <div className="bg-primary text-white max-w-maxwidth  p-3 md:p-5  rounded-xl">
            <div className="flex items-center">
              <h3 className="md:text-lg text-md uppercase md:pb-7 pb-3">
                DE VOUS OUVRIR À DE NOUVELLES{" "}
                <span className="text-tertiary">PERSPECTIVES</span> !
              </h3>
              <img src={rocket} alt="megaphone" className="self-start" />
            </div>
            <p className="md:text-lg text-md">
              Quoi de mieux qu’internet et l’infinité du web pour s’ouvrir à de
              nouveaux marchés ?
            </p>
          </div>
        </section>

        <section
          className="bg-no-repeat bg-center bg-cover flex items-center flex-col py-20 mb-24 px-5 md:px-10"
          style={{ backgroundImage: `url(${waveband})` }}
        >
          <h2 className="md:text-3xl text-2xl text-center font-bold text-white mb-6 font-second">
            NOUS SOMMES LÀ POUR VOUS ALORS N’HÉSITEZ PLUS !
          </h2>
          <div className="flex items-center">
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl md:text-2xl text-sm hover:scale-105 duration-200">
              CONTACTEZ-NOUS
            </button>
          </div>
        </section>

        <section id="ce-qu-ils-pensent" className="px-10 mb-20">
          <div className="flex mb-10">
            <span className="bg-barre p-0.5 mr-4"></span>
            <h2 className="font-second font-bold text-3xl lg:text-5xl md:text-4xl text-gradient3">
              ILS NOUS ONT FAIT CONFIANCE
              <br className="hidden md:block" /> ET NE L’ONT PAS REGRETTÉ !
            </h2>
          </div>
          <p className="md:text-3xl text-sm bg-primary md:p-10 p-5 md:mb-7 mb-3 rounded-xl text-white text-center font-third">
            “ Rapport qualité-prix très positif et facile de travailler avec
            vous car vous savez vous adapter et répondre aux besoins clients. “
          </p>
          <div className="text-right md:text-3xl text-md flex flex-col">
            <p className="font-bold">Mr Fall, CEO de Mossane GROUP.</p>
            <span className="md:w-28 w-14 h-1 bg-barre mt-0 p-0.5 self-end"></span>
          </div>
        </section>

        <section
          id="autres-services"
          className="flex flex-col items-center bg-gradient3 text-white md:px-10 px-5 md:py-14 py-7"
        >
          <h2 className="font-bold md:text-4xl text-xl text-center font-second pb-10">
            EN PLUS DE LA CRÉATION DE SITES / APPLICATIONS WEB,
            <br /> L’AGENCE PROPOSE ÉGALEMENT DES SERVICES DE :
          </h2>
          <div className="flex flex-col gap-y-5 gap-x-9 lg:flex-row md:justify-center w-full">
            <div className="">
              <div className="flex flex-col items-center">
                <div className="mb-5 bg-primary rounded-md p-1">
                  <img src={brush} alt="paint brush" className="md:w-14 w-10" />
                </div>
                <h3 className="text-xl font-bold border-b-4 border-tertiary mb-8">
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
                <h3 className="text-xl font-bold text-center border-b-4 border-tertiary mb-8">
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
                <h3 className="text-xl font-bold border-b-4 border-tertiary mb-8">
                  FORMATION
                </h3>
                <p className="text-xs md:text-sm font-third text-center uppercase max-w-xs">
                  Nous aidons nos clients à prendre en mains les outils qu’il
                  leur faut.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white flex justify-between items-center md:px-10 px-5 md:py-8 py-5">
          <h2 className="md:text-3xl text-sm uppercase font-bold">
            Rejoignez nous sur nos réseaux sociaux
          </h2>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/GalsenDigitalAgency"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className="md:w-9 w-7" />
            </a>
            <a
              href="https://www.instagram.com/galsendigitalagency/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" className="md:w-9 w-7" />
            </a>
            <a
              href="https://mobile.twitter.com/galsendigital"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" className="md:w-9 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/galsen-digital-agency/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="md:w-9 w-7" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwt722mEwZOV_-LsthrmGag/featured"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="youtube" className="md:w-9 w-7" />
            </a>
          </div>
        </section>
        <section className="flex justify-between bg-tertiary text-white md:text-xl text-xs md:px-10 md:py-8 px-5 py-5">
          <p>© 2020 - 2022 Galsen Digital Agency. Tous Droits Réservés.</p>
          <p>Site Développé Et Déployé Par La GDA</p>
        </section>
      </main>
    </div>
  );
};

export default Accueil;
