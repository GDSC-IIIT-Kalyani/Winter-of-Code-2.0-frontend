import React from "react";
import "./TimeLine.css";
import timeLine from "./timeLineData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Veryical() {
  return (
    <section id="timeline">
      <VerticalTimeline>
        {timeLine.map((data, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={data.active ? data.contentStyle : null}
            contentArrowStyle={
              data.active
                ? { borderRight: "7px solid  rgb(33, 150, 243)" }
                : null
            }
            date={data.date}
            dateClassName={{ fontsize: "100px" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={""}
          >
            <h3 className="vertical-timeline-element-title">
              {data.topHeading}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {data.subHeading}
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Veryical;
