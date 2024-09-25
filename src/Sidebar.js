import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h7 className="sidebar-heading">Settings</h7>
      <ul className="sidebar-menu">
        <li>
          <button className="menu-btn" onClick={() => navigate('/profile')}>
            <PersonIcon className="menu-btn-icon" /> My Profile
          </button>
        </li>
        <li>
          <button className="menu-btn" onClick={() => navigate('/bookings')}>
            <CalendarMonthIcon className="menu-btn-icon" /> Bookings
          </button>
        </li>
        <li>
          <button className="menu-btn" onClick={() => navigate('/settings')}>
            <SettingsIcon className="menu-btn-icon" /> Settings
          </button>
        </li>
        <li>
          <button className="menu-btn" onClick={() => navigate('/contact')}>
            <CallIcon className="menu-btn-icon" /> Contact Us
          </button>
        </li>
      </ul>
      <p className="logout-text" onClick={handleLogout}>
        <LogoutIcon className="menu-btn-icon" /> Logout
      </p>
    </div>
  );
};

export default Sidebar;
