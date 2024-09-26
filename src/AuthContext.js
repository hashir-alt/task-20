import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser.email && parsedUser.password) {
                    setIsAuthenticated(true); // User is logged in
                }
            }
        } catch (error) {
            console.error('Invalid stored user data');
        }
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('user'); 
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
        
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
