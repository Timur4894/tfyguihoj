import React, {useEffect, useRef, useState} from 'react';
import img1 from '../../assets/img/contact_city.jpg';
import img2 from '../../assets/img/contact_city2.jpg';


const styles = {
    section: {
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        padding: '5rem 2rem',
        // flexWrap: 'wrap',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '600px',
        gap: '1.5rem',
    },
    image: {
        width: '50%',
        height: '100%',
        // borderRadius: '0.5rem',
        // objectFit: 'cover',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#111827',
    },
    title: {
        fontSize: '1.7rem',
        fontFamily: "Ubuntu",
        fontWeight: '400',
        marginBottom: '0.5rem',
    },
    email: {
        color: '#6B7280',
        marginBottom: '0.3rem',
        fontFamily: "Ubuntu",
        fontSize: '0.8rem',
    },
    phone: {
        color: '#6B7280',
        fontFamily: "Ubuntu",
        fontSize: '0.8rem',
        marginBottom: '0.8rem',
    },
    address: {
        fontFamily: "Ubuntu",
        fontSize: '0.9rem',
        // fontSize: '1rem',
        lineHeight: '1.5',
    },
    section: {
        display: "flex",
        flexWrap: "wrap",
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

export default function OfficesSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section
            ref={sectionRef}
            style={{
                ...styles.section,
                ...(isVisible ? styles.sectionVisible : {}),
                ...(isMobile && {flexDirection: 'column'}),
            }}
        >
            <div style={{...styles.card, ...(isMobile && {flexDirection: 'column', marginBottom: '56px'}) ,}}>
                <img
                    src={img1}
                    style={{...styles.image, ...(isMobile && { width: '100%',
                            height: '100%',}) ,}}
                />
                <div style={styles.info}>
                    <div style={styles.title}>United States of America
                    </div>
                    <div style={styles.email}>prudentialinvestmoney@gmail.com</div>
                    <div style={styles.phone}>+1 (617) 236-3100</div>
                    <div style={styles.address}>
                        800 Boylston St, Boston, MA<br/>
                        02199, United States of America
                    </div>
                </div>
            </div>

            <div style={{...styles.card, ...(isMobile && {flexDirection: 'column', marginBottom: '56px'}),}}>
                <img
                    src={img2}
                    style={{...styles.image, ...(isMobile && { width: '100%',
                            height: '100%',}) ,}}
                />
                <div style={styles.info}>
                    <div style={styles.title}>Japan</div>
                    <div style={styles.email}>prudentialinvestmoney@gmail.com</div>
                    <div style={styles.phone}>+(248) 251 7412</div>
                    <div style={styles.address}>
                        Nagatachō, Chiyoda City, Tokyo<br/>
                        100-0014, Japan
                    </div>
                </div>
            </div>
        </section>
    );
}
