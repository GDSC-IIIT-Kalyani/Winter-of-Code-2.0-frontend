import React, { useEffect, useState } from "react";
import "./Projects.css";
import "../../header/NavBar";
import SlideData from "./SlideData";
import proj_video from "../../../assets/projectAssests/proj_video.mp4";
import NavBar from "../../header/NavBar";
import "./grid.css";
import { FaGithub, FaArrowRight, FaArrowDown } from "react-icons/fa";
import {FiMail} from "react-icons/fi"

const Projects = () => {
  let [proj_type, setproj_type] = useState("all");
  let [proj_org, setproj_org] = useState("all");
  const handleChange = (e) => {
    setproj_type(e.target.value);
  };
  const handleOrg = (e) => {
    setproj_org(e.target.value);
  };
  useEffect(() => {
    const proj_form = document.querySelectorAll(".main_item");
    proj_form.forEach((item) => {
      item.addEventListener("click", () => {
        item.children[1].classList.toggle("proj-active");
        item.children[1].children[2].classList.toggle("ideas-active");
        item.children[0].classList.toggle("proj-active-left");
        item.children[0].children[0].children[0].children[0].classList.toggle('idea-hide')
        item.children[0].classList.toggle('back-img');
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
            <option value="cloud">Cloud</option>
            <option value="doc">Documentation</option>
            <option value="compiler">Compiler</option>
            <option value="py">Python</option>
          </select>
          <select className="proj_slt" onChange={handleOrg}>
            <option value="all">All organizations</option>
            <option value="mojo">Mojo Global</option>
            <option value="llvm">LLVM</option>
            <option value="geeta">The Gita Initiative</option>
            <option value="autodl">Auto DL</option>
            <option value="hoppscotch">Hoppscotch</option>
            <option value="jina">Jina AI</option>
            <option value="edualgo">Edualgo Academy</option>
            <option value="skit">Skit AI</option>
            <option value="asyn">AsyncAPI</option>
            <option value="gdsc">GDSC</option>
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
                (slide.tags.includes(proj_type)&&slide.org_tag.includes(proj_org)) ? "main_item" : "no_view"
              }
            >
              <div
                className="project_left"
                style={{ backgroundImage: `url(${slide.org_img})` }}
              >
                <div className="arrow">
                  <div className='text'> <span> Ideas List </span>  
                  <FaArrowRight className="rightarr" />
                  <FaArrowDown className="downarr" />
                  </div>
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
                  <div className="size-2">MENTORS</div>
                  {slide.mentors.map((mentor, index) => {
                    return (
                      <div key={index} className="size-4">
                        <a href= {"mailto:" + mentor.email}>{mentor.name}   <FiMail className="mail-con"/></a>
                      </div>
                    );
                  })}
                </div>
                <div className="repo">
                  <div className="size-2">REPO LINK &#128279;</div>
                  <a href={slide.repo_link} target='_blank' rel="noreferrer">
                    <FaGithub className="gh_logo" />
                  </a>
                </div>
              </div>
              <div className="project_right">
                <div className="size-1">Ideas List:</div>
                <br />
                <ul className="ideas">
                  {slide.Ideas.map((idea, id) => {
                    return (
                      <li className="size-5" key={id} dangerouslySetInnerHTML={{__html : idea}}>
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
