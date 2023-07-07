import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { api, createSession } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const recoveredUser = localStorage.getItem(user);
        console.log('localstorage', recoveredUser);

        if (recoveredUser) {
            setUser(recoveredUser);
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        const response = await createSession(username, password);

        console.log("login", response.data);

        const loggedUser = response.data.user_name;

        const token = response.data.token;

        localStorage.setItem(user, loggedUser);
        localStorage.setItem('token', token);

        api.defaults.headers.Authorization = `Bearer ${token}`;


            setUser(loggedUser);
            navigate('/');

    };

    const logout = () => {
        localStorage.clear();
        console.log('logout, locastorage: ', localStorage.getItem(user));
        setUser(null);
        navigate('/');
        };
        
        return(
            <AuthContext.Provider value={{ authenticated: 
                !!user, user, loading, login, logout }}>
                    { children }
            </AuthContext.Provider>
        );    
};
