import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Intro from "./Intro";
import ManWoman from "./ManWoman";
import Avantages from "./Avantages";
import Slider from "./Slider";
import OtherServices from "./OtherServices";
import Footer from "./Footer";

const Accueil = () => {
  return (
    <div id="accueil">
      <Header />
      <Intro />
      <ManWoman />
      <Avantages />
      <Slider />
      <OtherServices />
      <Footer />
      <style>
        {`
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #0b3c49;
        }
      `}
      </style>
    </div>
  );
};

export default Accueil;
