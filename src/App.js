import React from "react";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import TimeLine from "./components/timeline/TimeLine";
import Sponsor from "./components/sponsors/Sponsor";
import Speaker from "./components/speakers/Speaker";
import DevTeam from "./components/developers/DevTeam";
function App() {
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
}
export default App;
