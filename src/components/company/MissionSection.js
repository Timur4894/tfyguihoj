import React from 'react';

const styles = {
    section: {
        padding: '40px 90px',
        // maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
        color: '#1a1a1a',
    },
    heading: {
        fontSize: '28px',
        fontFamily: "Ubuntu",
        fontWeight: '900',
        marginBottom: '10px',
    },
    subheading: {
        fontSize: '28px',
        fontFamily: "Ubuntu",
        fontWeight: '900',
        marginTop: '30px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        lineHeight: '1.6',
        fontWeight: '600',
        fontFamily: "Ubuntu",
        marginBottom: '10px',
    },
    list: {
        paddingLeft: '20px',
        fontFamily: "Ubuntu",
        marginBottom: '10px',
    },
    listItem: {
        marginBottom: '10px',
    },
    bold: {
        fontWeight: '900',
    },
};

const MissionSection = () => {
    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Our mission and goals</h2>
            <p style={styles.text}>
                Our mission is to make cutting-edge technology available to everyone who strives for success in the financial markets and other significant sectors. We are confident that intelligent solutions can not only increase profits, but also minimize risks and open up new business opportunities. The main goal of our work is to provide reliable tools that can be integrated into daily asset management and decision-making processes.
            </p>

            <h3 style={styles.subheading}>Key directions and innovations</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Financial sector</span>: Our solutions are in demand among brokers and private investors, to whom we provide access to intelligent algorithms for analyzing financial data, market forecasting and asset management.
                </li>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Agricultural sector</span>: Using our artificial intelligence, companies in the agribusiness sector can receive accurate crop yield forecasts, crop recommendations, and tips to improve productivity.
                </li>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Medicine</span>: In medicine, our artificial intelligence helps in the development of vaccines and medical solutions, accelerating the process of creating effective drugs and treatments.
                </li>
            </ul>

            <h3 style={styles.subheading}>Revenue and growth strategy</h3>
            <p style={styles.text}>
                We offer unique software that companies can rent to optimize their work processes and gain a competitive advantage. This allows us to earn income from software rentals as well as fees for providing services to private investors and funds that use our asset management tools.
            </p>
            <p style={styles.text}>
                Our strategy is based on long-term cooperation and expanding the areas of use of our software. We are actively developing new solutions and integrating them into different industries, which makes our product even more versatile and in demand.
            </p>
        </section>
    );
};

export default MissionSection;
