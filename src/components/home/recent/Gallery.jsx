// Gallery.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './propertyListed.css'

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ title, images }) => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  const galleryStyle = {
    position: 'relative',
    padding: "0 8%",
    marginTop:"2%",
    marginBottom:"2%",
  };

  const customArrowStyle = {
    position: 'absolute',
    top: '50%',
    // right:"0",
    transform: 'translateY(-50%)',
    width: '35px', // Adjust as needed
    height: '35px', // Adjust as needed
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust arrow background color
    borderRadius: '50%', // Make it circular
    display: 'flex',
    justifyContent: 'center',
    color: "white",
    alignItems: 'center',
    fontSize: '20px', // Adjust arrow icon size
  };

  let galleryRef;

  const handlePrevClick = () => {
    if (galleryRef) {
      galleryRef.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (galleryRef) {
      galleryRef.slideNext();
    }
  };

  return (
    <div style={galleryStyle}>
      <h3 style={{marginLeft:"2%", marginBottom:"0", }}>{title}</h3>

      <AliceCarousel
        mouseTracking
        items={images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} onDragStart={handleDragStart} role="presentation" />
          </div>
        ))}
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
        ref={(el) => (galleryRef = el)}
        stagePadding={{ paddingLeft: 50, paddingRight: 50 }}
      />
      <div style={{ ...customArrowStyle, left: "7%",  }} onClick={handlePrevClick}>
        &lt;
      </div>

      {/* Custom right arrow */}
      <div style={{ ...customArrowStyle, right: "7%" }} onClick={handleNextClick}>
        &gt;
      </div>

      {/* Custom left arrow */}
      
    </div>
  );
};

export default Gallery;
