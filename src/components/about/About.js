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

    <div class="heading">WHAT IS WOC</div>
    <p class="subject">GDSC IIIT Kalyani brings to you, yet again, our open source program Winter of Code 2.0 with collaborative efforts from 10+ Google Developer Student Clubs. The program will last for a period of two months and will be based on the lines of GSoC. Student applicants will be required to send proposals to organisations to work on their open-source projects while their mentors evaluate them over a course of 2 months.</p>

    </section>
  );
}

export default About;
