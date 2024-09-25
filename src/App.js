import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Sidebar from './Sidebar';
import Pricing from './Pricing';
import Profile from './Profile';
import Settings from './Settings';
import Bookings from './Bookings';
import Contact from './Contact';
import Home from './Home';
import './App.css';
import { AuthProvider, useAuth } from './AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<PrivateRoutes />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Check if sidebar should be shown
    const showSidebar = !['/', '/contact', '/pricing'].includes(location.pathname);

    return (
        <div className="app-container">
            <Navbar />
            {showSidebar ? (
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </MainLayout>
            ) : (
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            )}
        </div>
    );
};

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};

export default App;
