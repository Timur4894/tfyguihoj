import React from "react";
import logo from "../../assets/img/partners.png";
import circ from "../../assets/img/shape-1.png";
import a from "../../assets/img/a.png";

const styles = {
    section: {
        padding: "100px 40px",
        backgroundColor: "#F3F6FA",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        flexWrap: "wrap",
    },
    image: {
        maxWidth: "450px",
        width: "90%",
        height: "auto",
    },
    content: {
        maxWidth: "600px",
        textAlign: "left",
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
    return (
        <section style={styles.section}>
            <img
                src={a}
                alt="Team puzzle graphic"
                style={{width: '20%', position: 'absolute', top: '20%', right: '5%', zIndex: 0}}
            />
            <img
                src={circ}
                alt="Team puzzle graphic"
                style={{width: '15%', position: 'absolute', top: '0%', left: '5%'}}
            />
            <img
                src={logo}
                alt="Team puzzle graphic"
                style={styles.image}
            />
            <div style={styles.content}>
                <div style={styles.subtitle}>Умножай свой заработок с каждым партнёром</div>
                <div style={styles.title}>Твоя команда — твой потенциал</div>
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
