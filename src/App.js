import React from "react";

import Header from "./components/Header";
import Avantages from "./components/Avantages";
import Avis from "./components/Avis";
import OtherServices from "./components/OtherServices";

const App = () => {
  return (
    <div className="overflow-hidden font-first pt-28 2xl:pt-40 outline">
      <Header />
      <Avantages />
      <Avis />
      <OtherServices />
    </div>
  );
};

export default App;
