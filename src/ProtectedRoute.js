import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// ProtectedRoute component
const ProtectedRoute = ({ element, ...rest }) => {
    const isLoggedIn = !!localStorage.getItem('user'); // Check if user is logged in

    return (
        <Route
            {...rest}
            element={isLoggedIn ? element : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
