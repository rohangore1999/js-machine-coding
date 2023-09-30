import React from "react";

const Slider = ({ active, idx, image, handleNext, handlePrev }) => {
  return (
    <div className={`slider ${active === idx ? "active" : ""}`}>
      <img alt={image.caption} src={image.image_url} />

      <div className="slider-nav-btn">
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
};

export default Slider;
