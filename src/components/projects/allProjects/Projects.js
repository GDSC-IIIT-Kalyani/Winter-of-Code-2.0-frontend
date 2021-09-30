import React from "react";
import "./Projects.css";
import "../../header/NavBar";
import SlideData from "./SlideData";
import proj_video from "../../../assets/projectAssests/proj_video.mp4";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "all" };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div
        className="projects"
        onLoad={() => {
          document.querySelector(".navBar_link-item").style.color =
            "white !important";
        }}
      >
        <div className="proj_vid">
          <video autoPlay loop muted>
            <source src={proj_video} type="video/mp4" />
          </video>
        </div>
        <div className="filter_option">
          <h3>Filter out by Categories</h3>
          <form id="proj_form">
            <select
              className="proj_slt"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="all">All Categories</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="ml">Machine Learning</option>
            </select>
          </form>
        </div>
        <div className="proj_grid">
          {SlideData.map((slides, idx) => {
            return (
              <div
                className={
                  slides.tags.includes(this.state.value)
                    ? "proj_item"
                    : "no_view"
                }
                id={"section" + idx.toString()}
              >
                <img src={slides.image} alt="Proj_Logo"></img>
                <div>
                  <h3 className="proj_title">{slides.title}</h3>
                  <p className="proj_desc">{slides.Descrption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Projects;
