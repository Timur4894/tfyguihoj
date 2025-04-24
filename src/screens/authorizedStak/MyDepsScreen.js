import React from "react";

const styles = {
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
        color: 'transparent', WebkitTextStroke: '1px rgba(0, 0, 0, 0.5)',
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
}

const plan =
    {
        title: "Standard",
        rate: "+1.3%",
        type: "Daily",
        desc: "Daily accruals available for withdrawal",
        deposits: "from 100$ to 1000$",
        days: "100 business days",
        dark: false,
    }


const MyDepsScreen = () => {


    return (
        <div style={{padding: "24px", fontFamily: "Arial, sans-serif", width: "140vh" }}>
            <h2 style={{fontSize: "20px", fontWeight: "bold", marginBottom: "16px"}}>Мои депозиты</h2>

            <div
                style={{
                    backgroundColor: "#fff",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    padding: "16px",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    textAlign: "center",
                    marginBottom: "32px",
                }}
            >
                Ознакомьтесь с нашими инвестиционными предложениями, выберите подходящее и активируйте его. Перед
                активацией,
                пожалуйста, пополните необходимый баланс в разделе <strong>Балансы</strong>. После подтверждения
                активации с
                баланса будет списана сумма, равная сумме депозита. Инвестиционные
                пакеты <strong>Standard</strong> и{" "}
                <strong>Growth</strong> обеспечивают ежедневные начисления на баланс, с которого средства доступны к
                выводу.
                Пакеты <strong>Compound</strong> и <strong>Accumulation</strong> предлагают накопительный эффект:
                начисления
                также происходят каждый бизнес-день, но автоматически добавляются к телу депозита, работая по принципу
                сложного процента.
            </div>

            <div
                style={{
                    ...styles.card,
                    position: "relative",
                }}
            >

                    <div
                        style={{
                            ...styles.label,
                        }}
                    >
                        {plan.type}
                    </div>

                <div style={styles.planTitle}>{plan.title}</div>
                <div style={styles.description}>{plan.desc}</div>
                <div style={{
                    ...styles.percent

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
        </div>
    );
};

export default MyDepsScreen;
