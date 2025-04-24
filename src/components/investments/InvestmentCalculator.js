import React, { useState } from "react";

const packages = {
    Standard: 0.017,
    Growth: 0.017, // assuming same rate as Standard
    Compound: 0.017,
    Accumulation: 0.017,
};

export default function InvestmentCalculator() {
    const [selectedPackage, setSelectedPackage] = useState("Standard");
    const [deposit, setDeposit] = useState(0);
    const [dailyProfit, setDailyProfit] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);

    const calculateProfit = () => {
        const rate = packages[selectedPackage];
        const days = 30; // assuming 30 business days
        const daily = deposit * rate;
        const total = daily * days + Number(deposit);
        setDailyProfit(daily.toFixed(2));
        setTotalProfit(total.toFixed(2));
    };

    return (
        <div style={{ display: "grid",paddingTop: '10rem', gridTemplateColumns: "1fr 1fr", gap: "2rem", padding: "2rem", paddingLeft: "20rem", paddingRight: "20rem" }}>
            <div>
                <h2 style={{ color: "#6b7280", marginBottom: "0.5rem", fontFamily: "Ubuntu", }}>Рассчитайте ваши доходы</h2>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", fontFamily: "Ubuntu",}}>Калькулятор</h1>
            </div>

            <div style={{  borderRadius: "1rem", padding: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Выберите инвестиционный пакет</label>
                    <select
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.5rem" }}
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                    >
                        {Object.keys(packages).map((pkg) => (
                            <option key={pkg} value={pkg}>
                                {pkg}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Сумма депозита</label>
                    <input
                        type="number"
                        placeholder="Введите сумму"
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.5rem" }}
                    />
                </div>

                <button
                    onClick={calculateProfit}
                    style={{ padding: "0.5rem 1rem",fontFamily: "Ubuntu", backgroundColor: "#111827", color: "white", borderRadius: "0.5rem", border: "none" }}
                >
                    Рассчитать
                </button>

                <div style={{ marginTop: "1rem" }}>
                    <p>
                        <strong>Доход по бизнес дням:</strong> {dailyProfit}
                    </p>
                    <p>
                        <strong>Общий доход по завершению:</strong> {totalProfit}
                    </p>
                </div>
            </div>
        </div>
    );
}
