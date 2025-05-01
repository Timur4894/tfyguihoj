import React from "react";
import logo from "../assets/img/logo2.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const styles = {
    footer: {
        backgroundColor: "#1a1d20",
        color: "#fff",
        padding: "48px 24px",
        fontFamily: "Ubuntu",
        fontSize: "14px",
    },
    topIcons: {
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        fontFamily: "Ubuntu",
        marginBottom: "32px",
        fontSize: "20px",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "32px",
        textAlign: "left",
    },
    logoBlock: {
        display: "flex",
        fontFamily: "Ubuntu",
        flexDirection: "column",
        gap: "16px",
    },
    slogan: {
        fontSize: "14px",
        fontFamily: "Ubuntu",
        color: "#ccc",
        lineHeight: "1.6",
    },
    linkColumn: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Ubuntu",
        gap: "12px",
    },
    navLink: {
        textDecoration: "none",
        color: "#ccc",
        fontFamily: "Ubuntu",
        fontWeight: "400",
    },
    contactBlock: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "#ccc",
    },
    iconText: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "Ubuntu",
    },
    legal: {
        marginTop: "40px",
        fontSize: "12px",
        fontFamily: "Ubuntu",
        color: "#888",
        lineHeight: "1.6",
    }
};

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.topIcons}>
                <a href="https://www.facebook.com/Prudential/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <FaFacebookF/>
                </a>
                <a href="https://www.linkedin.com/company/prudential-financial/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <FaLinkedinIn/>
                </a>
                <a href="https://www.instagram.com/prudential/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <FaInstagram/>
                </a>
                <a href="https://www.youtube.com/user/Prudential/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <FaYoutube/>
                </a>
                <a href="https://www.pinterest.com/prudential/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <FaPinterestP/>
                </a>
            </div>


            <div style={styles.container}>
                <div style={styles.logoBlock}>
                    <img src={logo} alt="Logo" style={{width: "160px"}}/>
                    <div style={styles.slogan}>
                        Соединяем технологии и опыт для создания новых<br/>возможностей финансового роста.
                    </div>
                </div>

                <div style={styles.linkColumn}>
                    <a href="/" style={styles.navLink}>Главная</a>
                    <a href="/aboutcompany" style={styles.navLink}>Компания</a>
                    <a href="/investments" style={styles.navLink}>Инвестиции</a>
                    <a href="/partners" style={styles.navLink}>Партнёрам</a>
                    <a href="/contact" style={styles.navLink}>Контакты</a>
                    <a href="/faq" style={styles.navLink}>FAQ</a>
                </div>

                <div style={styles.contactBlock}>
                    <div style={styles.iconText}>
                        <MdEmail/>
                        <span>support@prudential-invest.com</span>
                    </div>
                    <div style={styles.iconText}>
                        <MdLocationOn/>
                        <span>
                            800 Boylston St, Boston, MA 02199,<br/>
                            United States of America
                        </span>
                    </div>
                </div>
            </div>

            <div style={styles.legal}>
                <p>
                    Investments and AI Trading Services are provided by Prudential Investment and its affiliated
                    entities...
                </p>
                <p>
                    This website is for informational and educational purposes only and does not take into account
                    individual investment objectives...
                </p>
                <p>
                    Not Insured by FDIC or Any Government Agency | May Lose Value | No Bank Guarantee.
                </p>
                <p>
                    Prudential Investment, Inc. of the United States is not affiliated with Prudential plc or any of its
                    international subsidiaries.
                </p>
                <p>
                    By using this website, you confirm that you have read and agree to our Terms and Conditions.
                </p>
            </div>
        </footer>
    );
}
