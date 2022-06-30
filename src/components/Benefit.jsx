import React from 'react';
import "./../styles/benefit.scss";
import man from "./../assets/man.png"
import woman from "./../assets/woman.png"

const Benefit = () => {
    return (
        <section id="benefit" className="w-full pt-6 md:pt-8 flex flex-col flex-wrap justify-center items-center">
            <div className="w-full sm:w-4/5 md:w-full xl:w-4/5 flex flex-row flex-wrap justify-between items-start">
                <h2 className="w-full md:w-fit text-lg lg:text-2xl uppercase flex flex-col text-white font-bold bar left-bar pl-4">
                    <b>GALSEN DIGITAL</b>
                    <b>AGENCY</b>
                </h2>
                <h2 className="w-full md:w-fit text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase flex flex-col justify-end text-right text-white font-bold bar right-bar pb-3 mt-6 md:mt-0" style={{ textShadow: "0 4px 4px rgba(0, 0, 0, 0.5)" }}>
                    <b>L’ AGENCE DIGITALE CRÉATIVE </b>
                    <span>ET CENTRÉE CLIENT</span>
                </h2>
                <section className="w-full pt-6 md:pt-8 flex flex-row flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-2/5 md:pr-6 md:my-0">
                        <div className="w-full relative">
                            <img className="w-full" src={man} alt="man" />
                            <div className="p-0 absolute benefit-card-bg benefit-card-bg-red z-10 h-full w-full inset-0 flex flex-col justify-end items-center">
                                <p className="w-full text-center text-3xl p-3 my-0 py-5 font-bold text-white">
                                    Vous souhaitez gagner
                                    en <b style={{ color: "var(--red)" }}>visibilité</b> sur le web ?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 md:pl-6 my-6 md:my-0">
                        <div className="w-full relative">
                            <img className="w-full" src={woman} alt="woman" />
                            <div className="p-0 absolute benefit-card-bg benefit-card-bg-green z-10 h-full w-full inset-0 flex flex-col justify-end items-center">
                                <p className="w-full text-center text-3xl p-3 my-0 py-5 font-bold text-white">
                                    Bénéficiez d’un <b style={{ color: "var(--blue)" }}>site web </b>
                                    adapté à vos besoins !
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Benefit;
