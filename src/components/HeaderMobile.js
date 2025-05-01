import React, { useContext, useState } from 'react';
import logo from '../assets/img/logo.png';
import { AuthContext } from '../context/AuthContext';

const HeaderMobile = () => {
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

    return (
        <>
            <header style={styles.header}>
                <a href="/" style={styles.logoContainer}>
                    <img src={logo} alt="White Lion" style={{ height: 40 }} />
                </a>
                <button onClick={toggleMenu} style={styles.burgerButton}>
                    <div style={styles.burgerLine}></div>
                    <div style={styles.burgerLine}></div>
                    <div style={styles.burgerLine}></div>
                </button>
            </header>

            {isMenuOpen && (
                <div style={styles.menuOverlay}>
                    <div style={styles.menu}>
                        <div style={styles.menuTop}>
                            <img src={logo} alt="White Lion" style={{ height: 30 }} />
                            <button onClick={toggleMenu} style={styles.closeButton}>×</button>
                        </div>

                        <div style={styles.links}>
                            {navItems.map(item => (
                                <a key={item.href} href={item.href} style={styles.link}>
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div style={styles.actions}>
                            <a href="/createaccountscreen" style={{ ...styles.actionButton, borderRadius: 20 }}>
                                Регистрация <span style={styles.arrow}>↗</span>
                            </a>
                            <a href="/login" style={{ ...styles.actionButton, borderRadius: 20 }}>
                                Кабинет <span style={styles.arrow}>↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

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
    burgerLine: {
        width: 25,
        height: 3,
        backgroundColor: '#1a1a1a',
        borderRadius: 2,
    },
    menuOverlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        // justifyContent: 'flex-end',
        // alignItems: 'space-between',
    },
    menu: {
        width: 280,
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
        gap: 30,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
    menuTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    closeButton: {
        background: 'none',
        border: '1px solid #000',
        borderRadius: '8px',
        fontSize: '24px',
        lineHeight: '1',
        width: '36px',
        height: '36px',
        textAlign: 'center',
        cursor: 'pointer',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30,
        gap: 16,
    },
    link: {
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        color: '#1a1a1a',
        paddingBottom: 12,
        borderBottom: '1px solid #eee',
    },
    actions: {
        display: 'flex',
        gap: 10,
        marginTop: 0,
        marginBottom: 100,
        justifyContent: 'center',
    },
    actionButton: {
        flex: 1,
        border: '1px solid #ddd',
        padding: '12px 16px',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '15px',
        color: '#1a1a1a',
        textDecoration: 'none',
    },
    arrow: {
        marginLeft: 6,
    },
};

export default HeaderMobile;
