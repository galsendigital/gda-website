import React from "react";

import Carousel from "./Carousel";

const Avis = () => {
  return (
    <section id="avis" className="w-11/12 outline mx-auto ">
      <div className="mb-20">
        <div className="flex mb-10">
          <span className="bg-barre p-0.5 mr-4"></span>
          <h2 className="font-second font-bold text-[28px] lg:text-5xl md:text-4xl text-gradient3 2xl:text-6xl">
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
