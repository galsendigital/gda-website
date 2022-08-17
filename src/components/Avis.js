import React from "react";

import Carousel from "./Carousel";

const Avis = () => {
  return (
    <section id="avis" className="w-11/12 xl:w-4/5 mx-auto ">
      <div className="mb-10">
        <div className="flex mb-10">
          <span className="bg-barre p-0.5 mr-4"></span>
          <h2 className="font-second font-bold text-[25px] sm:text-[28px] md:text-4xl text-gradient3 2xl:text-6xl">
            ILS NOUS ONT FAIT CONFIANCE
            <br className="hidden md:block" /> ET NE L’ONT PAS REGRETTÉ !
          </h2>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Avis;
