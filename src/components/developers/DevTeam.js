import React, { useState } from "react"
import Slider from 'react-slick'
import styled from 'styled-components'
import "./DevTeam.css"
import ProfileCard from "../UI/profileCard/ProfileCard";
import developers from "./teamData";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const PreviousArrow = styled.div`
//   padding-left: 1em;
//   padding-right: 1em;
//   flex-direction: column;
//   justify-content: center;
//   display: flex;
// `

// const NextArrow = styled.div`
//   background: transparent;
//   padding-left: 1em;
//   padding-right: 2em;
//   justify-content: center;
//   flex-direction: column;
//   display: flex;
// `

// const Previous = ({onClick}) => {
//   return (
//     <PreviousArrow>
//       <FaArrowLeft/>
//     </PreviousArrow>
//   )
// }

// const Next = ({onClick}) => {
//   return (
//     <NextArrow>
//       <FaArrowRight/>
//     </NextArrow>
//   )
// }

const SliderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #3f1654e7;
  width: 100vw;
`

function DevTeam() {
  var x = window.matchMedia("(max-width: 700px)")
  var y = window.matchMedia("(max-width: 865px)")
  var z = window.matchMedia("(max-width: 920px)")
  function showSlides() {
    if (z.matches) {
      if (!y.matches) {
        return 3
      } else if (!x.matches) {
        return 2
      } else {
        return 1
      }
    } else {
      return 4
    }
  }
  const [settings, setSettings] = useState({
    className: 'slider',
    // pauseOnHover: true,
    lazyLoad: true,
    infinite: true,
    speed: 900,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: showSlides(x, y, z),
    focusOnSelect: true,
    slidestoScroll: 3,
    autoplay: true,
    dots: true,
    // nextArrow: <Next onClick/>,
    // prevArrow: <Previous onClick/>,
  })
  x.addListener(UpdateSettings)
  y.addListener(UpdateSettings)
  z.addListener(UpdateSettings)
  function UpdateSettings() {
    setSettings({
      className: 'slider',
      // pauseOnHover: true,
      lazyLoad: true,
      infinite: true,
      speed: 900,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: "20px",
      slidesToShow: showSlides(x, y, z),
      focusOnSelect: true,
      slidestoScroll: 3,
      autoplay: true,
      dots: true,
      // nextArrow: <Next onClick/>,
      // prevArrow: <Previous onClick/>,
    })
  }
  return (
    <SliderContainer>
      <h1 className="tittle">Our Developers</h1>
      <Slider {...settings}>
        {developers.map((developer, index) => (
          <ProfileCard
            name={developer.name}
            image={developer.image}
            role={developer.role}
            socialMedia={developer.socialMedia}
          />

        ))}
      </Slider>
    </SliderContainer>
    
  );
}

export default DevTeam;
