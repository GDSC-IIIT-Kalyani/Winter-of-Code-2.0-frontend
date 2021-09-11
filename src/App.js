import React from "react";
import PopUp from "./components/UI/popup/PopUp";
import About from "./pages/About";
import MadeBy from "./pages/MadeBy";
import Orgs from "./pages/Orgs";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Timeline from "./pages/Timeline";

function App(props) {
  return (
    <>
      <PopUp></PopUp>
      <About />
      <Orgs />
      <Timeline />
      <Sponsors />
      <Speakers></Speakers>
      <MadeBy />
    </>
  );
}

export default App;
