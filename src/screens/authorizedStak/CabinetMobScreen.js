import React, {useEffect, useState} from "react";
import BTC from '../../assets/img/btc.png'
import ETH from '../../assets/img/eth.png'
import LTC from '../../assets/img/ltc.png'
import TRX from '../../assets/img/trx.png'
import USDT from '../../assets/img/usdt.png'
import f from '../../assets/img/tyuw2.png'
import f2 from '../../assets/img/fqwf.png'
import axios from "axios";
import mainUrl from "../../constants";


const boxStyle = {
    backgroundColor: "#fff",
    // borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    marginBottom: "20px",
};

const titleStyle = {
    fontSize: "16px",
    fontWeight: 500,
    color: "gray",
    marginBottom: "22px",
};

const valueStyle = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#202020",
};

const labelStyle = {
    fontSize: "14px",
    color: "#6b7280",
};


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
    width: "95%",
    overflowX: "auto",
    maxWidth: "1200px", // Ограничение максимальной ширины на больших экранах
    margin: "0 auto",   // Центрирование
};

const mobileTableWrapper = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    width: "95%",
    overflowX: "auto",
    // maxWidth: "70vw",   // Чуть меньше полной ширины экрана
    margin: "0 auto",
};



const buttonStyle = {
    backgroundColor: "#f59e0b",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
};

export default function CabinetMobScreen() {
    const [cabinetData, setCabinetData] = useState(null);
    const [deposits, setDeposits] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                // Первый запрос: кабинет
                const cabinetResponse = await axios.get(`${mainUrl}/api/v1/user/cabinet`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });
                setCabinetData(cabinetResponse.data.data);
                await new Promise(resolve => setTimeout(resolve, 20));
                // Второй запрос: депозиты
                const depositsResponse = await fetch(`${mainUrl}/api/v1/user/deposits`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });

                // if (!depositsResponse.ok) throw new Error("Ошибка при получении данных");

                const depositsData = await depositsResponse.json();
                console.log('deposits: ', depositsData.data);
                setDeposits(depositsData.data);

            } catch (err) {
                if (err.response) {
                    setError(`Error ${err.response.status}: ${err.response.data.message || 'Something went wrong'}`);
                } else {
                    console.error("Ошибка загрузки:", err);
                    setError('Network error');
                }
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchData();
        } else {
            setError('Authorization token is missing');
            setLoading(false);
        }
    }, [token]);


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

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div>
            {/*<div style={boxStyle}>*/}
            {/*    <h2 style={titleStyle}>Панель управления</h2>*/}
            {/*    <img src="/support_banner.jpg" alt="Support" style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }} />*/}
            {/*    <p style={{ marginBottom: 12 }}>*/}
            {/*        Наша служба поддержки всегда на связи! Мы рады вашим пожеланиям и готовы помочь каждому партнёру 24/7. Обратитесь к нам за консультацией или с вопросами в любое время!*/}
            {/*    </p>*/}
            {/*    <button style={buttonStyle}>Поддержка →</button>*/}
            {/*</div>*/}
            <div style={{
                ...boxStyle, borderWidth: 2,
                borderColor: '#000',
                marginTop: -40,
                borderStyle: 'solid'
            }}>
                <h3 style={titleStyle}>Ваши балансы</h3>
                <p style={{marginLeft: '20%', color: "gray",}}>Общий баланс: <strong
                    style={{color: "#000"}}>{cabinetData?.availableForWithdrawal} $</strong></p>
                <p style={{marginLeft: '0%', color: "gray", fontSize: 12, textAlign: 'center'}}>Отображение общего баланса всех криптовалют в долларовом эквиваленте</p>

                <div style={{
                    display: "flex",
                    gap: "50%",
                    marginLeft: '10%',
                    marginTop: 12,
                    marginBottom: 12,
                }}>
                    {/* Левая колонка — 3 монеты */}
                    <div style={{display: "flex", flexDirection: "column", gap: 12}}>
                        {["BTC", "ETH", "LTC"].map(coin => {
                            let iconSrc = "";
                            switch (coin) {
                                case "BTC":
                                    iconSrc = BTC;
                                    break;
                                case "ETH":
                                    iconSrc = ETH;
                                    break;
                                case "LTC":
                                    iconSrc = LTC;
                                    break;
                                default:
                                    iconSrc = USDT;
                            }

                            return (
                                <div key={coin} style={{textAlign: "center"}}>
                                    <img src={iconSrc} alt={coin} width="40"/>
                                    <p style={{marginTop: 4, fontSize: 10, color: 'gray'}}>{coin}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Правая колонка — 2 монеты */}
                    <div style={{display: "flex", flexDirection: "column", gap: 12}}>
                        {["TRX", "USDT"].map(coin => {
                            let iconSrc = "";
                            switch (coin) {
                                case "TRX":
                                    iconSrc = TRX;
                                    break;
                                case "USDT":
                                    iconSrc = USDT;
                                    break;
                                default:
                                    iconSrc = USDT;
                            }

                            return (
                                <div key={coin} style={{textAlign: "center"}}>
                                    <img src={iconSrc} alt={coin} width="40"/>
                                    <p style={{marginTop: 4, fontSize: 10, color: 'gray'}}>{coin}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <a href='/balance' style={buttonStyle}>Пополнить / Вывести →</a>
            </div>

            <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                <div style={{...boxStyle, flex: "1 1 300px", position: "relative"}}>
                    <h3 style={valueStyle}>{cabinetData?.invested}</h3>
                    <p style={labelStyle}>Всего инвестировано, {cabinetData?.invested} $</p>
                    <img src={f} style={{width: '15%', position: 'absolute', right: 22, bottom: '30%'}}/>
                </div>
                <div style={{...boxStyle, flex: "1 1 300px", position: "relative"}}>
                    <h3 style={valueStyle}>{cabinetData?.totalEarned}</h3>
                    <p style={labelStyle}>Всего заработано, {cabinetData?.totalEarned} $</p>
                    <img src={f2} style={{width: '15%', position: 'absolute', right: 22, bottom: '30%'}}/>
                </div>
            </div>


            {/*<div style={boxStyle}>*/}
            {/*    <h3 style={titleStyle}>Последние 5 событий</h3>*/}
            {/*    <div style={{backgroundColor: "#fef2f2", color: "#b91c1c", padding: "10px", borderRadius: "6px"}}>*/}
            {/*        У вас ещё нет активных событий. Откройте новый депозит на вкладке <a href="/opendep"*/}
            {/*                                                                             style={{color: "#2563eb"}}>Открыть*/}
            {/*        депозит</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div style={isMobile ? mobileTableWrapper : tableWrapper}>
                <h3 style={titleStyle}>Последние 5 событий</h3>
                <table style={tableStyle}>
                    <thead>
                    {deposits?.length > 0 && <tr>
                        {/*<th style={{...thTdStyle, ...headerStyle}}>Тип</th>*/}
                        <th style={{...thTdStyle, ...headerStyle}}>Сумма</th>
                        <th style={{...thTdStyle, ...headerStyle}}>Дата</th>
                        <th style={{...thTdStyle, ...headerStyle}}>Статус</th>
                    </tr>}
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="3" style={thTdStyle}>Загрузка...</td>
                        </tr>
                    ) : (deposits && deposits.length > 0 ? (
                        deposits.slice(0, 5).map((event, index) => (
                            <tr key={index}>
                                <td style={thTdStyle}>{event.deposit} $</td>
                                <td style={thTdStyle}>{new Date(event.activated).toLocaleDateString()}</td>
                                <td style={{...thTdStyle, color: event.status ? 'green' : 'red'}}>
                                    {event.status ? "Активен" : "Не активен"}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">
                                <div style={{
                                    backgroundColor: "#e5e7eb", // светло-серый фон
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    color: "#ef4444", // красный текст
                                    position: "relative",
                                    fontSize: "14px",
                                    fontFamily: "Ubuntu",
                                }}>
                                    <button
                                        onClick={() => {/* можно реализовать скрытие */
                                        }}
                                        style={{
                                            position: "absolute",
                                            top: "8px",
                                            right: "10px",
                                            background: "transparent",
                                            border: "none",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            color: "#6b7280" // серый для крестика
                                        }}
                                    >
                                        ×
                                    </button>
                                    У вас ещё нет активных событий. <br/>
                                    Откройте новый депозит на вкладке{" "}
                                    <a href="/opendep"
                                       style={{color: "#2563eb", textDecoration: "none", fontWeight: "500"}}>
                                        Открыть депозит
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>


            <div style={{...boxStyle, marginTop: "40px",}}>
                {deposits && deposits.length > 0 ? <h3 style={titleStyle}>Вы получаете доход!</h3> :
                    <h3 style={titleStyle}>Вы не получаете доход!</h3>}
                {deposits && deposits.length > 0 ? <></> :
                    <p>На данный момент у вас <strong>нет</strong> активных депозитов</p>}
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "16px"}}>
                    <div>
                        <p style={labelStyle}>Активных депозитов</p>
                        <p style={valueStyle}>{cabinetData?.activeDeposits}</p>
                    </div>
                    {/*<div>*/}
                    {/*    <p style={labelStyle}>Ваш доход по бизнес дням</p>*/}
                    {/*    <p style={valueStyle}>- $</p>*/}
                    {/*</div>*/}
                    <div>
                        <p style={labelStyle}>Ближайшее начисление через:</p>
                        <p style={valueStyle}>00:00:00</p>
                    </div>
                </div>
                <a href='/mydeps' style={buttonStyle}>Мои депозиты →</a>
            </div>
        </div>
    );
}
