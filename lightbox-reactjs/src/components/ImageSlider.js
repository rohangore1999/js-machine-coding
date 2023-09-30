import React from "react";
import { images } from "../App";
import Slider from "./Slider";

// Constants

const ImageSlider = ({ active, handleNext, handlePrev }) => {
  return (
    <div className="image-slider-wrapper">
      {images.map((image, idx) => (
        <Slider
          image={image}
          idx={idx}
          active={active}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
