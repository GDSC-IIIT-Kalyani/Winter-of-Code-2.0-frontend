import React from "react";
import "./About.css";

function About() {
  return (
    <section id="About">
      <div class="Fish">
        <video autoPlay loop muted>
          <source src="./Assets/Fish_vid.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div class="Papercut">
        <img src="./Assets/About_papercut.png" alt="" />
      </div>
      
    </section>
  );
}

export default About;
