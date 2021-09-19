import React from "react";
import About from "../about/About";
import DevTeam from "../developers/DevTeam";
import Project from "../projects/Project";
import Speaker from "../speakers/Speaker";
import Sponsor from "../sponsors/Sponsor";
import TimeLine from "../timeline/TimeLine";

const Home = () => {
  return (
    <>
      <About />
      <Project />
      <TimeLine />
      <Sponsor />
      <Speaker />
      <DevTeam />
    </>
  );
};

export default Home;
