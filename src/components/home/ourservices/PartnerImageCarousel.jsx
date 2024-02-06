import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './services.css'; // Import a CSS file for styling

const PartnerImageCarousel = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false} // Display carousel dots
      showStatus={false}
      centerMode={true}
      infiniteLoop={true}
      centerSlidePercentage={25} // Adjust the percentage to display four slides
      dynamicHeight={false} // Disable dynamic height to avoid layout issues
      autoPlay={true} // Enable auto-scroll
      interval={2000} // Set the interval in milliseconds (e.g., 3000ms or 3 seconds)
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-slide" style={{ height: "14vh", width: '14vw' }}>
          <img src={image.cover} alt={`Image ${index}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default PartnerImageCarousel;
