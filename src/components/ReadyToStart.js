import React, {useEffect, useState} from "react";

const ReadyToStart = () => {
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
        <section style={{...styles.section, ...(isMobile && {flexDirection: 'column'}) }}>
            <div style={styles.left}>
                <h2 style={styles.title}>Готовы начать?</h2>
                <p style={styles.subtitle}>
                    Присоединяйтесь сегодня и начните строить свой доход с нашей партнёрской программой!
                    Получите доступ к уникальным возможностям заработка и развивайте свою команду для стабильного роста дохода.
                </p>
            </div>

            <div style={styles.right}>
                <a href="/register" style={{...styles.circleButton, ...(isMobile && {width: '150px',
                        height: '150px',}) }}>
                    РЕГИСТРАЦИЯ
                </a>
            </div>
        </section>
    );
};

const styles = {
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 80px',
        paddingBottom: '150px',
    },
    left: {
        maxWidth: '600px',
    },
    title: {
        fontSize: '48px',
        fontWeight: '700',
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '18px',
        color: '#333',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleButton: {
        width: '17vw',
        height: '17vw',
        borderRadius: '50%',
        backgroundColor: '#f7faff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '18px',
        textDecoration: 'none',
        color: '#1c1c1c',
        border: '1px solid #000',
    },
};

export default ReadyToStart;
