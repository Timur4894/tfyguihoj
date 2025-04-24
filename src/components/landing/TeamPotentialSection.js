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
                <div style={styles.subtitle}>Multiply your earnings with each partner</div>
                <div style={styles.title}>Your team is your potential</div>
                <div style={styles.paragraph}>
                    Unlock your income potential with our unique three-level affiliate program! Each level brings you
                    solid bonuses. And that's not all! We offer a matching bonus that allows you to earn money every
                    time your referral generates income. Join us, invite partners and build your team, where every step
                    increases your earnings. This program was created so that your success grows along with the success
                    of your partners!
                </div>
                <button style={styles.button}>
                    Find out more &rarr;
                </button>
            </div>
        </section>
    );
}
