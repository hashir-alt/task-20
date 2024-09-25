import React from 'react';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <div className="sidebar-section">
                <h5 className="sidebar-title">249 Products</h5>
                <hr className="divider" />
                <div className="category-section">
                    <h3 className="category-title">Category</h3>
                    <div className="category-option">
                        <input type="checkbox" id="chairs" className="checkbox" />
                        <label htmlFor="chairs" className="checkbox-label">Chairs</label>
                    </div>
                    <div className="category-option">
                        <input type="checkbox" id="tables" className="checkbox" />
                        <label htmlFor="tables" className="checkbox-label">Tables</label>
                    </div>
                    <div className="category-option">
                        <input type="checkbox" id="cakes" className="checkbox" />
                        <label htmlFor="cakes" className="checkbox-label">Cake Plates</label>
                    </div>
                    <div className="category-option">
                        <input type="checkbox" id="wine" className="checkbox" />
                        <label htmlFor="wine" className="checkbox-label">Wine Glasses</label>
                    </div>
                    <div className="more-options">View More</div>
                </div>
                <hr className="divider" />
                <div className="color-section">
                    <div className="color-item color-red">
                        <div className="color-label">Red</div>
                    </div>
                    <div className="color-item color-green">
                        <div className="color-label">Green</div>
                    </div>
                    <div className="color-item color-blue">
                        <div className="color-label">Blue</div>
                    </div>
                    <div className="color-item color-yellow">
                        <div className="color-label">Yellow</div>
                    </div>
                    <div className="color-item color-fuchsia">
                        <div className="color-label">Fuchsia</div>
                    </div>
                    <div className="color-item color-aqua">
                        <div className="color-label">Aqua</div>
                    </div>
                    <div className="color-item color-maroon">
                        <div className="color-label">Maroon</div>
                    </div>
                    <div className="color-item color-olive">
                        <div className="color-label">Olive</div>
                    </div>
                    <div className="color-item color-teal">
                        <div className="color-label">Teal</div>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <div className="search-section">
                    <div className="search-group">
                        <input type="date" className="date-input" />
                        <input type="text" placeholder="Search" className="search-input" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        
                    </div>
                </div>
                <h2 className="section-title">Chairs</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="mg6.png" alt="Chair 1" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="mg2.png" alt="Chair 2" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="mg3.png" alt="Chair 3" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">Tables</h2>

                <div className="product-grid">
                    <div className="product-card">
                        <img src="hi 7.png" alt="Table 1" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="mg5.png" alt="Table 2" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="mg2.png" alt="Table 3" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">Cake Plates</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="mg3.png" alt="Cake Plate 1" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="hi8.png" alt="Cake Plate 2" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="mg2.png" alt="Cake Plate 3" className="product-image" />
                        <div className='dv'></div>
                        <div className="product-info">
                            <h3 className="product-name">The Aesthetic</h3>
                            <img className='cart' src="cart.png" alt="has" />
                            <p className="product-price">$39</p>
                            <p className="product-stock">In Stock: 40</p>
                        </div>
                    </div>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
            <footer className="footers-section">
                <footer className="footers">
                    <div className="top-section">
                        <img src="5.png" alt="Footers" />
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
                            Privacy Policy
                        </div>
                    </div>
                </footer>
                
                <div className="bottom-section">
                    <div className="copyright">
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Pricing;
