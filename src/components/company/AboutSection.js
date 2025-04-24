import React from "react";
import build from '../../assets/img/office.jpg'
import logo from '../../assets/img/fav.png'

const styles = {
    section: {
        display: "flex",
        flexDirection: "row",
        padding: "6rem 0rem",
        paddingBottom: 0,
        // maxWidth: "1300px",
        // alignSelf: "flex-start",
        margin: "0 auto",
        gap: "0rem",
    },
    sectionLarge: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imageWrapper: {
        position: "relative",
      // marginLeft: -100,
      //   backgroundColor: "#000",
        width: "60%",
    },
    image: {
        width: "90%",
        // borderRadius: "1rem",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    },
    logoCircle: {
        position: "absolute",
        right: -50,
        bottom: "40%",
        transform: "translateX(-50%)",
        width: "96px",
        height: "96px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    },
    textBlock: {
        width: "100%",
       marginRight: 40,
        marginLeft: 50,
        // marginBottom: '12%',
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    paragraph: {
        fontSize: "1.40rem",
        lineHeight: "1.8",
        fontFamily: "Ubuntu",
        color: "#111827",
        display: "flex",
        width: "70%",
        marginBottom: "2rem",
        fontWeight: 500,
    },
    statsContainer: {
        display: "flex",
        // gap: "3rem",
        // alignItems: "flex-start",
        flexDirection: "column",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: "2rem",
    },
    statBlock: {
        fontSize: "4rem",
        fontWeight: "bold",
        color: "#111827",
        fontFamily: "Ubuntu",
    },
    statText: {
        fontSize: "0.8rem",
        fontFamily: "Ubuntu",
        color: "#6B7280",
        marginTop: "0.25rem",
    },
    button: {
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        padding: "0.75rem 1.5rem",
        border: "1px solid #D1D5DB",
        color: "#111827",
        // borderRadius: "0.5rem",
        textDecoration: "none",
        fontWeight: 500,
        transition: "background 0.2s ease",
    },
};

export default function AboutSection() {
    return (
        <section
            style={{
                ...styles.section,
                ...(window.innerWidth >= 1024 ? styles.sectionLarge : {}),
            }}
        >

            <div style={styles.imageWrapper}>
                <img src={build} alt="Building" style={styles.image}/>
                <div style={styles.logoCircle}>
                    <img src={logo} alt="Logo" style={{height: "48px"}}/>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%",}}>
                <div style={styles.textBlock}>
                    <p style={styles.paragraph}>
                        Welcome to the platform where artificial intelligence opens up new opportunities for brokers,
                        investors and businesses! We offer state-of-the-art technology for accurate market analysis and
                        forecasting to help you make confident decisions and increase your revenue. Find out how our
                        innovative solutions can be your advantage!
                    </p>
                    <div style={styles.statsContainer}>
                        <div>
                            <div style={styles.statBlock}>120+</div>
                            <div style={styles.statText}>Partners using our software</div>
                        </div>
                        <div style={{width: '100%', backgroundColor: "#aaa", height: 1, marginTop: 20}}/>
                        <div>
                            <div style={styles.statBlock}>15+</div>
                            <div style={styles.statText}>Years of professional experience</div>
                        </div>
                    </div>
                </div>
                <a href="#contact" style={styles.button}>
                    Contact us <span style={{marginLeft: "0.5rem"}}>↗</span>
                </a>
            </div>
        </section>
    );
}
