import React from "react";
import "./MadeBy.css";
import MadeByIMG from "./MadeBy.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function MadeBy(props) {
  return (
    <section id="MadeBy">
      Contributed by
      <div className="flex">
        <div className="card">
          <div className="imgBx">
            <img src={MadeByIMG} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                Alina Smith
                <br />
                <span>Senior Designer</span>
              </h2>
              <ul className="sci">
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={MadeByIMG} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                Alina Smith
                <br />
                <span>Senior Designer</span>
              </h2>
              <ul className="sci">
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={MadeByIMG} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                Alina Smith
                <br />
                <span>Senior Designer</span>
              </h2>
              <ul className="sci">
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MadeBy;
