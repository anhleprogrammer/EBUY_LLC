import React, { useState } from "react";
import "./carousel.styles.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
function Carousel({ img }) {
  const [slide, setSlide] = useState(0);
  return (
    <div className="carousel-container">
      <div className="img-container">
        <img src="./home1.jpg" alt="" />
      </div>
      <p className="shopnow-container">Shop Now</p>

      {/* <p className="text-container">Up to 50% OFF</p> */}

      <p className="left">&lt;</p>
      <p className="right">&gt;</p>
    </div>
  );
}

export default Carousel;
