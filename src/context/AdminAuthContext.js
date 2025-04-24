import React, { createContext, useState, useContext } from 'react';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
    return useContext(AdminAuthContext);
};

export const AdminAuthProvider = ({ children }) => {
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

    const authenticateAdmin = (password) => {
        if (password === "67891f") {
            setIsAdminAuthenticated(true); // Устанавливаем состояние аутентификации
        } else {
            setIsAdminAuthenticated(false); // Если пароль неверный, сбрасываем аутентификацию
        }
    };

    const value = {
        isAdminAuthenticated,
        authenticateAdmin,
    };

    return (
        <AdminAuthContext.Provider value={value}>
            {children}
        </AdminAuthContext.Provider>
    );
};
