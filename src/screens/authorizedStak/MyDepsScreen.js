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
        // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        overflowX: "auto",
        maxWidth: "1200px", // Ограничение максимальной ширины на больших экранах
        margin: "0 auto",   // Центрирование
    };

    const mobileTableWrapper = {
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "10px",
        // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        width: "100%",
        overflowX: "auto",
        // maxWidth: "70vw",   // Чуть меньше полной ширины экрана
        margin: "0 auto",
    };


    const formatMillisecondsToTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div style={{padding: "0px", paddingTop: 0, marginTop: -40, fontFamily: "Arial, sans-serif"}}>
            <h2 style={{fontSize: "20px", fontWeight: "bold", marginBottom: "16px"}}>Мои депозиты</h2>

            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    textAlign: "center",
                    marginBottom: "32px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #000",
                }}
            >
                Ознакомьтесь с нашими инвестиционными предложениями, выберите подходящее и активируйте его. Перед активацией, пожалуйста, пополните необходимый баланс в разделе Балансы . После подтверждения активации с баланса будет списана сумма, равная сумме депозита. Инвестиционные пакеты Standard и Growth обеспечивают ежедневные начисления на баланс, с которого средства доступны к выводу. Пакеты Compound и Accumulation предлагают накопительный эффект: начисления также происходят каждый бизнес-день, но автоматически добавляются к телу депозита, работая по принципу сложного процента.
            </div>
            {/*nextPayment*/}
            {/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}{/*nextPayment*/}
            {/*<div style={isMobile ? mobileTableWrapper : tableWrapper}>*/}
            {/*    <table style={tableStyle}>*/}
            {/*        <thead>*/}
            {/*        <tr>*/}
            {/*            <th style={{...thTdStyle, ...headerStyle}}>№ Заказа</th>*/}
            {/*            <th style={{...thTdStyle, ...headerStyle}}>Депозит</th>*/}
            {/*            <th style={{...thTdStyle, ...headerStyle}}>Статус заказа</th>*/}
            {/*            <th style={{...thTdStyle, ...headerStyle}}>Выплачено</th>*/}
            {/*            <th style={{...thTdStyle, ...headerStyle}}>Активирован</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*        {loading ? (*/}
            {/*            <tr>*/}
            {/*                <td colSpan="5" style={thTdStyle}>Загрузка...</td>*/}
            {/*            </tr>*/}
            {/*        ) : deposits.length === 0 ? (*/}
            {/*            <tr>*/}
            {/*                <td colSpan="5" style={thTdStyle}>Нет данных о депозитах</td>*/}
            {/*            </tr>*/}
            {/*        ) : (*/}
            {/*            deposits.map((dep, index) => (*/}
            {/*                <tr key={index}>*/}
            {/*                    <td style={thTdStyle}>№{index + 1}</td>*/}
            {/*                    <td style={thTdStyle}>{dep.deposit.toFixed(2)} $</td>*/}
            {/*                    <td style={{...thTdStyle, ...(dep.status ? {} : waitingStyle)}}>*/}
            {/*                        {dep.status ? "Активен" : "Не активен"}*/}
            {/*                    </td>*/}
            {/*                    <td style={thTdStyle}>{dep.paidOut} $</td>*/}
            {/*                    <td style={thTdStyle}>{formatMillisecondsToTime(Number(dep.nextPayment))}</td>*/}
            {/*                </tr>*/}
            {/*            ))*/}
            {/*        )}*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
            <div style={isMobile ? mobileTableWrapper : tableWrapper}>
                {loading ? (
                    <div style={{fontFamily: "Ubuntu", fontSize: "14px"}}>Загрузка...</div>
                ) : deposits.length === 0 ? (
                    <div style={{fontFamily: "Ubuntu", fontSize: "14px"}}>Нет данных о депозитах</div>
                ) : (
                    deposits.map((dep, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                position: "relative",
                                marginBottom: "50px",
                                fontFamily: "Ubuntu",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                color: "#374151",
                            }}
                        >
                            <div style={{
                                marginRight: "36px",
                                marginBottom: 20,
                                fontFamily: "Ubuntu",
                                color: "#4a4a4a",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <strong>№ Заказа:</strong> {index + 1}
                            </div>
                            <div style={{
                                marginRight: "36px",
                                fontFamily: "Ubuntu",
                                color: "#4a4a4a",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <strong>Депозит:</strong> {dep.deposit.toFixed(2)} $
                            </div>
                            <div style={{
                                marginRight: "36px",
                                fontFamily: "Ubuntu",
                                color: "#4a4a4a",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <strong>Статус заказа:</strong>{" "}
                                <span style={{color: '#4a4a4a'}}>
            {dep.status ? "Активен" : "Не активен"}
          </span>
                            </div>
                            <div style={{
                                marginRight: "36px",
                                fontFamily: "Ubuntu",
                                color: "#4a4a4a",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <strong>Выплачено:</strong> {dep.paidOut} $
                            </div>
                            <div style={{
                                marginRight: "36px",
                                fontFamily: "Ubuntu",
                                color: "#4a4a4a",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <strong>Выплата через:</strong> {formatMillisecondsToTime(Number(dep.nextPayment))}
                            </div>

                            <div style={{
                                marginRight: "36px",
                                fontFamily: "Ubuntu",
                                color: "#4a4a4a",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: 20,
                            }}>
                                <strong>Дата активации:</strong> {new Date(dep.dateOfCreation).toLocaleString("ru-RU", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                            </div>

                            <div style={{
                                width: '100%',
                                height: 2,
                                backgroundColor: "#aaa",
                                position: "absolute",
                                bottom: "0px",
                                left: -10
                            }}/>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default MyDepsScreen;
