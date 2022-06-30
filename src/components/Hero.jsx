import React from 'react';
import "./../styles/hero.scss";
import agripro from "./../assets/website_agripro.png"
import wave from "./../assets/wave.svg"

const Hero = () => {
    return (
        <section className="relative w-full p-4 flex flex-row flex-wrap justify-center items-center mt-6 md:mt-10">
            <div className="w-full absolute bottom-0 left-0 -z-10">
                <img className="w-full" src={wave} alt="wave" />
            </div>
            <div className="w-full sm:w-4/5 md:w-full xl:w-4/5 flex flex-row flex-wrap justify-center items-center">
                <div className="z-10 w-full md:w-1/2 flex flex-col flex-wrap justify-center">
                    <h1 className=".yantramanav font-extrabold text-2xl lg:text-4xl">
                        SOIGNER L'IMAGE DES ENTREPRISES SÉNÉGALAISES SUR LE WEB
                    </h1>
                    <p className="text-lg md:text-xl uppercase font-medium">
                        NOUS AIDONS votre ENTREPRISE À ACQUÉRIR UNE MEILLEURE VISIBILITÉ ET À SOIGNER SA COMMUNICATION SUR interNET grace à un site web moderne adapté à votre cible.
                    </p>

                    <button className="button-gda ml-0">
                        <a href="#">
                            Contactez nous
                        </a>
                    </button>
                </div>
                <div className="z-10 w-full md:w-1/2 flex flex-col flex-wrap justify-center items-end">
                    <img className="w-fit" src={agripro} alt="Agripro africa" />
                </div>

            </div>

        </section>
    );
}

export default Hero;
