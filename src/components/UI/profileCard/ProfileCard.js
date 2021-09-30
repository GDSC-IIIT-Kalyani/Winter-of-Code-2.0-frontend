import React from "react";
import "./Card.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Card = ({ name, image, role, socialMedia }) => {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={image} alt="profile pic of developer" />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {name}
            <br />
            <span>{role}</span>
          </h2>
          <ul className="sci">
            <li>
              <a href={socialMedia.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href={socialMedia.twitter} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href={socialMedia.instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
