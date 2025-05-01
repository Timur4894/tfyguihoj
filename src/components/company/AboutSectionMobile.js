import React, {useEffect, useState} from "react";
import build from '../../assets/img/office.jpg'
import logo from '../../assets/img/fav.png'

const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        padding: "6rem 0rem",
        paddingBottom: 0,
        alignItems: "center",
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
        width: "90%",
    },
    image: {
        width: "100%",
        // borderRadius: "1rem",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    },
    logoCircle: {
        position: "absolute",
        right: -30,
        bottom: "40%",
        transform: "translateX(-50%)",
        width: "46px",
        height: "46px",
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
        flexDirection: "column",
        alignItems: "center",
    },
    paragraph: {
        fontSize: "1.20rem",
        lineHeight: "1.5",
        fontFamily: "Ubuntu",
        color: "#111827",
        // textAlign: "center",
        display: "flex",
        width: "90%",
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
        alignSelf: "center",
        padding: "0.75rem 1.5rem",
        border: "1px solid #D1D5DB",
        color: "#111827",
        // borderRadius: "0.5rem",
        textDecoration: "none",
        fontWeight: 500,

        width: "60%",
        transition: "background 0.2s ease",
    },
};

export default function AboutSectionMobile() {

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
        <section
            style={{
                ...styles.section,
                ...(window.innerWidth >= 1024 ? styles.sectionLarge : {}),
                ...(isMobile && {flexDirection: "column", })
            }}
        >

            <div style={styles.imageWrapper}>
                <img src={build} alt="Building" style={styles.image}/>
                <div style={styles.logoCircle}>
                    <img src={logo} alt="Logo" style={{height: "28px"}}/>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%",}}>
                <div style={styles.textBlock}>
                    <p style={{...styles.paragraph}}>
                        Добро пожаловать на платформу, где искусственный интеллект открывает новые возможности для брокеров, инвесторов и бизнеса! Мы предлагаем современные технологии для точного анализа рынка и прогнозирования, которые помогут вам принимать уверенные решения и увеличивать доход. Узнайте, как наши инновационные решения могут стать вашим преимуществом!
                    </p>
                    <div style={styles.statsContainer}>
                        <div>
                            <div style={styles.statBlock}>70+</div>
                            <div style={styles.statText}>Партнёров, использующих наш софт
                            </div>
                        </div>
                        <div style={{width: '100%', backgroundColor: "#aaa", height: 1, marginTop: 20}}/>
                        <div>
                            <div style={styles.statBlock}>150+</div>
                            <div style={styles.statText}>Лет профессионального опыта</div>
                        </div>
                    </div>
                </div>
                <a href="/contact" style={styles.button}>
                    Свяжитесь с нами <span style={{marginLeft: "0.5rem"}}>↗</span>
                </a>
            </div>
        </section>
    );
}
