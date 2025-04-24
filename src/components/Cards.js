import React from "react";

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
        gap: "24px",
        justifyContent: "center",
    },
    card: {
        maxWidth: '15%',
        width: '20%',
        border: "1px solid #000",
        // borderRadius: "8px",
        padding: "132px 24px",
        backgroundColor: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    darkCard: {
        backgroundColor: "#111827",
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
        fontSize: "22px",
        fontWeight: "600",
        marginBottom: "8px",
        fontFamily: "Ubuntu",
    },
    description: {
        fontSize: "12px",
        color: "#6B7280",
        marginBottom: "16px",
        fontFamily: "Ubuntu",
    },
    percent: {
        fontSize: '6rem',
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
        padding: "12px",
        width: "100%",
        border: "1px solid #D1D5DB",
        backgroundColor: "#fff",
        fontWeight: "bold",
        fontSize: "14px",
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
        type: "Daily",
        desc: "Daily accruals available for withdrawal",
        deposits: "from 100$ to 1000$",
        days: "100 business days",
        dark: false,
    },
    {
        title: "Growth",
        rate: "+1.7%",
        type: "Daily",
        desc: "Daily accruals available for withdrawal",
        deposits: "from 1000$ to 10000$",
        days: "85 business days",
        dark: false,
    },
    {
        title: "Compound",
        rate: "+2.3%",
        type: "Cumulative",
        desc: "Daily increases in the deposit body",
        deposits: "from 10000$ to 50000$",
        days: "40 business days",
        dark: true,
    },
    {
        title: "Accumulation",
        rate: "+2.9%",
        type: "Cumulative",
        desc: "Daily increases in the deposit body",
        deposits: "from 100000$",
        days: "20 business days",
        dark: true,
    },
];

const Cards = () => {
    return (
        <div style={styles.cardsContainer}>
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
                    <div style={styles.planTitle}>{plan.title}</div>
                    <div style={styles.description}>{plan.desc}</div>
                    <div style={{
                        ...styles.percent,
                        ...((index === 1 || index === 0)
                            ? {color: 'transparent', WebkitTextStroke: '1px rgba(0, 0, 0, 0.5)'}
                            : {}),
                    }}>
                        {plan.rate}
                    </div>


                    <div style={styles.perDay}>PER DAY</div>
                    <div style={styles.details}>
                        Deposits <strong>{plan.deposits}</strong>
                        <br/>
                        <br/>
                        Working period <strong>{plan.days}</strong>
                    </div>
                    <button
                        style={{
                            ...styles.button,
                            ...(plan.dark ? styles.darkButton : {}),
                        }}
                    >
                        More details
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cards
