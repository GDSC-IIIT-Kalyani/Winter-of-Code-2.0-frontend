import React, { useState } from "react"
import Slider from 'react-slick'
import styled from 'styled-components'
import "./DevTeam.css"
import ProfileCard from "../UI/profileCard/ProfileCard";
import developers from "./teamData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PreviousArrow = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  flex-direction: column;
  justify-content: center;
  display: flex;
`

const NextArrow = styled.div`
  background: transparent;
  padding-left: 1em;
  padding-right: 2em;
  justify-content: center;
  flex-direction: column;
  display: flex;
`

const Previous = ({onClick}) => {
  return (
    <PreviousArrow>
      <FaArrowLeft/>
    </PreviousArrow>
  )
}

const Next = ({onClick}) => {
  return (
    <NextArrow>
      <FaArrowRight/>
    </NextArrow>
  )
}

const SliderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #3f1654e7;
  width: 100vw;
`

function DevTeam() {
  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    className: 'slider',
    // pauseOnHover: true,
    lazyLoad: true,
    infinite: true,
    speed: 900,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 4,
    focusOnSelect: true,
    slidestoScroll: 3,
    autoplay: true,
    dots: true,
    // nextArrow: <Next onClick/>,
    // prevArrow: <Previous onClick/>,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <SliderContainer>
      <h1 className="tittle">Our Developers</h1>
      <Slider {...settings}>
        {developers.map((developer, index) => (
          <ProfileCard
            highLighted={imageIndex === index}
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
