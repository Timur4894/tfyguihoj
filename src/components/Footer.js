import React from "react";
import logo from "../assets/img/logo2.png";

const styles = {
    footer: {
        backgroundColor: "#1E2329",
        color: "#fff",
        padding: "48px 32px",
        fontSize: "14px",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "32px",
    },
    logoBlock: {
        display: "flex",
        flexDirection: "column",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "20px",
        fontWeight: "bold",
    },
    subLogo: {
        fontSize: "10px",
        backgroundColor: "#fff",
        color: "#000",
        padding: "2px 6px",
        borderRadius: "4px",
        letterSpacing: "2px",
    },
    text: {
        marginTop: "16px",
        textDecoration: 'none',
        alignItems: 'center',
        color: '#aaa',
        fontFamily: "Ubuntu"
    },
    linkColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        color: "#ccc",
    },
    contactBlock: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        color: "#ccc",
    },
    navLink: {
        textDecoration: 'none',
        alignItems: 'center',
        color: '#aaa',
        fontWeight: 'bold',
        fontFamily: "Ubuntu"
    },
    iconRow: {
        display: "flex",
        gap: "8px",
        alignItems: "flex-start",
    },
    bottomBar: {
        marginTop: "48px",
        borderTop: "1px solid #333",
        paddingTop: "16px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        color: "#888",
        fontSize: "12px",
    },
    policyLinks: {
        display: "flex",
        gap: "16px",
        marginTop: "8px",
    },
};

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.logoBlock}>
                    <img src={logo} alt="White Lion" style={{width: '100%'}}/>
                </div>

                <div style={styles.linkColumn}>
                <a href="#" style={styles.navLink}>Home</a>
                    <a href="#" style={styles.navLink}>Company</a>
                    <a href="#" style={styles.navLink}>Investments</a>
                    <a href="#" style={styles.navLink}>To partners</a>
                    <a href="#" style={styles.navLink}>Contacts</a>
                </div>

                <div style={styles.linkColumn}>
                    <a href="#" style={styles.navLink}>Partner registration</a>
                    <a href="#" style={styles.navLink}>Login to your personal account</a>
                    <a href="#" style={styles.navLink}>Recover password</a>
                    <a href="#" style={styles.navLink}>FAQ</a>
                </div>

                <div style={styles.contactBlock}>
                    <div style={styles.iconRow}>
                        <span>support@whitelion-invest.com</span>
                    </div>
                    <div style={styles.iconRow}>
                        <span>
              Zetland Secretaries Ltd 8/F<br />
              On Hing Building, 1 On Hing Terrace,<br />
              Central, Hong Kong
            </span>
                    </div>
                </div>
            </div>

            <div style={styles.bottomBar}>
                <span>© 2024, All rights reserved. WHITE LION INVESTMENTS LIMITED</span>
                <div style={styles.policyLinks}>
                    <a href="#" style={{...styles.navLink, color: '#fff'}}>Terms of cooperation</a>
                    <a href="#" style={{...styles.navLink, color: '#fff'}}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
