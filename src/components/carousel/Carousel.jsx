import React, { useState } from "react";
import "./carousel.styles.scss";
function Carousel() {
  const [slide, setSlide] = useState(0);
  return (
    <div className="carousel-container">
      <div className="img-container">
        <img src="./sale.jpg" alt="" />
      </div>
      <button className="left">a</button>
      <button className="right">b</button>
    </div>
  );
}

export default Carousel;
