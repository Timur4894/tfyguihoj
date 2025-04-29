import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/partners.png";
import circ from "../../assets/img/shape-1.png";
import a from "../../assets/img/a.png";

const baseSection = {
    padding: "100px 40px",
    backgroundColor: "#F3F6FA",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    opacity: 0,
    transform: "translateY(50px)",
    transition: "opacity 1.5s ease, transform 0.8s ease",
};

const styles = {
    sectionVisible: {
        opacity: 1,
        transform: "translateY(0)",
    },
    image: {
        maxWidth: "450px",
        width: "90%",
        height: "auto",
    },
    content: {
        maxWidth: "600px",
        textAlign: "left",
        zIndex: 1,
    },
    subtitle: {
        fontSize: "16px",
        color: "#6B7280",
        marginBottom: "8px",
        fontFamily: "Ubuntu",
    },
    title: {
        fontSize: "56px",
        fontWeight: "700",
        color: "#111827",
        fontFamily: "Ubuntu",
        marginBottom: "24px",
        lineHeight: "1.2",
    },
    paragraph: {
        fontSize: "16px",
        color: "#4B5563",
        fontFamily: "Ubuntu",
        zIndex: 1,
        marginBottom: "32px",
    },
    button: {
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "Ubuntu",
        padding: "14px 28px",
        borderRadius: "10px",
        fontWeight: "600",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
    },
};

export default function TeamPotentialSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.2 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
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
                ...baseSection,
                ...(visible ? styles.sectionVisible : {}),
            }}
        >
            <img
                src={a}
                alt="Background decoration"
                style={{ width: '20%', position: 'absolute', top: '20%', right: '5%', zIndex: 0 }}
            />
            <img
                src={circ}
                alt="Background circle"
                style={{ width: '15%', position: 'absolute', top: '0%', left: '5%' }}
            />
            <img
                src={logo}
                alt="Team visual"
                style={styles.image}
            />
            <div style={styles.content}>
                <div style={styles.subtitle}>Умножай свой заработок с каждым партнёром</div>
                <div style={{...styles.title, ...(isMobile && { fontSize: "25px", marginTop: 50})}}>Твоя команда — твой потенциал</div>
                <div style={styles.paragraph}>
                    Раскройте потенциал дохода с нашей уникальной трёхуровневой партнёрской программой! Каждый уровень приносит вам солидные бонусы. И это ещё не всё! Мы предлагаем матчинг-бонус, который позволяет зарабатывать каждый раз, когда ваш реферал получает доход. Присоединяйтесь к нам, приглашайте партнёров и стройте свою команду, где каждый шаг увеличивает ваш заработок. Эта программа создана, чтобы ваш успех рос вместе с успехом ваших партнёров!
                </div>
                <button style={styles.button}>
                    Узнать больше &rarr;
                </button>
            </div>
        </section>
    );
}
