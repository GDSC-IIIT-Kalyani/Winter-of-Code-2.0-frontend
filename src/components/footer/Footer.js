import React from "react";
import "./Footer.css";
import {FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaCopyright} from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="footer">
    <div className="contact">
      <a href="https://twitter.com/gdsciiitkalyani" target="_blank" className="icon twitter"><FaTwitter size = '5x'/></a>
      <a href="https://www.instagram.com/gdsciiitkalyani/" target="_blank" className="icon instagram"><FaInstagram size = '5x'/></a>
      <a href="https://www.linkedin.com/company/gdsc-iiit-kalyani/" target="_blank" className="icon linkedin"><FaLinkedin size = '5x'/></a>
      <a href="https://github.com/GDSC-IIIT-Kalyani" target="_blank" className="icon github"><FaGithub size = '5x'/></a>
    </div>
    <div className="copyright">
      <h2><FaCopyright/>  2021-22 GDSC IIIT Kalyani</h2>
    </div>
  </footer>
  );
};

export default Footer;
