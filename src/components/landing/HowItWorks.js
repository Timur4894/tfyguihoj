import React, { useEffect, useRef, useState } from "react";
import man from "../../assets/img/wqf.png";
import light from "../../assets/img/rtyufwq2.png";
import rock from "../../assets/img/567f.png";
import grow from "../../assets/img/ff.png";
import skala from "../../assets/img/fghf21.png";
import qwf from "../../assets/img/rtyu.png";

const styles = {
    section: {
        padding: "80px 40px",
        backgroundColor: "#fff",
        textAlign: "center",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 1.5s ease, transform 0.8s ease",
    },
    sectionVisible: {
        opacity: 1,
        transform: "translateY(0)",
    },
    titleSmall: {
        color: "#6B7280",
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: -40,
    },
    titleLarge: {
        fontSize: "48px",
        fontWeight: "700",
        fontFamily: "Ubuntu",
        width: "80%",
        marginBottom: "60px",
        textAlign: "left",
        color: "#111827",
    },
    stepsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
    },
    step: {
        display: "flex",
        flexDirection: "column",
    },
    stepImage: {
        width: 50,
        marginBottom: "20px",
    },
    stepTitle: {
        fontWeight: "600",
        fontSize: "18px",
        textAlign: "left",
        color: "#111827",
        marginBottom: "10px",
    },
    stepDescription: {
        fontSize: "14px",
        textAlign: "left",
        color: "#6B7280",
        maxWidth: "220px",
    },
};

export default function HowItWorks() {
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
                ...styles.section,
                ...(visible ? styles.sectionVisible : {}),
            }}
        >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: 'row'}}>
                <div style={{display: "flex", alignItems: 'flex-start', flexDirection: "column"}}>
                    <div style={styles.titleSmall}>Почему мы</div>
                    <h2 style={{...styles.titleLarge, ...(isMobile && { fontSize: "25px", marginTop: 50})}}>Преимущества работы с нами</h2>
                </div>
                {!isMobile && <div style={styles.stepsContainer}>
                    <div style={styles.step}>
                        <img src={grow} alt="Create account" style={styles.stepImage}/>
                        <div style={styles.stepTitle}>Эффективный прогноз</div>
                        <div style={styles.stepDescription}>Аналитика и софт высокого уровня для стабильного роста
                            прибыли клиентов
                        </div>
                    </div>
                    <div style={styles.step}>
                        <img src={skala} alt="Top up balance" style={styles.stepImage}/>
                        <div style={styles.stepTitle}>Достижение результатов</div>
                        <div style={styles.stepDescription}>Обучаем и помогаем клиентам достигать целей и успеха в
                            инвестициях
                        </div>
                    </div>
                </div>}
            </div>

            <div style={styles.stepsContainer}>
                {isMobile &&
                    <>
                        <div style={styles.step}>
                            <img src={grow} alt="Create account" style={styles.stepImage}/>
                            <div style={styles.stepTitle}>Эффективный прогноз</div>
                            <div style={styles.stepDescription}>Аналитика и софт высокого уровня для стабильного роста
                                прибыли клиентов
                            </div>
                        </div>
                        <div style={styles.step}>
                            <img src={skala} alt="Top up balance" style={styles.stepImage}/>
                            <div style={styles.stepTitle}>Достижение результатов</div>
                            <div style={styles.stepDescription}>Обучаем и помогаем клиентам достигать целей и успеха в
                                инвестициях
                            </div>
                        </div>
                    </>
                }
                <div style={styles.step}>
                    <img src={man} alt="Create account" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Профессиональная команда</div>
                    <div style={styles.stepDescription}>Опытные эксперты с глубокими знаниями в финансах и ИИ</div>
                </div>
                <div style={styles.step}>
                    <img src={rock} alt="Top up balance" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Динамичное развитие</div>
                    <div style={styles.stepDescription}>Постоянное внедрение новых технологий для роста и
                        эффективности
                    </div>
                </div>
                <div style={styles.step}>
                    <img src={light} alt="Choose a plan" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Надёжный выбор</div>
                    <div style={styles.stepDescription}>Обеспечиваем стабильность и защиту ваших инвестиций</div>
                </div>
                <div style={styles.step}>
                    <img src={qwf} alt="Receive income" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Точные прогнозы</div>
                    <div style={styles.stepDescription}>Передовые технологии для точности и снижения рисков</div>
                </div>
            </div>
        </section>
    );
}
