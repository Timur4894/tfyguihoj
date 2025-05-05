import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const styles = {
    section: {
        padding: "80px 40px",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    subTitle: {
        fontSize: "14px",
        color: "#6B7280",
        fontFamily: "Ubuntu",
        marginBottom: -40
        // marginBottom: "12px",
    },
    title: {
        fontSize: "48px",
        fontWeight: "600",
        fontFamily: "Ubuntu",
        width: "40%",
        textAlign: "left",
        // marginBottom: "48px",
        color: "#111827",
    },
    cardsContainer: {
        display: "flex",
        // flexWrap: "wrap",
        // backgroundColor: "#000",
        gap: "24px",
        flexDirection: "column",
        justifyContent: "center",
    },
    card: {
        // maxWidth: '15%',
        // width: '20%',
        border: "1px solid #000",
        // borderRadius: "8px",
        padding: "132px 28px",
        backgroundColor: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    darkCard: {
        backgroundColor: "#1e2428",
        color: "#fff",
        border: "none",
    },
    label: {
        backgroundColor: "#E5E7EB",
        color: "#374151",
        padding: "4px 8px",
        fontSize: "12px",
        fontFamily: "Ubuntu",
        fontWeight: "600",
        position: "absolute",
        top: "0px",
        right: "0px",
    },
    darkLabel: {
        backgroundColor: "#374151",
        color: "#fff",
    },
    planTitle: {
        fontSize: "32px",
        fontWeight: "500",
        marginBottom: "8px",
        fontFamily: "Ubuntu",
    },
    description: {
        fontSize: "16px",
        color: "#6B7280",
        textAlign: 'center',
        fontWeight: "400",
        marginBottom: "16px",
        fontFamily: "Ubuntu",
    },
    percent: {
        fontSize: '5rem',
        fontWeight: "500",
        marginBottom: "8px",
    },
    perDay: {
        fontSize: "20px",
        fontFamily: "Ubuntu",
        color: "#000",
        marginBottom: "16px",
    },
    details: {
        fontSize: "12px",
        fontWeight: "500",
        fontFamily: "Ubuntu",
        color: "#6B7280",
        marginBottom: "24px",
    },
    button: {
        marginTop: "auto",
        padding: "16px",
        width: "100%",
        border: "1px solid #D1D5DB",
        backgroundColor: "#fff",
        color: "#000",
        fontWeight: "bold",
        fontSize: "16px",
        // borderRadius: "6px",
        cursor: "pointer",
        fontFamily: "Ubuntu",
    },
    darkButton: {
        backgroundColor: "#fff",
        color: "#111827",
    },
};

const investmentPlans = [
    {
        title: "Standard",
        rate: "+1.3%",
        type: "Ежедневно",
        desc: "Ежедневные начисления доступны для вывода",
        deposits: "от 100$ до 1000$",
        days: "100 рабочих дней",
        dark: false,
    },
    {
        title: "Growth",
        rate: "+1.7%",
        type: "Ежедневно",
        desc: "Ежедневные начисления доступны для вывода",
        deposits: "от 1000$ до 10000$",
        days: "85 рабочих дней",
        dark: false,
    },
    {
        title: "Compound",
        rate: "+2.3%",
        type: "Накопительный",
        desc: "Ежедневное увеличение тела депозита",
        deposits: "от 10000$ до 50000$",
        days: "40 рабочих дней",
        dark: true,
    },
    {
        title: "Accumulatiom",
        rate: "+2.9%",
        type: "Накопительный",
        desc: "Ежедневное увеличение тела депозита",
        deposits: "от 50000$",
        days: "20 рабочих дней",
        dark: true,
    },
];


const CardsMob = ({authTrue = false, onActivate = null}) => {

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

    const navigate = useNavigate();

    return (
        <div style={{...styles.cardsContainer }}>
            {investmentPlans.map((plan, index) => (
                <div
                    key={index}
                    style={{
                        ...styles.card,
                        ...(plan.dark ? styles.darkCard : {}),
                        position: "relative",
                    }}
                >
                    {plan.type === "Cumulative" && (
                        <div
                            style={{
                                ...styles.label,
                                ...(plan.dark ? styles.darkLabel : {}),
                            }}
                        >
                            {plan.type}
                        </div>
                    )}
                    {plan.dark && (
                        <div style={{position: 'absolute', top: 0, right: 0, padding: 10, backgroundColor: '#353a3e'}}>
                            <p style={{fontFamily: 'Ubuntu', marginBottom: 0, marginTop: 0, fontWeight: '500'}}>Накопительный</p>
                        </div>
                    )}
                    <div style={styles.planTitle}>{plan.title}</div>
                    <div style={styles.description}>{plan.desc}</div>
                    <div style={{
                        ...styles.percent,
                        ...((index === 1 || index === 0)
                            ? {color: 'transparent', WebkitTextStroke: '1px rgba(0, 0, 0, 0.5)'}
                            : {}),
                        ...authTrue && {fontSize: '4rem',}
                    }}>
                        {plan.rate}
                    </div>


                    <div style={styles.perDay}>{(index === 1 || index === 0) ? 'В ДЕНЬ' : ''}</div>
                    <div style={styles.details}>
                        <div style={{marginTop: 0, marginBottom: -15, marginLeft: 10}}>Депозит <strong style={{color: plan.dark ? '#fff' : '#000'}}>{plan.deposits}</strong></div>
                        <br/>
                        <br/>
                        Срок работы <strong style={{color: plan.dark ? '#fff' : '#000'}}>{plan.days}</strong>
                    </div>
                    <button
                        onClick={authTrue ? onActivate : () => navigate('/investments')}
                        style={{
                            ...styles.button,
                            ...(plan.dark ? styles.darkButton : {}),
                            ...(authTrue && {position: 'absolute', bottom: 0, right: 0, paddingBottom: 20, backgroundColor: '#fff',  fontSize: 28, display: 'flex',alignItems: 'center', justifyContent: 'center'}),
                        }}
                    >
                        {authTrue && <ion-icon name="flash-outline"></ion-icon>}
                        Активировать
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CardsMob
