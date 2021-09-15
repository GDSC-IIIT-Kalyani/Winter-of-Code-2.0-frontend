import React from "react";
import "./Sponsor.css";
import SponsorImg from "../../assets/images/Sponsors.jpg";
import sponsorData from "./sponsorsData";

const Sponsor = () => {
  return (
    <div className="sponsors">
      <div className="top">
        <h1>SPONSORS</h1>
      </div>

      <div className="bottom">
        {/* <div className="sponsor_img">
          <img src={SponsorImg} alt="skit.png"></img>
        </div> */}

        {sponsorData.map((data, index) => (
          <div key={index} className="sponsor_img">
            <img src={data.src} alt="f.png"></img>
          </div>
        ))}
        {/* 
        <div className="sponsor_img">
          <img src={SponsorImg} alt="g.png"></img>
        </div>
        <div className="sponsor_img">
          <img src={SponsorImg} alt="saw.png" />
        </div>
        <div className="sponsor_img">
          <img src={SponsorImg} alt="g.png" />
        </div>
        <div className="sponsor_img">
          <img src={SponsorImg} alt="g.png" />
        </div> */}
      </div>
    </div>
  );
};

export default Sponsor;
