import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/auth/user', { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        const response = await axios.post('/api/auth/login', credentials, { withCredentials: true });
        setUser(response.data);
    };

    const logout = async () => {
        await axios.post('/api/auth/logout', {}, { withCredentials: true });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };