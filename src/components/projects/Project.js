import React from "react";
import "./Project.css";
import Orgs from "./organizations";
import leftLogo from "../../assets/projectAssests/winter_about.png";
import "../header/NavBar.css";

const Project = () => {
  return (
    <section id="projects">
      <div id="flex-container">
        <div class="left">
          <img src={leftLogo} alt="" />
        </div>
        <div className="right">
          <ul class="list">
            <li class="items">
              <h2>30+</h2>
              <br />
              GDSCs <br />Collab 
            </li>
            <li class="items">
              <h2>1500+</h2>
              <br />
              Hackers <br /> All Around
            </li>
            <li class="items">
              <h2>60+</h2>
              <br />
              Day Event <br />
            </li>
          </ul>
          <Orgs />
          <button>
            {/* <a href="/projects">PROJECTS</a> */}
            <div>Coming Soon</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
