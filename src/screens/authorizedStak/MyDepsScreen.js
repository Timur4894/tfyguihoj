import React, { useEffect, useState } from "react";

const MyDepsScreen = () => {
    const [deposits, setDeposits] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log('deposits: ', deposits)
    useEffect(() => {
        const fetchDeposits = async () => {
            try {
                const response = await fetch("/api/v1/user/deposits", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) throw new Error("Ошибка при получении данных");

                const data = await response.json();
                setDeposits(data.data.transformedPackages);
            } catch (error) {
                console.error("Ошибка загрузки депозитов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDeposits();
    }, []);

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px'
    };

    const thTdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center'
    };

    const headerStyle = {
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold'
    };

    const waitingStyle = {
        color: '#1E90FF',
        fontWeight: 'bold'
    };

    return (
        <div style={{ padding: "40px", paddingTop: 0, marginTop: -40, fontFamily: "Arial, sans-serif", width: "140vh" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Мои депозиты</h2>

            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    textAlign: "center",
                    marginBottom: "32px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #000",
                }}
            >
                {/* Описание */}
                Ознакомьтесь с нашими инвестиционными предложениями...
            </div>

            <div style={{ padding: '20px' }}>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={{ ...thTdStyle, ...headerStyle }}>№ Заказа</th>
                        <th style={{ ...thTdStyle, ...headerStyle }}>Депозит</th>
                        <th style={{ ...thTdStyle, ...headerStyle }}>Статус заказа</th>
                        <th style={{ ...thTdStyle, ...headerStyle }}>Выплачено</th>
                        <th style={{ ...thTdStyle, ...headerStyle }}>Активирован</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5" style={thTdStyle}>Загрузка...</td>
                        </tr>
                    ) : deposits.length === 0 ? (
                        <tr>
                            <td colSpan="5" style={thTdStyle}>Нет данных о депозитах</td>
                        </tr>
                    ) : (
                        deposits.map((dep, index) => (
                            <tr key={index}>
                                <td style={thTdStyle}>№{index + 1}</td>
                                <td style={thTdStyle}>{dep.deposit.toFixed(2)} $</td>
                                <td style={{ ...thTdStyle, ...(dep.status ? {} : waitingStyle) }}>
                                    {dep.status ? "Активен" : "Ожидание"}
                                </td>
                                <td style={thTdStyle}>{dep.paidOut.toFixed(2)} / {dep.deposit.toFixed(2)} $</td>
                                <td style={thTdStyle}>{new Date(dep.activated).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDepsScreen;
