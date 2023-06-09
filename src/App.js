import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-stone-100">
      <Navbar currentLanguage="English" logo={`Universal \nPain Translator`} />
    </div>
  );
}

export default App;
