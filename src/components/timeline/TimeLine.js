import React from "react";
import "./TimeLine.css";
import Vertical from "./Vertical";

function TimeLine() {
  return (
    <section className="v-timeline" id="timeline">
      <div className="v-head">Timelines</div>
      <div className="v-time">
        <Vertical />
      </div>
    </section>
  );
}

export default TimeLine;
