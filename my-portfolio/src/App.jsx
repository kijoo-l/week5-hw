import { useState, useRef } from "react";
import Header from "./components/Header";
import NameInput from "./components/NameInput";
import MainImage from "./components/MainImage";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  const [tab, setTab] = useState("home");
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const renderContent = () => {
    switch (tab) {
      case "about":
        return <About />;
      case "activities":
        return <Activities />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <NameInput name={name} setName={setName} inputRef={inputRef} />
            <MainImage />
          </>
        );
    }
  };

  return (
    <div className="home_container">
      <div className="name">
        <h1 className="leename"> 기듀듀의 포트폴리오</h1>
      </div>
      <Header tab={tab} setTab={setTab} />
      {renderContent()}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="button"
      >
        🔝 Top
      </button>
    </div>
  );
}
