import "./App.css";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "./utilities/useLocalStorage";
import Navbar from "./components/Navbar";
import PainCardContainer from "./components/PainCardContainer";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage(
    "currentLanguage",
    "en"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <div className="flex h-full w-full flex-col bg-stone-100">
      <Navbar
        logo={"App name"}
        language={"language"}
        setCurrentLanguage={setCurrentLanguage}
      />
      <PainCardContainer />
    </div>
  );
};

export default App;
