import React from 'react';
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-page">
        
            <section className="top-image-section">
                <img src="hi3.png" alt="Top" className="top-image" />
            </section>

            
            <section className="categories-section">
                <h2 className="section-heading">Our Categories</h2>
                <div className="card-container">
                    <div className="card">
                        <img src="hi4.png" alt="Wedding" />
                        <p className='p'>Wedding</p>
                    </div>
                    <div className="card">
                        <img src="hi5.png" alt="Birthday" />
                        <p className='p'>Birthday</p>
                    </div>
                    <div className="card">
                        <img src="h16.png" alt="Get Together" />
                        <p className='p'>Get Together</p>
                    </div>
                    <div className="card">
                        <img src="hi6.png" alt="Farewell" />
                        <p className='p'>Farewell</p>
                    </div>
                    <div className="card">
                        <img src="h17.png" alt="Bride" />
                        <p className='p'>Bride</p>
                    </div>
                    <div className="card">
                        <img src="hi8.png" alt="Anniversary" />
                        <p className='p'>Anniversary</p>
                    </div>
                </div>
            </section>

           
            <section className="special-moment-section">
                <img src="hi9.png" alt="Special Moment" className="special-moment-image" />
                <div className="special-moment-text">
                    <h2>MAKE THE MOVEMENT</h2>
                    <p id='p-12'>Loremnt ut labore et dolore magna aliqua magna aliqua aliqua.</p>
                    <button className='bl-1'>save</button>
                </div>
            </section>

           
            <section className="follow-us-section">
                <h2 className="section-1">Follow Us</h2>
                <p id='p-11'>Don't miss out on our updates - latest news and updates</p>
                <p id='p-13'>latest news and updates</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="scfb.png" alt="Facebook" /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="new.png" alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="scin.png" alt="Instagram" /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src="scyt.png" alt="YouTube" /></a>
                </div>
            </section>

            <section className="trending-packages-section">
                <h2 className="section-heading">Trending Packages</h2>
                <div className="package-cards">
                    <div className="package-card">
                        <img src="h12.png" alt="Package 1" />
                        <h3>Package 1</h3>
                        <p>Details about Package 1</p>
                    </div>
                    <div className="package-card">
                        <img src="hi10.png" alt="Package 2" />
                        <h3>Package 2</h3>
                        <p>Details about Package 2</p>
                    </div>
                    <div className="package-card">
                        <img src="hi11.png" alt="Package 3" />
                        <h3>Package 3</h3>
                        <p>Details about Package 3</p>
                    </div>
                </div>
            </section>

           
            <section className="blogs-section">
                <h2 className="section-heading">Our Blogs</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <img src="hi4.png" alt="Blog 1" />
                        <h3>WEEDING</h3>
                    </div>
                    <div className="blog-card">
                        <img src="h14.png" alt="Blog 2" />
                        <h3>BRIDE</h3>
                    </div>
                    <div className="blog-card">
                        <img src="hi8.png" alt="Blog 3" />
                        <h3>BIRTHDAY</h3>
                    </div>
                    <br></br>
                    <div className="blog-card">
                        <img src="hi 7.png" alt="Blog 3" />
                        <h3>WEEDING</h3>
                    </div>
                    <div className="blog-card">
                        <img src="h16.png" alt="Blog 3" />
                        <h3>BRIDE</h3>
                    </div>
                    <div className="blog-card">
                        <img src="hi6.png" alt="Blog 3" />
                        <h3>BIRTHDAY</h3>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="top-section">
                    <img src="5.png" alt="Footer" />
                    <div className="subscribe-container">
                        <input type="email" placeholder="Enter your mail" />
                        <button>Subscribe</button>
                    </div>
                    <div className="navigation-links">
                        <a href="/">Home</a>
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
                        Privacy Policy
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
