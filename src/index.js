import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Text from "./components/UI/frontText/Text.js";
import "./index.css";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

// Front Parralax rendering
ReactDOM.render(
  <>
    <Text />
  </>,
  document.getElementById("home-root")
);
