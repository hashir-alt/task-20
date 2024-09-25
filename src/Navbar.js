import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from './AuthContext'; // Import the authentication context

function Navbar() {
    const { isAuthenticated } = useAuth(); // Get authentication status

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className='img' src="logrem.png" alt="Logo" />
            </div>
            <ul className="navbar-links">
                {isAuthenticated && (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </>
                )}
            </ul>
            <div className="navbar-buttons">
                {!isAuthenticated ? (
                    <>
                        <Link to="/login" className="btn">Login</Link>
                        <Link to="/signup" className="btn">Signup</Link>
                    </>
                ) : (
                    <Link to="/profile" className="btn">Profile</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
