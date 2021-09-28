import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Projects from "./components/projects/allProjects/Projects";
import Auth from "./components/loginSignup/Auth";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("wocLogin") ? true : false
  );

  return (
    <BrowserRouter>
      <NavBar userLoggedIn={userLoggedIn} />
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/login" exact>
          <Auth setUserLoggedIn={setUserLoggedIn} />
        </Route>

        {userLoggedIn ? (
          <Route path="/register" exact>
            <StudentDetails />
          </Route>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
