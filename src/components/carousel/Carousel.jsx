import React, { useState, useEffect } from "react";
import "./carousel.styles.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
function Carousel({ img }) {
  const [index, setIndex] = useState(0);
  const slides = [
    <img src="./home0.jpg" alt="" />,
    <img src="./home1.jpg" alt="" />,
    <img src="./home2.jpg" alt="" />,
    <img src="./home3.jpg" alt="" />,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className="carousel-container">
      <div className="img-container">
        {/* <img src="./home1.jpg" alt="" /> */}
        {slides[index]}
      </div>
      <p className="shopnow-container">Shop Now</p>

      {/* <p className="text-container">Up to 50% OFF</p> */}

      <p className="left">&lt;</p>
      <p className="right">&gt;</p>
    </div>
  );
}

export default Carousel;
