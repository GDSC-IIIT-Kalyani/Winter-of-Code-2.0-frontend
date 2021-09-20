import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Projects from "./components/projects/allProjects/Projects";
import Auth from "./components/loginSignup/Auth";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import Home from "./components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/login" exact component={Auth} />
        <Route path="/register" exact component={StudentDetails} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;
