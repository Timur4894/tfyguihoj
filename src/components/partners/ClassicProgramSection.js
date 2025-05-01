import React, {useEffect, useRef, useState} from 'react';
import img from '../../assets/img/partner01.jpg'
import dots from "../../assets/img/pattern.png";

const styles = {
    section: {
        display: 'flex',
        // gridTemplateColumns: '1fr',
        gap: '2rem',
        padding: '2rem',
        alignItems: 'center',
    },
    sectionMd: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        // gridTemplateColumns: '1fr',
        padding: '2rem',
        // alignItems: 'center',
    },
    image: {
        width: '110%',
        zIndex: 1
        // boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    heading: {
        fontSize: '2.9rem',
        marginLeft: '10%',
        fontWeight: '600',
        fontFamily: "Ubuntu",
        // alignSelf: 'center',
        marginBottom: '1rem',
        color: '#1a1a1a',
    },
    paragraph: {
        color: '#4b5563',
        marginLeft: '10%',
        marginBottom: '1.5rem',
        fontFamily: "Ubuntu",
        width: '60%',
        lineHeight: '1.6',
    },
    subheading: {
        fontSize: '1.5rem',
        marginLeft: '20%',
        fontFamily: "Ubuntu",
        fontStyle: 'italic',
        fontWeight: '900',
        marginBottom: '0.5rem',
    },
    percentages: {
        fontSize: '4.5rem',
        fontFamily: "Ubuntu",
        marginLeft: '20%',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(0, 0, 0)',
        fontWeight: '300',
        // color: '#1f2937',
    },
    section: {
        display: "flex",
        // flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 40px",
        backgroundColor: "#fff",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 1.5s ease, transform 0.8s ease",
    },
    sectionVisible: {
        opacity: 1,
        transform: "translateY(0)",
    },
};

export default function ClassicProgramSection() {
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
                ...(isMobile ? {flexDirection: 'column'} : {}),
            }}
        >
            <div style={{width: '100%', marginLeft: 50, ...(isMobile && { marginLeft: 0})}}>
                <img
                    src={img}
                    alt="Two businessmen shaking hands"
                    style={styles.image}
                />
            </div>

            <div style={{...styles.sectionMd,  ...(isMobile && {padding: '0rem',})}}>
                <img src={dots} alt="Cyber Lion" style={{
                    width: "30%",
                    height: "auto",
                    position: "absolute",
                    left: '-20%',
                    top: '30%',
                    zIndex: 0
                }}/>
                <h2 style={{...styles.heading, ...(isMobile && {fontSize: '34px'})}}>Классическая <br/>программа</h2>
                <p style={{...styles.paragraph,...(isMobile && {width: '100%',})}}>
                    Присоединяйтесь к партнёрской программе, приглашайте новых участников и получайте стабильный доход с
                    их депозитов. Программа охватывает три уровня структуры, так что каждый новый партнёр приносит вам
                    прибыль. Создайте свою команду и наблюдайте, как ваш доход растёт с каждым новым шагом!
                </p>
                <div>
                    <h3 style={styles.subheading}>3 уровня структуры</h3>
                    <p style={{...styles.percentages, ...(isMobile && {fontSize: '34px'})}}>
                        5% - 3% - 2%
                    </p>
                </div>
            </div>
        </section>
    );
}
