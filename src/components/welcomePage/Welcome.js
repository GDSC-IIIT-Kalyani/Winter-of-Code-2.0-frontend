import React from "react";
import "./Welcome.css";
import WOClogo from "../../assets/images/WOC_Logo.png";
import GDSClogo from "../../assets/images/GDSC_Logo.png";

const Welcome = () => {
  return (
    <section className="Welcome">
      <div className="icon1">
        <img src={WOClogo} className="ic1" alt="" />
      </div>
      <div className="icon2">
        <img src={GDSClogo} className="ic2" alt=""></img>
        <span>Developer Student Clubs</span>
      </div>
      <div className="text1">
        <p>
          Welcome to <br />
          <b className="stu_dev">Winter of Code</b>
        </p>
      </div>
      <div className="text2">
        <p>Register and Submit Proposal</p>
        <a
          href="https://forms.gle/qXnG31bqMyb3jcTe6"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Welcome;
