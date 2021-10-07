import React, { useState } from "react";
import About from "../about/About";
import DevTeam from "../developers/DevTeam";
import DevTeam1 from "../developers/DevTeam1";
import Project from "../projects/Project";
// import Speaker from "../speakers/Speaker";
import Sponsor from "../sponsors/Sponsor";
import TimeLine from "../timeline/TimeLine";
import Welcome from "../welcomePage/Welcome";
import EventPartner from "../EventPartner/eventPartner";
import Faq from "../faqSec/Faq";
import "./Home.css";

const Home = () => {
  var x = window.matchMedia("(max-width: 920px)");
  const [devSection, setDevSection] = useState(x.matches);
  x.addListener(UpdateState);
  function UpdateState() {
    setDevSection(x.matches);
  }
  return (
    <>
      <Welcome />
      <About />
      <Project />
      <TimeLine />
      <Sponsor />
      {<EventPartner />}
      {/* <Speaker /> */}
      {/* <DevTeam /> */}

      {/* <Sponsor /> */}
      {/* <Speaker /> */}
      {devSection ? <DevTeam /> : <DevTeam1 />}
      <Faq />
    </>
  );
};

export default Home;
