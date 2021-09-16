import React from "react";
import "./NavBar.css";

const NavBar = () => {

//   const hamburger = document.querySelector(".navBar_hamburger");
//   const navbar = document.querySelector(".navBar_links");
//   const nav_links = document.querySelectorAll(".navBar_link-item");

//   hamburger.addEventListener("click", () => {
//     navbar.classList.toggle("mob-view");
//     nav_links.forEach((link, number) => {
//       if (link.style.animation) link.style.animation = "";
//       else link.style.animation = `fade 0.5s ease forwards ${number / 7 + 0.2}s`;
//     });
//     hamburger.classList.toggle('cross-burger');
// });

  return( 
    <nav className="navBar">
        <div class="navBar_container">
            <ul class = "navBar_links">
                <li class = "navBar_link-item"><a href="####">HOME</a></li>
                <li class = "navBar_link-item"><a href="####">ABOUT</a></li>
                <li class = "navBar_link-item"><a href="####">TIMELINE</a></li>
                <li class = "navBar_link-item"><a href="####">SPONSORS</a></li>
                <li class = "navBar_link-item"><a href="####">SPEAKERS</a></li>
                <li class = "navBar_link-item"><a href="####">PROJECTS</a></li>
                <li class = "navBar_link-item"><a href="####">CONTRIBUTED BY</a></li>
            </ul>
            <div class="navBar_hamburger">
                <div class="navBar_line1"></div>
                <div class="navBar_line2"></div>
                <div class="navBar_line3"></div>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
