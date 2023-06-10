import "./App.css";

import Navbar from "./components/Navbar";
import PainCardContainer from "./components/PainCardContainer";

function App() {
  return (
    <div className="flex h-full w-full flex-col bg-stone-100">
      <Navbar currentLanguage="English" logo={`Universal \nPain Translator`} />
      <PainCardContainer />
    </div>
  );
}

export default App;
