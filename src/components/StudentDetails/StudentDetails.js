import React, { useState } from "react";
import "./StudentDetails.css";
const StudentDetails = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedIn: "",
    twitter: "",
    portfolio: "",
    openSourceWork: "",
    role: "",
  });

  const handleInputChange = (event) => {
    setStudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleStudentDetails = (event) => {
    event.preventDefault();
    console.log(studentData);
  };

  return (
    <div>
      <header>
        <h1 className='form_h1'>Registration Form</h1>
      </header>
      <div id="form">
        <div className="fish" id="fish"></div>
        <div className="fish" id="fish2"></div>
        <div className="fish" id="fish3"></div>
        <form id="waterform">
          <div class="formgroup" id="name-form">
            <label for="name">Your name*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={studentData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="email-form">
            <label for="email">Your e-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail"
              required
              value={studentData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="phone-form">
            <label for="phone">Your phone number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              required
              value={studentData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="github-form">
            <label for="github">Your github profile link*</label>
            <input
              type="text"
              id="github"
              name="github"
              placeholder="Your github profile link"
              value={studentData.github}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="linkedin-form">
            <label for="linkedin">Your LinkedIn profile link</label>
            <input
              type="text"
              id="linkedin"
              name="linkedIn"
              placeholder="Your LinkedIn profile link"
              value={studentData.linkedIn}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="twitter-form">
            <label for="twitter">Your twitter profile link</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              placeholder="Yout twitter profile link"
              value={studentData.twitter}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="portfolio-form">
            <label for="portfolio">Your portfolio profile link</label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              placeholder="Your portfolio profile link"
              value={studentData.portfolio}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="others-form">
            <label for="others">Prev open source contribution link</label>
            <input
              type="text"
              id="others"
              name="openSourceWork"
              placeholder="Open source contributions link"
              value={studentData.openSourceWork}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="join-form">
            <label for="join">Joining as*</label>
            <select
              id="join"
              name="role"
              required
              value={studentData.role}
              onChange={handleInputChange}
            >
              <option value="none">Joining as</option>
              <option value="mentor">Mentor</option>
              <option value="student">Student</option>
            </select>
          </div>
          <input
            type="submit"
            value="Submit details!"
            onClick={handleStudentDetails}
          ></input>
        </form>
      </div>
    </div>
  );
};
export default StudentDetails;
