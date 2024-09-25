import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS for this component

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isChecked, setIsChecked] = useState(false); // Checkbox state
    const navigate = useNavigate(); // For navigation

    const validateFields = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = 'First Name is required';
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!number) newErrors.number = 'Number is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSignup = () => {
        if (!validateFields()) {
            return;
        }

        // Save user credentials to localStorage
        localStorage.setItem('user', JSON.stringify({ firstName, lastName, number, email, password }));
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2 className="signup-heading">Sign Up</h2>
                <p className="signup-subheading">Enter your credentials to continue</p>

                <div className="input-row">
                    <div className="input-container">
                        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="input-field first-name"
                        />
                    </div>
                    <div className="input-container">
                        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="input-field last-name"
                        />
                    </div>
                </div>

                <div className="input-row">
                    <div className="input-container">
                        {errors.number && <p className="error-message">{errors.number}</p>}
                        <input
                            type="text"
                            placeholder="Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="input-field number"
                        />
                    </div>
                    <div className="input-container">
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field email"
                        />
                    </div>
                </div>

                <div className="input-container">
                    {errors.password && <p className="error-message">{errors.password}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field password"
                    />
                </div>

                <div className="input-container">
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-field confirm-password"
                    />
                </div>

                <div className="terms">
                    <input
                        type="checkbox"
                        id="terms"
                        className="terms-checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label htmlFor="terms" className="terms-label">
                        I agree to the <span className="terms-link">terms and conditions</span>
                    </label>
                </div>

                <button
                    className="create-account-btn"
                    onClick={handleSignup}
                    disabled={!isChecked} // Disable button if checkbox is not checked
                >
                    Create Account
                </button>

                <p className="login-link">
                    Already have an account? <Link to="/login" className="login-link-text">Login</Link>
                </p>

                <p className="or-login">or login with</p>
                <div className="social-buttons">
                    <button className="social-btn facebook-btn">Facebook</button>
                    <button className="social-btn google-btn">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
