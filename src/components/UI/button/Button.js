import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <>
      <div id="Button" className="Button">
        {text}
      </div>
    </>
  );
};

export default Button;
