import React from "react";
import Cards from "../../components/Cards";

const OpenDepScreen = () => {
    return (
        <div style={{width: "140vh", marginTop: -40 }}>
            <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>
                Открыть новый депозит
            </h2>

            <div
                style={{
                    // border: "1px solid #ccc",
                    borderRadius: "0px",
                    padding: "16px",
                    backgroundColor: "#fff",
                    marginBottom: "24px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #000",
                }}
            >
                <p style={{ fontSize: "14px", color: "#000", textAlign: "center" }}>
                    Ознакомьтесь с нашими инвестиционными предложениями, выберите подходящее и активируйте его. Перед активацией, пожалуйста, пополните необходимый баланс в разделе <strong>Балансы</strong>. После подтверждения активации с баланса будет списана сумма, равная сумме депозита. Инвестиционные пакеты <strong>Standard</strong> и <strong>Growth</strong> обеспечивают ежедневные начисления на баланс, с которого средства доступны к выводу. Пакеты <strong>Compound</strong> и <strong>Accumulation</strong> предлагают накопительный эффект: начисления также происходят каждый бизнес-день, но автоматически добавляются к телу депозита, работая по принципу сложного процента.
                </p>
            </div>
            <Cards authTrue={true}/>
        </div>
    );
};

export default OpenDepScreen;
