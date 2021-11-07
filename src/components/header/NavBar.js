import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ navLinkColor }) => {
  const [isMobView, setIsMobView] = useState(false);
  const [isCrossBurger, setIsCrossBurger] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

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
  const handleScrollDown = () => {
    if (window.scrollY >= 80) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  const handleNavClick = (event) => {
    handleHamburgerClick(event);
  };

  window.addEventListener("scroll", handleScrollDown);

  return (
    <nav
      className={`navBar ${isScrollDown ? "navBar_scroll" : null}`}
      onScroll={handleScrollDown}
    >
      <div className="navBar_container">
        <ul className={`navBar_links ${isMobView ? "mob-view" : null}`}>
          <li className="navBar_link-item home_comp">
            <a
              style={{ color: navLinkColor }}
              href="/"
              onClick={handleNavClick}
            >
              Home
            </a>
          </li>
          <li className="navBar_link-item home_mob">
            <a
              style={{ color: navLinkColor }}
              href="/"
              onClick={handleNavClick}
            >
              Home
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#About"
              onClick={handleNavClick}
            >
              About
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/projects"
              onClick={handleNavClick}
            >
              Projects
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#timeline"
              onClick={handleNavClick}
            >
              Timeline
            </a>
          </li>
          <li className="navBar_link-item">
            <a
              style={{ color: navLinkColor }}
              href="/#sponsors"
              onClick={handleNavClick}
            >
              Sponsors
            </a>
          </li>
          {/* <li className="navBar_link-item">
            <a style={{ color: navLinkColor }} href="#speakers">
              Speakers
            </a>
          </li> */}

          <li className="navBar_link-item">
            <a style={{ color: navLinkColor }}
            href="/#developer"
            onClick={handleNavClick}
            >
              Our Team
            </a>
          </li>

          <li className="navBar_link-item">
            <a style={{ color: navLinkColor }} href="/#faq" onClick={handleNavClick}>
              FAQs
            </a>
          </li>

          {/* <li className="navBar_link-item">
            <a href="/register"> Student</a>
          </li> */}
          {/* {userLoggedIn ? (
            <li className="navBar_link-item">
              <a href="/login">Logout</a>
            </li>
          ) : (
            <li className="navBar_link-item">
              <a href="/login">Login</a>
            </li>
          )} */}
        </ul>
        <div className="hamburger_container">
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
      </div>
    </nav>
  );
};

export default NavBar;
