import React, { useRef } from "react";
import "./Projects.css";
import "../../header/NavBar";
import SlideData from "./SlideData";
import proj_video from "../../../assets/projectAssests/proj_video.mp4";
import NavBar from "../../header/NavBar";
import ProjectCard from "./ProjectCard";
import "./grid.css";
import {
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import "react-icons/fi";

const Projects = () => {
  const SlidingDiv = useRef(null);
  const calculatePoints = () => {
    var x = window.screen.width;
    if (x > 905) {
      return 750;
    } else if (x > 875) {
      return 500;
    } else if (x > 600) {
      return 250;
    } else {
      return 150;
    }
  }
  const slideLeft = () => {
    SlidingDiv.current.scrollLeft -= calculatePoints();
  };
  const slideRight = () => {
    SlidingDiv.current.scrollLeft += calculatePoints();
  };
  return (
    <div className="projects">
      <NavBar navLinkColor="white" />
      <div className="proj_vid">
        <video autoPlay loop muted>
          <source src={proj_video} type="video/mp4" />
        </video>
      </div>
      <div className="Container-arrows">
        <div className="Arrow1" onClick={slideLeft}>
          <FaArrowLeft />
        </div>
        <div className="Arrow2" onClick={slideRight}>
          <FaArrowRight />
        </div>
      </div>
      <div ref={SlidingDiv} className="proj_slides">
        {SlideData.map((slide, idx) => {
          return <ProjectCard key={idx} data={slide}/>;
        })}
      </div>
    </div>
  );
};
export default Projects;
