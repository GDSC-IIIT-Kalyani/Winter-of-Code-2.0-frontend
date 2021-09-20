import React from "react";
import Login from "./Login";
import "./Auth.css";

const Auth = ({ setUserLoggedIn }) => {
  return (
    <div className="g-signin">
      <Login setUserLoggedIn={setUserLoggedIn}></Login>
    </div>
  );
};

export default Auth;
