import React, { useEffect, useState } from "react";
import mainUrl from "../../constants";

const MyDepsScreen = () => {
    const [deposits, setDeposits] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem('authToken');

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

    useEffect(() => {
        const fetchDeposits = async () => {
            try {
                const response = await fetch(`${mainUrl}/api/v1/user/deposits`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });

                if (!response.ok) throw new Error("Ошибка при получении данных");

                const data = await response.json();
                console.log('response: ', data.data);
                setDeposits(data.data);
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

    const tableWrapper = {
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        overflowX: "auto",
        maxWidth: "1200px", // Ограничение максимальной ширины на больших экранах
        margin: "0 auto",   // Центрирование
    };

    const mobileTableWrapper = {
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        width: "100%",
        overflowX: "auto",
        maxWidth: "70vw",   // Чуть меньше полной ширины экрана
        margin: "0 auto",
    };


    return (
        <div style={{ padding: "0px", paddingTop: 0, marginTop: -40, fontFamily: "Arial, sans-serif" }}>
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
            {/*nextPayment*/}
            {/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}
            <div style={isMobile ? mobileTableWrapper : tableWrapper}>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={{...thTdStyle, ...headerStyle}}>№ Заказа</th>
                        <th style={{...thTdStyle, ...headerStyle}}>Депозит</th>
                        <th style={{...thTdStyle, ...headerStyle}}>Статус заказа</th>
                        <th style={{...thTdStyle, ...headerStyle}}>Выплачено</th>
                        <th style={{...thTdStyle, ...headerStyle}}>Активирован</th>
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
                                <td style={{...thTdStyle, ...(dep.status ? {} : waitingStyle)}}>
                                    {dep.status ? "Активен" : "Не активен"}
                                </td>
                                <td style={thTdStyle}>{dep.paidOut} $</td>
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
