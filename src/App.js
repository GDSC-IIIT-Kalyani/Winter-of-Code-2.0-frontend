import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import TimeLine from "./components/timeline/TimeLine";
import Sponsor from "./components/sponsors/Sponsor";
import Speaker from "./components/speakers/Speaker";
import DevTeam from "./components/developers/DevTeam";
import Projects from "./components/projects/allProjects/Projects";
// import Footer from "./components/footer/Footer";
import LoginSignUp from "./components/loginSignup/LoginSignUp";
function App() {
  const pathName = window.location.pathname;
  return (
    <BrowserRouter>
      {pathName === "/login" || pathName === "/projects" ? null : (
        <>
          <About />
          <Project />
          <TimeLine />
          <Sponsor />
          <Speaker />
          <DevTeam />
        </>
      )}
      <Switch>
        <Route path="/projects" exact component={Projects} />
        <Route path="/login" exact component={LoginSignUp} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;
