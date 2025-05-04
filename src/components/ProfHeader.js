import React, {useContext, useEffect, useState} from "react";
import ava from "../assets/img/avatar.jpg";
import {AuthContext} from "../context/AuthContext";
import logo from "../assets/img/fav2.png";

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        borderBottom: '1px solid #ccc',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    burgerButton: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    closeButton: {
        background: 'none',
        border: '1px solid #000',
        borderRadius: '8px',
        fontSize: '24px',
        lineHeight: '1',
        marginRight: 10,
        width: '36px',
        height: '36px',
        textAlign: 'center',
        cursor: 'pointer',
    },
    burgerLine: {
        width: 25,
        height: 3,
        backgroundColor: '#1a1a1a',
        borderRadius: 2,
    },
}

export default function ProfHeader() {
    const [open, setOpen] = useState(false);
    const { logout } = useContext(AuthContext);
    const name = localStorage.getItem('nicknameUser');

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    const navItems = [
        { label: "Главная", href: "/" },
        { label: "О Компании", href: "/aboutcompany" },
        { label: "Инвестиции", href: "/investments" },
        { label: "Партнёрам", href: "/partners" },
        { label: "FAQ", href: "/faq" },
        { label: "Контакты", href: "/contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 20px",
            // backgroundColor: "#fff",
            color: "white",
            position: "relative",
            width: "100%",
            marginLeft: -24,
            marginBottom: 40
        }}>
            {!isMobile && <div style={{fontSize: "18px", fontWeight: "bold", color: '#000'}}></div>}
            {isMobile &&
                <div style={{display: "flex", gap: 10, alignItems: "center"}}>
                    <a href="/">
                        <img src={logo} alt="White Lion" style={{height: 30, cursor: "pointer"}}/>
                    </a>
                    <button onClick={toggleMenu} style={styles.burgerButton}>
                        <div style={styles.burgerLine}></div>
                        <div style={styles.burgerLine}></div>
                        <div style={styles.burgerLine}></div>
                    </button>
                </div>}

            <div style={{position: "relative"}}>
                <button
                    onClick={() => setOpen(!open)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        gap: "8px"
                    }}
                >
                    <div style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000"
                    }}>
                        <img src={ava} style={{width: '100%'}}/>
                    </div>
                    <span style={{fontSize: "14px", color: "#000"}}>{name}</span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </button>

                {open && (
                    <div
                        style={{
                            position: "absolute",
                            right: 0,
                            top: "45px",
                            marginRight: -25,
                            // marginLeft: -500,
                            width: "98vw",
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
                            zIndex: 1000,
                            overflow: "hidden",
                            color: "#000",
                        }}
                    >

                        <div style={{padding: "12px", borderBottom: "1px solid #eee"}}>
                            <p style={{fontSize: "12px", color: "#666"}}>Общий баланс:</p>
                            <p style={{fontWeight: "bold", fontSize: "16px"}}>0.00 $</p>
                            <a
                                href='/balance' style={{
                                marginTop: "10px",
                                width: "100%",
                                backgroundColor: "#f9b233",
                                border: "none",
                                padding: "6px",
                                borderRadius: "4px",
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "14px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}>
                                Пополнить/Вывести →
                            </a>
                        </div>
                        <div>
                            <a href='/wallets' style={menuItemStyle}>
                                <ion-icon name="settings-outline"></ion-icon>
                                Настройки
                            </a>
                            <a href='/support' style={menuItemStyle}>
                                <ion-icon name="help-outline"></ion-icon>
                                Поддержка
                            </a>
                            <div style={{...menuItemStyle, color: "red"}} onClick={logout}>
                                <ion-icon name="log-out-outline"></ion-icon>
                                Выйти
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isMobile && isMenuOpen && (
                <div
                    onClick={toggleMenu} // Закрывает при клике в любом месте
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '80vw',
                        height: '100vh',
                        backgroundColor: '#fff',
                        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
                        zIndex: 2000,
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()} // Блокирует всплытие
                        style={{display: 'flex', flexDirection: 'column', height: '100%', marginTop: 26}}
                    >
                        <div style={{
                            display: 'flex',
                            // justifyContent: 'space-between',
                            gap: 10,
                            alignItems: 'center',

                        }}>
                            <a href="/">
                                <img src={logo} alt="White Lion" style={{height: 30, cursor: "pointer"}}/>
                            </a>
                            <button onClick={toggleMenu} style={styles.burgerButton}>
                                <div style={styles.burgerLine}></div>
                                <div style={styles.burgerLine}></div>
                                <div style={styles.burgerLine}></div>
                            </button>
                        </div>
                        <h4 style={{marginBottom: '20px', color: '#999'}}>МЕНЮ КАБИНЕТА</h4>
                        <a href="/cabinetscreen" style={sidebarLinkStyle}>
                            <ion-icon name="home-outline"></ion-icon>
                            Панель управления
                        </a>
                        <a href="/balance" style={sidebarLinkStyle}>
                            <ion-icon name="wallet-outline"></ion-icon>
                            Балансы
                        </a>
                        <a href="/opendep" style={sidebarLinkStyle}>
                            <ion-icon name="add-outline"></ion-icon>
                            Открыть депозит
                        </a>
                        <a href="/mydeps" style={sidebarLinkStyle}>
                            <ion-icon name="analytics-outline"></ion-icon>
                            Мои депозиты
                        </a>
                        <a href="/refprogram" style={sidebarLinkStyle}>
                            <ion-icon name="people-outline"></ion-icon>
                            Моя команда
                        </a>
                        <a href="/support" style={sidebarLinkStyle}>
                            <ion-icon name="help-outline"></ion-icon>
                            Поддержка
                        </a>
                        <a href="/wallets" style={sidebarLinkStyle}>
                            <ion-icon name="settings-outline"></ion-icon>
                            Мои кошельки
                        </a>

                        {/*<button*/}
                        {/*    onClick={toggleMenu}*/}
                        {/*    style={{*/}
                        {/*        marginTop: 'auto',*/}
                        {/*        padding: '10px',*/}
                        {/*        backgroundColor: '#f9b233',*/}
                        {/*        border: 'none',*/}
                        {/*        borderRadius: '4px',*/}
                        {/*        fontWeight: 'bold',*/}
                        {/*        cursor: 'pointer',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    Закрыть меню*/}
                        {/*</button>*/}
                    </div>
                </div>
            )}


        </div>
    );
}

const menuItemStyle = {
    padding: "10px 12px",
    display: "flex",
    gap: 2,
    textDecoration: "none",
    color: "#000",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "14px",
    borderBottom: "1px solid #f0f0f0",
    transition: "background 0.2s",
    backgroundColor: "white"
};

const sidebarLinkStyle = {
    padding: '12px 0',
    display: 'flex',
    gap: 4,
    alignItems: "center",
    color: '#1a1a1a',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 500,
    borderBottom: '1px solid #eee',
};
