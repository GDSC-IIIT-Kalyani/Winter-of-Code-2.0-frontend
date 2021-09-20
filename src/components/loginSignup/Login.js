import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Redirect, useHistory } from "react-router-dom";

const clientId =
  "718358310359-d2qgjh0f7dc0pe4r1eifiqag3vdh5l9t.apps.googleusercontent.com";

function Login({ setUserLoggedIn }) {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const history = useHistory();
  const onLoginSuccess = (res) => {
    const loginDetails = {
      id_token: res.tokenObj.id_token,
      profile: res.profileObj,
    };
    localStorage.setItem("wocLogin", JSON.stringify(loginDetails));
    setShowloginButton(false);
    setShowlogoutButton(true);
    setUserLoggedIn(true);
  };

  const onLoginFailure = () => {
    alert("Login Failed! Please try again");
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    localStorage.removeItem("wocLogin");
    setShowloginButton(true);
    setShowlogoutButton(false);
    setUserLoggedIn(false);
    window.location.pathname = "/";
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Click here to SignIn"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Click here to SignOut"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default Login;
