import React from "react";
import Horizontal from "./Horizontal";
import "./TimeLine.css";
import Veryical from "./Vertical";

function TimeLine() {
  return (
    <section id="timeline">
      <h1>Timelines</h1>
      {/* <Horizontal /> */}
      <Veryical />
    </section>
  );
}

export default TimeLine;
