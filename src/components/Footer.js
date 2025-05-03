import React, {useEffect, useState} from "react";
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
    iconCircle: {
        backgroundColor: '#1a1d20',
        color: '#fff',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'all 0.3s ease',
        borderStyle: 'solid', // ← ВАЖНО!
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
        <footer style={styles.footer}>
            <div style={styles.topIcons}>
                <a href="https://www.facebook.com/Prudential/" target="_blank" rel="noopener noreferrer"
                   style={styles.iconCircle}>
                    <FaFacebookF/>
                </a>
                <a href="https://www.linkedin.com/company/prudential-financial/" target="_blank"
                   rel="noopener noreferrer" style={styles.iconCircle}>
                    <FaLinkedinIn/>
                </a>
                <a href="https://www.instagram.com/prudential/" target="_blank" rel="noopener noreferrer"
                   style={styles.iconCircle}>
                    <FaInstagram/>
                </a>
                <a href="https://www.youtube.com/user/Prudential/" target="_blank" rel="noopener noreferrer"
                   style={styles.iconCircle}>
                    <FaYoutube/>
                </a>
                <a href="https://www.pinterest.com/prudential/" target="_blank" rel="noopener noreferrer"
                   style={styles.iconCircle}>
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
                        <span>prudentialinvestmoney@gmail.com</span>
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
                    entities. Prudential Investment is committed to leveraging advanced AI-driven strategies to optimize
                    trading decisions and investment management.
                </p>
                <p>
                    This website is for informational and educational purposes only and does not take into account
                    individual investment objectives or financial circumstances. The content provided is not investment
                    advice and should not be considered a recommendation for managing or investing funds. Clients
                    seeking personalized investment guidance should consult with a licensed financial professional.
                </p>
                <p>
                    Investing involves risk, and there is always the potential for loss. AI-powered trading and
                    algorithmic investment strategies do not guarantee profits or eliminate risks. Asset allocation and
                    rebalancing do not ensure gains or prevent losses. </p>
                <p>
                    Securities and investment services are offered through Prudential Investment Management Services
                    LLC, a member of SIPC, headquartered in Newark, NJ. Before investing, carefully review all relevant
                    investment policies, risks, fees, and conditions in the prospectus.
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

                <div style={{width: '100%', height: 1, backgroundColor: 'gray',}}/>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...(isMobile && {flexDirection: 'column', alignItems: 'center'}) }}>
                    <p style={{fontSize: 14, fontWeight: '500', width: '50%', ...(isMobile && {width: '100%'})}}>
                        © 2025 Prudential Investment, Inc. and its affiliated entities. Prudential Investment, the
                        Prudential logo, and related service marks are trademarks of Prudential Investment, Inc.,
                        registered in multiple jurisdictions worldwide.
                    </p>

                    <div style={{display: 'flex', gap: 30,}}>
                        <a href="/cooperationtermsscreen" style={{fontSize: 12, color: '#fff'}}>
                            Условия сотрудничества
                        </a>
                        <a href="/privacypolicyscreen" style={{fontSize: 12, color: '#fff'}}>
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
