import React, {useEffect, useRef, useState} from "react";
import lionImg from "../../assets/img/lion.png"; // замени на путь к твоему изображению
import dots from "../../assets/img/pattern.png"; // замени на путь к твоему изображению
import circ from "../../assets/img/circle.png"; // замени на путь к твоему изображению
import circ2 from "../../assets/img/fav2.png"; // замени на путь к твоему изображению
import {ReactComponent as RightUpIcon} from "../../assets/svg/arrow-up.svg";
import AArrow from "../../assets/svg/AArrow";

const styles = {
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
        padding: "20px 20px",
        display: 'flex',
        flexDirection: 'column',
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
        fontSize: "30px",
        // fontWeight: "700",
        // lineHeight: "1.2",
        marginBottom: "24px",
        color: "#1F2937",
        alignItems: 'center',
        fontWeight: '400',
        fontFamily: "Ubuntu",
        // color: "#4B5563",
    },
    paragraph: {
        fontSize: "1rem",
        lineHeight: "1",
        textDecoration: 'none',
        alignItems: 'center',
        // fontWeight: 'bold',
        fontFamily: "Ubuntu",
        color: "gray",
        marginBottom: "16px",
    },
    linkGroup: {
        marginTop: "32px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        gap: "20px",
    },
    smallText: {
        fontSize: "12px",
        color: "#aaa",
        // fontWeight: 'bold',
        fontFamily: "Ubuntu",
    },
    button: {
        backgroundColor: "#111827",
        color: "#fff",
        padding: "12px 24px",
        fontSize: "1rem",
        // fontWeight: "600",
        alignSelf: "flex-start",
        border: "none",
        // borderRadius: "4px",
        fontWeight: 'bold',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "Ubuntu",
        cursor: "pointer",
    },
    section: {
        display: "flex",
        flexWrap: "wrap",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 0px",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 1.5s ease, transform 0.8s ease",
    },
    sectionVisible: {
        opacity: 1,
        transform: "translateY(0)",
    },
};

export default function HeroSecMob() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // отключаем, чтобы не срабатывало повторно
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `, styleSheet.cssRules.length);
    }, []);


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
            ref={sectionRef}
            style={{
                ...styles.section,
                ...(isVisible ? styles.sectionVisible : {}),
            }}
        >
            <div style={styles.imageWrapper}>
                <img
                    src={circ}
                    alt="Circle"
                    style={{
                        width: "35%",
                        height: "auto",
                        position: "absolute",
                        left: '10%',
                        top: '0%',
                        animation: 'spin 20s linear infinite', // 20s можно изменить на другую скорость
                    }}
                />
                <img
                    src={circ2}
                    alt="Circle"
                    style={{
                        width: "15%",
                        height: "auto",
                        position: "absolute",
                        left: '20%',
                        top: '15%',
                    }}
                />

                <img src={lionImg} alt="Cyber Lion" style={styles.image}/>
                <img src={dots} alt="Dots" style={{
                    width: "80%",
                    height: "auto",
                    position: "absolute",
                    left: '25%',
                    top: '-10%'
                }}/>
            </div>
            <div style={styles.content}>
                <h1 style={styles.headline}>
                    Возможности роста <br/>
                    с Prudential Invest
                </h1>
                <p style={{...styles.paragraph, ...(isMobile && {fontSize: "1rem", lineHeight: "1.2"})}}>
                    Мы — ведущая платформа на основе искусственного интеллекта, созданная для поддержки брокеров и инвесторов. Наша технология анализирует рынок и предоставляет точные прогнозы, помогая принимать обоснованные решения и увеличивать прибыль.
                    Мы развиваем решения не только для финансового сектора, но и для других отраслей, таких как агросектор и медицина, делая наш продукт универсальным и инновационным.

                </p>
                <p style={styles.paragraph}>
                    Основной доход компания получает за счёт сдачи в аренду нашего уникального софта другим компаниям, а также комиссий за предоставление услуг частным инвесторам и фондам.
                </p>
                <div style={styles.linkGroup}>
                    <span style={styles.smallText}>
                        Узнайте больше о нас и тех возможностях, которые мы предлагаем
                    </span>
                    <button style={styles.button}>
                        Больше о компании <AArrow width={24} height={24} color='#fff'/>
                    </button>
                </div>
            </div>
        </section>
    );
}
