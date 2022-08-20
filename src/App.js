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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-[100vh] flex justify-center items-center bg-primary">
          <BarLoader size={30} color="#ffffff" loading={loading} />
        </div>
      ) : (
        <div
          id="accueil"
          className="overflow-hidden font-first pt-28 2xl:pt-40  bg-background"
        >
          <Header />
          <Avantages />
          <Avis />
          <OtherServices />
        </div>
      )}
    </div>
  );
};

export default App;
