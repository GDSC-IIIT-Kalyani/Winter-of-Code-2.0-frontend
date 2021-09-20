import React from "react";
import Login from "./Login";
import "./Auth.css";

const Auth = ({ setUserLoggedIn, handleLogOut }) => {
  return (
    <div className="g-signin">
      <Login
        setUserLoggedIn={setUserLoggedIn}
        handleLogOut={handleLogOut}
      ></Login>
    </div>
  );
};

export default Auth;
