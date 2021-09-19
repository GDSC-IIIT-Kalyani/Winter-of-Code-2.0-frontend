import React from "react";
import "./StudentDetails.css";
const StudentDetails = () => {
  return (
    <div>
      <header>
        <h1>Contact form</h1>
      </header>
      <div id="form">
        <div className="fish" id="fish"></div>
        <div className="fish" id="fish2"></div>
        <div className="fish" id="fish3"></div>
        <form id="waterform" method="post">
          <div class="formgroup" id="name-form">
            <label for="name">Your name*</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="formgroup" id="email-form">
            <label for="email">Your e-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail"
            />
          </div>
          <div className="formgroup" id="phone-form">
            <label for="phone">Your phone number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
            />
          </div>
          <div className="formgroup" id="github-form">
            <label for="github">Your github profile link*</label>
            <input
              type="text"
              id="github"
              name="github"
              placeholder="Your github profile link"
            />
          </div>
          <div className="formgroup" id="linkedin-form">
            <label for="linkedin">Your LinkedIn profile link</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Your LinkedIn profile link"
            />
          </div>
          <div className="formgroup" id="twitter-form">
            <label for="twitter">Your twitter profile link</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              placeholder="Yout twitter profile link"
            />
          </div>
          <div className="formgroup" id="portfolio-form">
            <label for="portfolio">Your portfolio profile link</label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              placeholder="Your portfolio profile link"
            />
          </div>
          <div className="formgroup" id="others-form">
            <label for="others">Prev open source contribution link</label>
            <input
              type="text"
              id="others"
              name="others"
              placeholder="Open source contributions link"
            />
          </div>
          <div className="formgroup" id="join-form">
            <label for="join">Joining as*</label>
            <select id="join" name="join">
              <option value="">Joining as</option>
              <option value="mentor">Mentor</option>
              <option value="student">Student</option>
            </select>
          </div>
          <input type="submit" value="Send your message!"></input>
        </form>
      </div>
    </div>
  );
};
export default StudentDetails;
