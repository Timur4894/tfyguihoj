import React from "react";
import lionImg from "../../assets/img/lion.png"; // замени на путь к твоему изображению
import dots from "../../assets/img/pattern.png"; // замени на путь к твоему изображению
import circ from "../../assets/img/circle.png"; // замени на путь к твоему изображению


const styles = {
    section: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 40px",
        backgroundColor: "#fff",
    },
    imageWrapper: {
        flex: "1 1 50%",
        textAlign: "center",
        position: "relative",
    },
    image: {
        maxWidth: "75%",
        height: "auto",
    },
    content: {
        flex: "1 1 50%",
        padding: "20px 40px",
        boxSizing: "border-box",
    },
    badge: {
        color: "#6B7280",
        fontSize: "12px",
        marginBottom: "16px",
        fontFamily: "Ubuntu",
        fontWeight: 'bold',
    },
    headline: {
        fontSize: "35px",
        // fontWeight: "700",
        lineHeight: "1.2",
        marginBottom: "24px",
        color: "#1F2937",
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: "Ubuntu",
        // color: "#4B5563",
    },
    paragraph: {
        fontSize: "14px",
        lineHeight: "1.7",
        textDecoration: 'none',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: "Ubuntu",
        color: "gray",
        marginBottom: "16px",
    },
    linkGroup: {
        marginTop: "32px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    smallText: {
        fontSize: "10px",
        color: "#4B5563",
        fontWeight: 'bold',
        fontFamily: "Ubuntu",
    },
    button: {
        backgroundColor: "#111827",
        color: "#fff",
        padding: "12px 24px",
        fontSize: "12px",
        // fontWeight: "600",
        border: "none",
        borderRadius: "4px",
        fontWeight: 'bold',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "Ubuntu",
        cursor: "pointer",
    },
};

export default function HeroSection() {
    return (
        <section style={styles.section}>
            <div style={styles.imageWrapper}>
                <img src={circ} alt="Cyber Lion" style={{
                    width: "15%",
                    height: "auto",
                    position: "absolute",
                    left: '30%',
                    top: '10%'
                }}/>
                <img src={lionImg} alt="Cyber Lion" style={styles.image}/>
                <img src={dots} alt="Cyber Lion" style={{
                    width: "40%",
                    height: "auto",
                    position: "absolute",
                    left: '55%',
                    top: '30%'
                }}/>
            </div>
            <div style={styles.content}>
                <div style={styles.badge}>Leader of the direction since 2019</div>
                <h1 style={styles.headline}>
                    Opportunities for <br />
                    growth with WHITE LION
                </h1>
                <p style={styles.paragraph}>
                    We are the leading AI-powered platform built to support brokers and investors. Our technology analyzes the market and provides accurate forecasts, helping you make informed decisions and increase profits.
                </p>
                <p style={styles.paragraph}>
                    We develop solutions not only for the financial sector, but also for other industries, such as the agricultural sector and medicine, making our product universal and innovative.
                </p>
                <p style={styles.paragraph}>
                    The company receives its main income through leasing our unique software to other companies, as well as commissions for providing services to private investors and funds.
                </p>
                <div style={styles.linkGroup}>
          <span style={styles.smallText}>
            Find out more about us and the opportunities we offer
          </span>
                <button style={styles.button}>
                    More about the company <ion-icon name="caret-forward-outline"></ion-icon>
                </button>
                </div>
            </div>
        </section>
    );
}
