import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styles.css'; // Assuming you have a CSS file for additional styles

const Contact = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="background" style={{ backgroundImage: 'url(1.png)' }}>
        <div className="content-center">
          <h1 className="about">About Us</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="btn-see-more">See More</button>
        </div>
      </div>

      {/* Divider with Image */}
      <div className="line-with-image">
        <hr className="divider" />
        <img src="4.png" alt="Decoration" />
      </div>

      {/* About Us Section */}
      <div className="container about-us">
        <h2 className="about-us-heading">About Us</h2>
        <div className="about-us-box">
          {/* Left-aligned Paragraph */}
          <p className="about-us-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>

          {/* Image aligned to the left, and mission on the right */}
          <img src="2.png" alt="About Us" className="about-us-image" />
          
          {/* Our Mission Section */}
          <div className="our-mission-heading-container">
            <h3 className="our-mission-heading">Our Mission</h3>
            <div className="our-mission-line"></div>
          </div>
          <p className="mission-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>

          {/* Why Choose Us Section */}
          <div className="why-choose-heading-container">
            <h3 className="why-choose-heading">Why Choose Us</h3>
            <div className="why-choose-line"></div>
          </div>
          <ul className="bullet-points">
            <li>
              <strong id='bul-1'>Expertise:</strong> 
              <p id='para-1'>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam.</p>
            </li>
            <li>
              <strong id='bul-1'>Personalized:</strong> 
              <p id='para-1'>Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam.</p>
            </li>
            <li>
              <strong id='bul-1'>Innovation:</strong>  
              <p id='para-1'>Integer nec odio. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam. Praesent libero. Sed cursus ante dapibus diam.</p>
            </li>
          </ul>

          {/* Our Vision Section */}
          <div className="our-vision-heading-container">
            <h3 className="our-vision-heading">Our Vision</h3>
            <div className="our-vision-line"></div>
          </div>
          <p className="final-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <div className="contact-us-box">
          <h2 className="contact-us-heading">Contact Us</h2>
          <div className="contact-us-content">
            <div className="contact-info">
              <h1 id='tou-1'>LETS GET IN.. <span className="highlight">TOUCH!</span></h1>
              <p className="contact-us-description">
                LoremLorem   ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="contact-form-container">
              <img src="3.png" alt="Contact Us" className="contact-us-image" />
              <form noValidate autoComplete="off" className="contact-us-form">
                NAME<input type="text" placeholder="Name" className="contact-input" />
                EMAIL<input type="email" placeholder="Email" className="contact-input" />
                Message<input placeholder="Message" className="contact-input" ></input>
                <button type="submit" className="btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="top-section">
          <img src="5.png" alt="Footer " />
          <div className="subscribe-container">
            <input type="email" placeholder="Enter your mail" />
            <button>Subscribe</button>
          </div>
          <div className="navigation-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#contacts">Contacts</a>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="bottom-section">
          <div className="social-media-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="copyright">
            Copyright © 2024
          </div>
          <div className="privacy-policy">
            privacy policy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;