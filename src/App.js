import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import PainCardContainer from "./components/PainCardContainer";

const App = () => {
  return (
    <div className="flex h-full w-full flex-col bg-stone-100">
      <Navbar
        logo={"App name"}
        language={"language"}
        languageCode={"languageCode"}
      />
      <PainCardContainer />
    </div>
  );
};

export default App;
