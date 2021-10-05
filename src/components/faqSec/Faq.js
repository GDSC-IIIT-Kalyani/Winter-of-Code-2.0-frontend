import React from "react";
import "./faq.css";

const Faq = () => {
  const faq = document.querySelectorAll(".faq-sec-item");

faq.forEach((faq_sec_item) => {
  faq_sec_item.addEventListener("click", () => {
    faq_sec_item.classList.toggle("faq-active");
  });
});

  return (
    <div className="faq-sec">
      <div className="faq-sec-container">
        <div className="faq-sec-heading">Frequently asked questions (FAQs)</div>
        <div className="faq-sec-item">
          <div className="faq-sec-ques">
            <div className="arrow">&#129121;</div>
            <div className="ques">What is WoC?</div>
          </div>
          <div className="answer">
            <p>
            This is an open source program for 2 months, rules almost similar to that of GSoC.
            </p>
          </div>
        </div>
        <div className="faq-sec-item">
          <div className="faq-sec-ques">
            <div className="arrow">&#129121;</div>
            <div className="ques">Who can participate?</div>
          </div>
          <div className="answer">
            <p>
             Literally anyone, student(graduate, undergraduate, high-school), professional, and almost anyone we forgot to mention here.
            </p>
          </div>
        </div>
        <div className="faq-sec-item">
          <div className="faq-sec-ques">
            <div className="arrow">&#129121;</div>
            <div className="ques">What are Organisations?</div>
          </div>
          <div className="answer">
            <p>
            They are open-source developer organisations that maintain amazing open-source software for everyone to use and will be accepting your proposals whilst also mentoring you throughout
            </p>
          </div>
        </div>
        <div className="faq-sec-item">
          <div className="faq-sec-ques">
            <div className="arrow">&#129121;</div>
            <div className="ques">What is a proposal? How to send a proposal?</div>
          </div>
          <div className="answer">
            <p>
            Proposals are documents wherein students will suggest what they wish to work on during the 2-month program. Some organizations allow students to propose work that is not in their repository list. Students who get selected will receive further steps to submit proposals. We will have a proposal writing session for the same.
            </p>
          </div>
        </div>
        <div className="faq-sec-item">
          <div className="faq-sec-ques">
            <div className="arrow">&#129121;</div>
            <div className="ques">How to get selected?</div>
          </div>
          <div className="answer">
            <p>
            Submit a good application 🙂 Make sure your essays are good, that is how you move ahead. We will have  (i) An initial scre
            </p>
          </div>
        </div>
        <div className="faq-sec-item">
          <div className="faq-sec-ques">
            <div className="arrow">&#129121;</div>
            <div className="ques">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              consequatur amet modi cum! Iusto nam laboriosam aspernatur dolorem
              sequi repudiandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;