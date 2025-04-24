import React from "react";
import man from "../../assets/img/wqf.png";
import light from "../../assets/img/rtyufwq2.png"
import rock from "../../assets/img/567f.png"
import grow from "../../assets/img/ff.png"
import skala from "../../assets/img/fghf21.png"
import qwf from "../../assets/img/rtyu.png"



const styles = {
    section: {
        padding: "80px 40px",
        backgroundColor: "#fff",
        textAlign: "center",
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
        // alignItems: "center",
    },
    stepImage: {
        width: 50,
        // height: '100%',
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
    return (
        <section style={styles.section}>

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: 'row'}}>
                <div style={{display: "flex", alignItems: 'flex-start', flexDirection: "column"}}>
                    <div style={styles.titleSmall}>Why us</div>
                    <h2 style={styles.titleLarge}>Benefits of working with us</h2>
                </div>
                <div style={styles.stepsContainer}>
                    <div style={styles.step}>
                        <img src={grow} alt="Create account" style={styles.stepImage}/>
                        <div style={styles.stepTitle}>Effective forecast</div>
                        <div style={styles.stepDescription}>High-level analytics and software for stable growth of client profits</div>
                    </div>
                    <div style={styles.step}>
                        <img src={skala} alt="Top up balance" style={styles.stepImage}/>
                        <div style={styles.stepTitle}>Achieving results</div>
                        <div style={styles.stepDescription}>We train and help clients achieve goals and success in investments</div>
                    </div>
                </div>
            </div>

            <div style={styles.stepsContainer}>
                <div style={styles.step}>
                    <img src={man} alt="Create account" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Professional team</div>
                    <div style={styles.stepDescription}>Experienced experts with deep knowledge in finance and AI</div>
                </div>
                <div style={styles.step}>
                    <img src={rock} alt="Top up balance" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Dynamic development</div>
                    <div style={styles.stepDescription}>Continuous implementation of new technologies for growth and efficiency</div>
                </div>
                <div style={styles.step}>
                    <img src={light} alt="Choose a plan" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Trusted choice</div>
                    <div style={styles.stepDescription}>We provide stability and protection of your investments</div>
                </div>
                <div style={styles.step}>
                    <img src={qwf} alt="Receive income" style={styles.stepImage}/>
                    <div style={styles.stepTitle}>Accurate forecasts</div>
                    <div style={styles.stepDescription}>Advanced technology for precision and risk reduction</div>
                </div>
            </div>
        </section>
);
}
