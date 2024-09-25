import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            login({ email, password }); // Pass user data on login
            navigate('/');
            setEmail('');
            setPassword('');
        } else {
            alert('Invalid email or password');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="welcome-text">Hi, Welcome</h2>
                <p className="welcome-paragraph">Enter your credentials to continue</p>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} autoComplete="off" />
                <div className="password-container">
                    <input type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} className="password-input" autoComplete="new-password" />
                    <span className="toggle-password" onClick={togglePasswordVisibility} role="button" aria-label="Toggle password visibility">
                        {isPasswordVisible ? '👁‍🗨' : '👁️'}
                    </span>
                </div>
                <div className="options-container">
                    <div className="checkbox-container">
                        <input className="chk-1" type="checkbox" id="remember-me" />
                        <label className="rem-1" htmlFor="remember-me">Remember me</label>
                    </div>
                    <div className="forgot-password">
                        <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
                    </div>
                </div>
                <button className="login-btn" onClick={handleLogin}>Login</button>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup" className="signup-link-orange">Sign Up</Link>
                </p>
                <p className="or-login">Or login with</p>
                <div className="social-buttons">
                    <button className="social-btn facebook">
                        <img className="social-logo" src="face.png" alt="Facebook" />
                    </button>
                    <button className="social-btn google">
                        <img className="social-logo" src="goog.png" alt="Google" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;