import React from "react";
import Slider from "react-slick";
import Heading from "../../common/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const Hero = () => {
  const carouselSettings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of the carousel
  };

  return (
    <section className="hero">
      <Slider {...carouselSettings}>
        {/* Slide 1 */}
        <div className="carousel-slide1">
          <div className="container-hero">
            <div className="content-hero">
              <Heading title="Luxurious Creative and Comfortable Interiors" subtitle="Innovative Designs, Personalized for You" />
              {/* Your form or other content can be added here */}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide2" >
          <div className="container-hero">
            <div className="content-hero">
              <Heading title="Elegant and Modern Living Spaces" subtitle="Exceptional Designs Tailored to Your Lifestyle" />
              {/* Your form or other content can be added here */}
            </div>
          </div>
        </div>
             {/* Slide 3 */}
             <div className="carousel-slide3" >
          <div className="container-hero">
            <div className="content-hero">
              <Heading title="Creating Spaces that Reflect Your Unique Style" subtitle="Sleek and Stylish Interiors" />
              {/* Your form or other content can be added here */}
            </div>
          </div>
        </div>
             {/* Slide 4 */}
             <div className="carousel-slide4">
          <div className="container-hero">
            <div className="content-hero">
              <Heading title="Contemporary Elegance Timeless Appeal" subtitle="Crafting Interiors that Stand the Test of Time" />
              {/* Your form or other content can be added here */}
            </div>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </section>
  );
};

export default Hero;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Heading from '../../common/Heading';
// import './hero.css';

// import banner from '../../../images/banner.png';
// import banner2 from '../../../images/banner2.jpg';
// import banner3 from '../../../images/banner3.jpg';

// const CarouselSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // Change the speed as needed
//   };

//   const images = [banner, banner2, banner3]; // Using the imported image files

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className='carousel-item' style={{ backgroundImage: `url(${image})` }}>
//           <div className='container'>
//             <Heading
//               title='Luxurious Creative and Comfortable Interiors'
//               subtitle='Find new & featured property located in your local city.'
//             />
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <CarouselSection />
//       </section>
//     </>
//   );
// };

// export default Hero;

