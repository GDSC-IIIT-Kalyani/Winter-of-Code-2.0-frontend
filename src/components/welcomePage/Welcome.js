import React from "react";
import "./Welcome.css";
import WOClogo from "../../assets/images/WOC_Logo.png";
import GDSClogo from "../../assets/images/GDSC_Logo.png";

const Welcome = () => {
  return (
    <section class="Welcome">
        <div class="icon1">
            <img src={WOClogo} class="ic1" />
        </div>
        <div class="icon2">
            <img src={GDSClogo} class="ic2">Developer Student Clubs</img>
        </div>
        <div class="text1">
            <p>Welcome to <br/><b class="stu_dev">Winter of Code</b></p>
        </div>
        <div class="text2">
            <p>Register and Submit Proposal</p>
            <a href="https://www.google.co.in" target="_blank" class="button">Student</a>
            <a href="https://www.google.co.in" target="_blank" class="button">Mentor</a>
        </div>
    </section>
  );
};

export default Welcome;