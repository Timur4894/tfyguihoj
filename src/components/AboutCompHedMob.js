import React from 'react';
import bg from '../assets/img/download.jpg';

const styles = {
    section: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        padding: '90px 0px',
        alignItems: 'center',
        position: 'relative',
        minHeight: '250px',
        color: '#000',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '20px',
    },
    breadcrumbs: {
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '1.5rem',
        color: '#1f2937',
    },
    breadcrumbLink: {
        margin: '0 4px',
        fontWeight: 600,
        color: '#1f2937',
        cursor: 'pointer',
    },
    backgroundTitle: {
        position: 'absolute',
        // left: '10%',
        bottom: '20px',
        fontSize: '3rem',
        fontWeight: 700,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        // userSelect: 'none',
        // pointerEvents: 'none',
    },
};

export default function AboutCompHedMob({title, subtitle}) {

    return (
        <>
            <section style={styles.section}>
                <div style={styles.container}>
                    <h1 style={styles.heading}>{title}</h1>
                    <div style={styles.breadcrumbs}>
                        <span style={styles.breadcrumbLink}>Главная</span>
                        <span>/</span>
                        <span style={styles.breadcrumbLink}>{subtitle}</span>
                    </div>
                </div>
                <div style={styles.backgroundTitle}>PRUDENTIAL</div>
            </section>
            <div style={{width: '100%', height: 1, backgroundColor: "#000"}}/>
        </>

    );
}
