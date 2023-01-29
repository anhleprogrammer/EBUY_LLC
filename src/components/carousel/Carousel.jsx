import React, { useState, useEffect } from "react";
import "./carousel.styles.scss";
function Carousel({ img }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
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
    <div
      className="carousel-container"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="img-container">{slides[index]}</div>
      <p className="shopnow-container">Shop Now</p>

      <p
        onClick={() => {
          if (index == 0) setIndex(3);
          else setIndex(index - 1);
        }}
        className="left"
        style={{ display: hover ? "block" : "none" }}
      >
        &lt;
      </p>
      <p
        onClick={() => setIndex((index + 1) % slides.length)}
        className="right"
        style={{ display: hover ? "block" : "none" }}
      >
        &gt;
      </p>
    </div>
  );
}

export default Carousel;
