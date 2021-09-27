import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import timeLineData from "./timeLineData";
import "./TimeLine.css";

export default class Horizontal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1,
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = timeLineData[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? timeLineData[prevIdx].statusB : "";

    return (
      <div>
        <div
          style={{
            width: "70%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px",
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#7b9d6f",
              outline: "blue",
            }}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={timeLineData.map((x) => x.data)}
          />
        </div>
        <div className="text-center">
          <div>{curStatus}</div>
        </div>
      </div>
    );
  }
}

// export default Horizontal;
