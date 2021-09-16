import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMobView, setIsMobView] = useState(false);
  const [isCrossBurger, setIsCrossBurger] = useState(false);

  const handleHamburgerClick = (event) => {
    setIsMobView(!isMobView);
    setIsCrossBurger(!isCrossBurger);
    const nav_links = document.querySelectorAll(".navBar_link-item");
    nav_links.forEach((link, number, event) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `fade 0.5s ease forwards ${number / 7 + 0.2}s`;
    });
  };

  return (
    <nav className="navBar">
      <div className="navBar_container">
        <ul className={`navBar_links ${isMobView ? "mob-view" : null}`}>
          <li className="navBar_link-item">
            <a href="####">Home</a>
          </li>
          <li className="navBar_link-item">
            <a href="####">About</a>
          </li>
          <li className="navBar_link-item">
            <a href="####">Timeline</a>
          </li>
          <li className="navBar_link-item">
            <a href="####">Sponsors</a>
          </li>
          <li className="navBar_link-item">
            <a href="####">Speakers</a>
          </li>
          <li className="navBar_link-item">
            <a href="####">Projects</a>
          </li>
          <li className="navBar_link-item">
            <a href="####">Contributed by</a>
          </li>
        </ul>
        <div
          className={`navBar_hamburger ${
            isCrossBurger ? "cross-burger" : null
          }`}
          onClick={handleHamburgerClick}
        >
          <div className="navBar_line1"></div>
          <div className="navBar_line2"></div>
          <div className="navBar_line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
