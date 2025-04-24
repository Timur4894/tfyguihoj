import React, { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const token = localStorage.getItem("authToken");
        return !!token;
    });
    // const [userInfo, setUserInfo] = useState({
    //     nickname: "",
    //     email: "",
    // });

    const login = (token) => {
        localStorage.setItem("authToken", token);
        if (token) decodeUserInfo(token);
        setIsAuthenticated(true);
        // decodeUserInfo(token);
    };

    const logout = () => {
        setIsAuthenticated(false);
        // setUserInfo(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("nicknameUser");
        localStorage.removeItem("emailUser");
    };

    const decodeUserInfo = (token) => {
        try {
            const decoded = jwtDecode(token);
            const { username, email } = decoded;
            localStorage.setItem("nicknameUser", username);
            localStorage.setItem("emailUser", email);
        } catch (error) {
            console.error("Failed to decode token:", error);
        }
    };

    // useEffect(() => {
    //     const token = localStorage.getItem("authToken");
    //     if (token) decodeUserInfo(token);
    // }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
