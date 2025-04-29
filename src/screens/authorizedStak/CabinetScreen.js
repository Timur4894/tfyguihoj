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
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "12px",
};

const valueStyle = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#111",
};

const labelStyle = {
    fontSize: "14px",
    color: "#6b7280",
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

export default function CabinetScreen() {
    const [cabinetData, setCabinetData] = useState(null);
    const [balance, setBalance] = useState(999);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('authToken');


    useEffect(() => {
        const fetchCabinetData = async () => {
            try {
                const response = await axios.get(`${mainUrl}/api/v1/user/cabinet`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCabinetData(response.data.data);
            } catch (err) {
                if (err.response) {
                    setError(`Error ${err.response.status}: ${err.response.data.message || 'Something went wrong'}`);
                } else {
                    setError('Network error');
                }
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchCabinetData();
        } else {
            setError('Authorization token is missing');
            setLoading(false);
        }
    }, [token]);

    // useEffect(() => {
    //     const fetchCabinetBal = async () => {
    //         try {
    //             const response = await axios.get(`${mainUrl}/api/v1/user/available-for-withdrawal`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //             setBalance(response.data.data);
    //         } catch (err) {
    //             if (err.response) {
    //                 setError(`Error ${err.response.status}: ${err.response.data.message || 'Something went wrong'}`);
    //             } else {
    //                 setError('Network error');
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     if (token) {
    //         fetchCabinetBal();
    //     } else {
    //         setError('Authorization token is missing');
    //         setLoading(false);
    //     }
    // }, [token]);



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
            <div style={{...boxStyle, width: '40%',   borderWidth: 2,
                borderColor: '#000',
                marginTop: -40,
                borderStyle: 'solid' }}>
                <h3 style={titleStyle}>Ваши балансы</h3>
                <p>Общий баланс: <strong>{balance} $</strong></p>
                <div style={{display: "flex", gap: 16, marginTop: 12,  marginBottom: "12px",}}>
                    {["BTC", "ETH", "LTC", "TRX", "USDT"].map(coin => {
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
                            case "TRX":
                                iconSrc = TRX;
                                break;
                            case "USDT":
                                iconSrc = USDT;
                                break;
                            default:
                                iconSrc = USDT; // запасной вариант
                                break;
                        }

                        return (
                            <div key={coin} style={{ textAlign: "center" }}>
                                <img src={iconSrc} alt={coin} width="40" />
                                <p style={{ marginTop: 4, fontSize: 10, color: 'gray' }}>{coin}</p>
                            </div>
                        );
                    })}

                </div>
                <a href='/balance' style={buttonStyle}>Пополнить / Вывести →</a>
            </div>

            <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                <div style={{...boxStyle, flex: "1 1 300px", position: "relative"}}>
                    <h3 style={valueStyle}>{cabinetData.invested}</h3>
                    <p style={labelStyle}>Всего инвестировано, {cabinetData.invested} $</p>
                    <img src={f} style={{width: '7%', position: 'absolute', right: 22, bottom: '30%'}}/>
                </div>
                <div style={{...boxStyle, flex: "1 1 300px", position: "relative"}}>
                    <h3 style={valueStyle}>{cabinetData.totalEarned}</h3>
                    <p style={labelStyle}>Всего заработано, {cabinetData.totalEarned} $</p>
                    <img src={f2} style={{width: '7%', position: 'absolute', right: 22, bottom: '30%'}}/>
                </div>
            </div>


            <div style={boxStyle}>
                <h3 style={titleStyle}>Последние 5 событий</h3>
                <div style={{backgroundColor: "#fef2f2", color: "#b91c1c", padding: "10px", borderRadius: "6px"}}>
                    У вас ещё нет активных событий. Откройте новый депозит на вкладке <a href="/opendep"
                                                                                         style={{color: "#2563eb"}}>Открыть
                    депозит</a>
                </div>
            </div>

            <div style={boxStyle}>
                <h3 style={titleStyle}>Вы не получаете доход!</h3>
                <p>На данный момент у вас <strong>нет</strong> активных депозитов</p>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "16px"}}>
                    <div>
                        <p style={labelStyle}>Активных депозитов</p>
                        <p style={valueStyle}>0</p>
                    </div>
                    <div>
                        <p style={labelStyle}>Ваш доход по бизнес дням</p>
                        <p style={valueStyle}>0.00 $</p>
                    </div>
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
