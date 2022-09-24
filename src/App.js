import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

import Header from "./components/Header";
import Avantages from "./components/Avantages";
import Avis from "./components/Avis";
import OtherServices from "./components/OtherServices";

const App = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div>
      <div
          id="accueil"
          className="overflow-hidden font-first pt-28 bg-background"
        >
          <Header />
          <Avantages />
          <Avis />
          <OtherServices />
        </div>
    </div>
  );
};

export default App;
