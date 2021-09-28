import React from "react";
import "./Sponsor.css";
// import SponsorImg from "../../assets/images/Sponsors.jpg";
import sponsorsData from "./sponsorsData";

const Sponsor = () => {
  return (
    <div className="sponsors" id="sponsors">
      <div className="top">SPONSORS</div>

      <div className="bottom">
        <div class="ccc">
          <div class="carousel">
            {sponsorsData.map((sponsor, index) => (
              <div class="carousel__face">
                <span className="carousel_span">
                  <h2>{sponsor[0]}</h2>
                  <div className="sponsors_img">
                    {sponsor[1].map((image, ind) => (
                      <img
                        key={ind}
                        height="50"
                        width="50"
                        src={image}
                        alt=""
                      />
                    ))}
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
