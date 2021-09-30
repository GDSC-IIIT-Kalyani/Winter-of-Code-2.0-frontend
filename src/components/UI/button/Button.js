import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <>
      <button id="button" className="button">
        {text}
      </button>
    </>
  );
};

export default Button;
