import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

  // useEffect(() => {
  //   const data = localStorage.getItem("wocLogin");
  //   if (data) {
  //     setUserLoggedIn(true);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <NavBar userLoggedIn={userLoggedIn} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/login" exact>
          <Auth setUserLoggedIn={setUserLoggedIn} />
        </Route>
        <Route path="/register" exact>
          <StudentDetails />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
