import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Add your CSS file here

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <nav className="sidebar">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          {/* Add more sidebar links as needed */}
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;