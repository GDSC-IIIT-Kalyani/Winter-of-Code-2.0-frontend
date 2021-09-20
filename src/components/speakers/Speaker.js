import React from "react";
import "./Speaker.css";
import thinkFace from "../../assets/images/png_thinkface_papercut.png";
import logo from "../../assets/images/speaker.png";
import Button from "../UI/button/Button";

const Speaker = () => {
  return (
    <div className="speakers_sec" id="speakers" >
      <div className="speaker_heading">
        <h1 className="heading_title">Speakers</h1>
      </div>
      <div className="container">
        <div className="speakers">
          <div className="speakers_card">
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
          </div>
          <div>
            <Button text="Show More"></Button>
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
