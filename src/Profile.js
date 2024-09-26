import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './Profile.css';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [code, setCode] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  // Load saved profile data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('profileData')) || {};
    setProfileImage(savedData.profileImage || null);
    setFirstName(savedData.firstName || '');
    setLastName(savedData.lastName || '');
    setUsername(savedData.username || '');
    setEmail(savedData.email || '');
    setStatus(savedData.status || '');
    setCode(savedData.code || '');
    setContact(savedData.contact || '');
    setAddress(savedData.address || '');
    setCity(savedData.city || '');
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        saveToLocalStorage('profileImage', reader.result); // Save image to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    if (isEditable) {
      // Save all profile data to localStorage when saving
      const profileData = {
        profileImage,
        firstName,
        lastName,
        username,
        email,
        status,
        code,
        contact,
        address,
        city,
      };
      localStorage.setItem('profileData', JSON.stringify(profileData));
    }
    setIsEditable((prevEditable) => !prevEditable);
  };

  const saveToLocalStorage = (key, value) => {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
    profileData[key] = value;
    localStorage.setItem('profileData', JSON.stringify(profileData));
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value);
    saveToLocalStorage(e.target.id, value); 
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        
        <div className="profile-top-box">
          <div className="profile-image-container">
            <label htmlFor="profileImageInput" className="profile-image-label">
              <img
                src={profileImage || 'default-profile.png'}
                alt="Profile"
                className="profile-image"
              />
              <span className="image-upload-icon">+</span>
            </label>
            <input
              type="file"
              id="profileImageInput"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="profile-name">
            <h2>{firstName} {lastName}</h2>
          </div>
          <button className="edit-profile-btn" onClick={toggleEdit}>
            {isEditable ? 'Save' : 'Edit Profile'}
          </button>
        </div>

       
        <div className="profile-info-box">
          <div className="input-row">
            <div className="input-group">
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={firstName}
                onChange={handleInputChange(setFirstName)}
              />
            </div>
            <div className="input-group">
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={lastName}
                onChange={handleInputChange(setLastName)}
              />
            </div>
          </div>

          <div className="input-row full-width">
            <div className="input-group">
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={username}
                onChange={handleInputChange(setUsername)}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={email}
                onChange={handleInputChange(setEmail)}
              />
            </div>
            <div className="input-group">
              <TextField
                id="status"
                label="Status"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={status}
                onChange={handleInputChange(setStatus)}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <TextField
                id="code"
                label="Code"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={code}
                onChange={handleInputChange(setCode)}
              />
            </div>
            <div className="input-group">
              <TextField
                id="contact"
                label="Contact Us"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={contact}
                onChange={handleInputChange(setContact)}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={address}
                onChange={handleInputChange(setAddress)}
              />
            </div>
            <div className="input-group">
              <TextField
                id="city"
                label="City"
                variant="outlined"
                fullWidth
                disabled={!isEditable}
                value={city}
                onChange={handleInputChange(setCity)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
