import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2 className="settings-heading">Change Your Password</h2>
      <p className="current-email">
        Your current email address is: <Link to="/profile" className="email-link">user@example.com</Link>
      </p>
      <div className="input-row">
        <label htmlFor="current-password">Current Password</label>
        <TextField
          id="current-password"
          className="input-field"
          variant="outlined"
          fullWidth
          type="password"
          placeholder="Enter your current password"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="new-password">New Password</label>
        <TextField
          id="new-password"
          className="input-field"
          variant="outlined"
          fullWidth
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="confirm-new-password">Confirm Password</label>
        <TextField
          id="confirm-new-password"
          className="input-field"
          variant="outlined"
          fullWidth
          type="password"
          placeholder="Confirm your new password"
          value={confirmNewPassword}
          onChange={handleConfirmNewPasswordChange}
        />
      </div>
      <div className="center-content">
        <h3 className="password-requirements-heading">Password Requirements</h3>
        <ul className="password-requirements">
          <li>Minimum 8 characters</li>
          <li>At least 1 lowercase letter</li>
          <li>At least 1 uppercase letter</li>
          <li>At least 1 number</li>
        </ul>
        <Button className='bt-1' variant="contained" style={{ backgroundColor: '#533C56', color: 'white', height: '22%' }}>
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default Settings;