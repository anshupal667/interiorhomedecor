import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // ...
    closeModal(); // Close modal after form submission
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you grow your career and growth.</p>
            </div>
            <button className='btn5' onClick={openModal}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className='modal-wrapper'>
          <div className='modal'>
            <span className='close' onClick={closeModal}>&times;</span>
            <h2>Contact Form</h2>
            <form id='contactForm' onSubmit={handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' required />

              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />

              <label htmlFor='phone'>Phone Number:</label>
              <input type='tel' id='phone' name='phone' required />

              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' rows='4' required></textarea>

              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      )}

      <footer className='footer' >
        <div className='container'>
          <div className='box'>
            <h3>CONTACT US</h3>
            <ul>
              <li>Office & Factory: Plot No. 49, Sector-31, Site-4, Greater Noida</li>
              <li>Head Office: 6B, 101, Vrindavan Vistar Yojna, Lucknow</li>
              <li>Email: info@adventinfratech.com</li>
              <li>Contact: +91 120 420 3892</li>
              <li>
              <div className='map-container'>
                  <iframe
                    className='map-iframe'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28044.415970689367!2d77.5212096277884!3d28.476434500210206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc03da9eb2413%3A0xcaf03ad7dc15cc31!2s49%2C%20Surajpur%20Site%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310%2C%20India!5e0!3m2!1sen!2sus!4v1628475097905!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>

          {footer.map((val) => (
            <div className='box' key={val.title}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className='legal'>
        <span>© Copyright 2024. All Rights Reserved by Advent Infratech</span>
      </div>
    </>
  );
};

export default Footer;
