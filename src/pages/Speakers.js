import React from "react";
import "./Speakers.css";
import thinkFace from "./png_thinkface_papercut.png";
import logo from "../assets/images/speaker.png";

const Speakers = () => {
  return (
    <div className="speakers_sec">
      <div className="heading">
        <h1 className="heading-title">Speakers</h1>
      </div>
      <div className="container">
        <div className="speakers">
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div className="speakers_img">
            <img src={logo} alt="speakerLogo" />
            <a href="###">Speaker's name</a>
          </div>
          <div>
            <button>Show More</button>
          </div>
        </div>
        <div className="speaker-thinkFace">
          <img src={thinkFace} alt="think face" height="800" width="700" />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
