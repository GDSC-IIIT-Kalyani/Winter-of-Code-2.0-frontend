import React from "react";
import "./TimeLine.css";
import Vertical from "./Vertical";

function TimeLine() {
  return (
    <section className="v-timeline" id="timeline">
      <h1>Timelines</h1>
      <div>
        <Vertical />
      </div>
    </section>
  );
}

export default TimeLine;
