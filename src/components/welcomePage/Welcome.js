import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="Welcome">
        <div className="icon1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" className="ic1" />
        </div>
        <div className="icon2">
            <img src="https:/dscfau.com/static/media/logo.ade0843b.png" className="ic2">Developer Student Clubs</img>
        </div>
        <div className="text1">
            <p>Welcome to <br/><b className="stu_dev">Winter of Code</b></p>
        </div>
        <div className="text2">
            <p>Register and Submit Proposal</p>
            <a href="https://www.google.co.in" target="_blank" className="button">Student</a>
            <a href="https://www.google.co.in" target="_blank" className="button">Mentor</a>
        </div>
    </section>
  );
};

export default Welcome;