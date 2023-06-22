import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const recoveredUser = localStorage.getItem(user);
        console.log('localstorage', recoveredUser);

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        console.log("login auth", { username, password });

        const loggedUser = {
            id: '123',
            username
        };

        localStorage.setItem(user, JSON.stringify(loggedUser));

        if(password === "123"){
            setUser(loggedUser);
            navigate('/');
        }
    };

    const logout = () => {
        localStorage.removeItem(user);
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
