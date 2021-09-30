import React, { useState } from "react"
import Slider from 'react-slick'
import styled from 'styled-components'
import "./DevTeam.css";
import ProfileCard from "../UI/profileCard/ProfileCard";
import developers from "./teamData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Next = ({onClick}) => {
  return (
    <div className="next-arrow" onClick={onClick}>
      <FaArrowRight/>
    </div>
  )
}

const Previous = ({onClick}) => {
  return (
    <div className="previous-arrow" onClick={onClick}>
      <FaArrowLeft/>
    </div>
  )
}

const SliderContainer = styled.div`
  width: 100vw;
`

function DevTeam() {
  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    pauseOnHover: true,
    lazyLoad: true,
    infinite: true,
    speed: 900,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    focusOnSelect: true,
    slidestoScroll: 3,
    autoplay: true,
    nextArrow: <Next onClick/>,
    prevArrow: <Previous onClick/>,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <SliderContainer>
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
