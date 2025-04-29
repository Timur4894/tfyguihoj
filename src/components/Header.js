import React, {useContext, useState} from 'react';
import logo from '../assets/img/logo.png'
import bg from "../assets/img/download.jpg";
import {AuthContext} from "../context/AuthContext";

const Header = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    // const navItems = ['Home', 'Company', 'Investments', 'Partners', 'FAQ', 'Contacts'];
    const { isAuthenticated } = useContext(AuthContext);
    const navItems = [
        { label: "Главная", href: "/" },
        { label: "Компании", href: "/aboutcompany" },
        { label: "Инвестиции", href: "/investments" },
        { label: "Партнёрам", href: "/partners" },
        { label: "FAQ", href: "/faq" },
        { label: "Контакты", href: "/contact" },
    ];
    console.log('isAuthenticated: ', isAuthenticated);
    return (
        <header style={{borderBottom: '1px solid #1a1a1a',backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            }}>
            <div style={styles.topBar}>
                <div style={styles.topLinks}>
                    <a href="/cooperationtermsscreen" style={styles.navLink}>Условия сотрудничества</a>
                    <a href="/privacypolicyscreen" style={styles.navLink}>Политика конфиденциальности</a>
                </div>
                <div style={styles.contactInfo}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {/*<ion-icon name="globe-outline"></ion-icon>*/}
                        {/*<span style={{...styles.navLink, marginLeft: 4}}>English</span>*/}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <a href="mailto:support@whitelion-invest.com" style={{
                            ...styles.navLink, marginLeft: 4, fontWeight: '300'
                        }}> support@whitelion-invest.com</a>
                    </div>
                </div>
            </div>

            <div style={styles.mainHeader}>
                <a href='/' style={styles.logoContainer}>
                    <img src={logo} alt="White Lion" style={{width: '50%'}}/>
                </a>
                <nav style={styles.nav}>
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onMouseEnter={() => setHoveredLink(index)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                                ...styles.navLink,
                                ...(hoveredLink === index ? styles.navLinkHover : {}),
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div style={styles.buttons}>
                    {!isAuthenticated && <a href="/createaccountscreen" style={styles.button}>Регистрация <ion-icon
                        name="caret-forward-outline"></ion-icon></a>}

                    {!isAuthenticated ? <a href="/login" style={styles.button}>Кабинет <ion-icon
                            name="caret-forward-outline"></ion-icon></a> :
                        <a href="/cabinetscreen" style={styles.button}>Кабинет <ion-icon
                            name="caret-forward-outline"></ion-icon></a>}
                </div>
            </div>
        </header>
    );
};

const styles = {
    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 40px',
        fontSize: '14px',
        borderBottom: '1px solid #ddd',
        color: '#555',
    },
    topLinks: {
        display: 'flex',
        gap: '20px',
    },
    contactInfo: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    },
    mainHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    logoText: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.2',
    },
    investmentsText: {
        fontSize: '0.7rem',
        fontWeight: 'normal',
    },
    nav: {
        display: 'flex',
        gap: '25px',
        fontWeight: '500',
        color: '#22282c',
        fontSize: '1rem',
        marginRight: 20,
    },
    navLink: {
        textDecoration: 'none',
        alignItems: 'center',
        color: '#1a1a1a',
        fontWeight: 'bold',
        fontFamily: "Ubuntu"
    },
    navLinkHover: {
        // backgroundColor: '#ddd',
    },
    buttons: {
        display: 'flex',
        gap: '15px',
        marginBottom: '20px',
    },
    button: {
        border: '1px solid #ccc',
        marginTop: '1.5rem',
        padding: '12px 30px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "Ubuntu",
        flexDirection: 'row',
        borderRadius: '12px',
        // fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        textDecoration: 'none',
        backgroundColor: '#fff',
        color: '#22282c',
    }
};

export default Header;
