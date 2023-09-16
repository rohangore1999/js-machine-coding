import React, { useEffect, useState } from "react";

// Styles
import "../index.css";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevstate) => (prevstate + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div className="carousel-img">
      {images.map((image, idx) => (
        <div className={`${currentImage === idx ? `active` : ""} image`}>
          <img width="1000" alt={image.caption} src={image.image_url} />
          <p className="carousel-caption">{image.caption}</p>
        </div>
      ))}

      <div className="carousel-btn">
        {<p onClick={handlePrevClick}>&lt;</p>}
        <p onClick={handleNextClick}>&gt;</p>
      </div>
    </div>
  );
};

export default Carousel;
