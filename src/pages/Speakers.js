import React from "react";
import "./Speakers.css";

const Speakers = () => {
  return <div class = "speakers_sec">
    <h1 class="heading">Speakers</h1>
    <div class="container">
        <div class="speakers">
            <div class="speaker_sec1">
                <div class="image_in"><img src="png_thinkface_papercut.png" alt="Error!"/><a href="">Speaker's name</a></div>
                <div class="image_in"><img src="" alt="Error!"/><a href="">Speaker's name</a></div>
                <div class="image_in"><img src="" alt="Error!"/><a href="">Speaker's name</a></div>
            </div>
            <div class="speaker_sec2">
                <div class="image_in"><img src="" alt="Error!"/><a href="">Speaker's name</a></div>
                <div class="image_in"><img src="" alt="Error!"/><a href="">Speaker's name</a></div>
                <div class="image_in"><img src="" alt="Error!"/><a href="">Speaker's name</a></div>
            </div>
        </div>
        <div class="image_out img7"></div>
    </div>
  </div>;
};

export default Speakers;
