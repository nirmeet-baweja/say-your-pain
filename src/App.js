import "./App.css";

import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import PainCardContainer from "./components/PainCardContainer";

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex h-full w-full flex-col bg-stone-100">
        <Navbar
          currentLanguage="English"
          logo={"App name"}
          language={"language"}
          languageCode={"languageCode"}
        />
        <PainCardContainer />
      </div>
    </Suspense>
  );
};

export default App;
