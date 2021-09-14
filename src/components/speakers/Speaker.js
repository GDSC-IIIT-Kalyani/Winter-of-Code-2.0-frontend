import React from "react";
import "./Speaker.css";
import thinkFace from "../../assets/images/png_thinkface_papercut.png";
import logo from "../../assets/images/speaker.png";

const Speaker = () => {
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
          <img src={thinkFace} alt="think face" />
        </div>
      </div>
    </div>
  );
};

export default Speaker;
