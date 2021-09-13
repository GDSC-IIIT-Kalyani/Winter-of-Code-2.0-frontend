import React from "react";
import "./Sponsors.css"
import SponsorImg from "./Sponsors.jpg" 

function Sponsors(props) {
  return <section className="sponsors"><h1>SPONSORS section</h1>
  <div id="flex">
        <div className="top">
            <div className="sponser">SPONSORS</div>
        </div>
        <div className="bottom">
            <img src={SponsorImg} alt="skit.png" className="s"></img>
            <img src={SponsorImg} alt="f.png" className="s"></img>
            <img src={SponsorImg} alt="g.png" className="g_top"></img>
            <img src={SponsorImg} alt="saw.png" className="s"/>
            <img src={SponsorImg} alt="g.png" className="g_bot_mid" />
            <img src={SponsorImg} alt="g.png" className="g_bot_right" />
        </div>
    </div>
  </section>;
}

export default Sponsors;
