import React, { useState } from "react";
import InputComponent from "../UI/input/InputComponent";
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
    question1: "",
    question2: "",
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
      <header className="form_header">
        <h1 className="form_h1">Registration Form</h1>
      </header>
      <div id="form">
        <div className="fish" id="fish"></div>
        <div className="fish" id="fish2"></div>
        <div className="fish" id="fish3"></div>
        <form id="waterform">
          <div class="formgroup" id="name-form">
            <InputComponent
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={studentData.name}
              setValue={handleInputChange}
              requiredStatus={true}
            />
          </div>
          <div className="formgroup" id="email-form">
            <InputComponent
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail"
              value={studentData.email}
              setValue={handleInputChange}
              requiredStatus={true}
            />
          </div>
          <div className="formgroup" id="phone-form">
            <InputComponent
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={studentData.phone}
              setValue={handleInputChange}
              requiredStatus={true}
            />
          </div>
          <div className="formgroup" id="github-form">
            <InputComponent
              type="text"
              id="github"
              name="github"
              placeholder="Your github profile link"
              value={studentData.github}
              setValue={handleInputChange}
            />
          </div>
          <div className="formgroup" id="linkedin-form">
            <InputComponent
              type="text"
              id="linkedin"
              name="linkedIn"
              placeholder="Your LinkedIn profile link"
              value={studentData.linkedIn}
              setValue={handleInputChange}
            />
          </div>
          <div className="formgroup" id="twitter-form">
            <InputComponent
              type="text"
              id="twitter"
              name="twitter"
              placeholder="Yout twitter profile link"
              value={studentData.twitter}
              setValue={handleInputChange}
            />
          </div>
          <div className="formgroup" id="portfolio-form">
            <InputComponent
              type="text"
              id="portfolio"
              name="portfolio"
              placeholder="Your portfolio profile link"
              value={studentData.portfolio}
              setValue={handleInputChange}
            />
          </div>
          <div className="formgroup" id="others-form">
            <InputComponent
              type="text"
              id="others"
              name="openSourceWork"
              placeholder="Open source contributions link"
              value={studentData.openSourceWork}
              setValue={handleInputChange}
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
          <div className="formgroup" id="question1-form">
            <label for="question1">Question1 *</label>
            <textarea
              type="textarea"
              id="question1"
              name="question1"
              placeholder="write your answer in not more than 200 words"
              value={studentData.question1}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup" id="question2-form">
            <label for="question2">Question2 *</label>
            <textarea
              type="textarea"
              id="question2"
              name="question2"
              placeholder="write your answer in not more than 200 words"
              value={studentData.question2}
              onChange={handleInputChange}
            />
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
