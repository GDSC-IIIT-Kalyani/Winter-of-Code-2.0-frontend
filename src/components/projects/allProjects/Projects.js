import React, { useEffect, useState } from "react";
import "./Projects.css";
import "../../header/NavBar";
import SlideData from "./SlideData";
import proj_video from "../../../assets/projectAssests/proj_video.mp4";
import NavBar from "../../header/NavBar";
import "./grid.css";
import { FaGithub, FaArrowRight, FaArrowDown } from "react-icons/fa";

const Projects = () => {
  let [proj_type, setproj_type] = useState("all");
  const handleChange = (e) => {
    setproj_type(e.target.value);
  };
  useEffect(() => {
    const proj_form = document.querySelectorAll(".main_item");
    proj_form.forEach((item) => {
      item.addEventListener("click", () => {
        item.children[1].classList.toggle("proj-active");
        item.children[1].children[2].classList.toggle("ideas-active");
        item.children[0].classList.toggle("proj-active-left");
      });
    });
  }, []);
  return (
    <div className="projects">
      <NavBar navLinkColor="white" />
      <div className="proj_vid">
        <video autoPlay loop muted>
          <source src={proj_video} type="video/mp4" />
        </video>
      </div>
      <div className="filter_option">
        <h3>Filter out by Categories</h3>
        <form id="proj_form">
          <select className="proj_slt" onChange={handleChange}>
            <option value="all">All Categories</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="ml">Machine Learning</option>
          </select>
        </form>
      </div>

      {/* Grid section */}
      <div className="project_grid">
        {SlideData.map((slide, idx) => {
          return (
            <div
              key={idx}
              className={
                slide.tags.includes(proj_type) ? "main_item" : "no_view"
              }
            >
              <div
                className="project_left"
                style={{ backgroundImage: `url(${slide.org_img})` }}
              >
                <div className="arrow">
                  <FaArrowRight className="rightarr" />
                  <FaArrowDown className="downarr" />
                </div>
                <div className="org_name">
                  <div className="proj_dess">ORGNIZATION </div>
                  <div className="size-1">{slide.org_name}</div>
                </div>
                <div className="project_name">
                  <div className="proj_dess">PROJECT NAME </div>
                  <div className="size-1">{slide.title}</div>
                </div>
                <div className="mentor">
                  <div className="size-1">MENTOR</div>
                  {slide.mentors.map((mentor, index) => {
                    return (
                      <div key={index} className="size-4">
                        {mentor}
                      </div>
                    );
                  })}
                </div>
                <div className="repo">
                  <div className="size-2">REPO's LINK &#128279;</div>
                  <a href={slide.repo_link}>
                    <FaGithub className="gh_logo" />
                  </a>
                </div>
              </div>
              <div className="project_right">
                <div className="size-2">Ideas Presented:</div>
                <br />
                <ul className="ideas">
                  {slide.Ideas.map((idea, id) => {
                    return (
                      <li className="size-4" key={id}>
                        {idea}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
