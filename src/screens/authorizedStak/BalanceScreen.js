import React, {useEffect, useState} from "react";
import usd from '../../assets/img/usd.png'
import {Link} from "react-router-dom";
import {Button} from "@react-pdf-viewer/core";
import axios from "axios";
import mainUrl from "../../constants";

const boxStyle = {
    backgroundColor: "#fff",
    borderRadius: "0px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    marginBottom: "20px",
    border: "1px solid #000",
};

const balanceValueStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#f59e0b",
    display: "inline-block",
    padding: "4px 16px",
    borderRadius: "6px",
};

const labelStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "8px",
};

const warningTextStyle = {
    fontSize: "14px",
    color: "#4b5563",
    marginTop: "16px",
};

const cardStyle = {
    ...boxStyle,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
};

const buttonRowStyle = {
    display: "flex",
    borderTop: "1px solid #e5e7eb",
    marginTop: "16px",
    width: "100%",
};

const actionButtonStyle = {
    flex: 1,
    padding: "12px 0",
    backgroundColor: "#fff",
    border: "1px solid #d8d8d8",
    textDecoration: 'none',
    color: "#000",
    borderRight: "1px solid #e5e7eb",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
};

export default function BalanceScreen() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [amount, setAmount] = useState("");
    const [amountError, setAmountError] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState("");
    const [wallets, setWallets] = useState({
        BTC: '',
        ETH: '',
        LTC: '',
        TRX: '',
        USDT: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [balance, setBalance] = useState(0);
    const [deposits, setDeposits] = useState([]);

    const token = localStorage.getItem('authToken');

    const emailUser = localStorage.getItem("emailUser");
    const nicknameUser = localStorage.getItem("nicknameUser");

    useEffect(() => {
        if (!showModal2) return;
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
    }, [token, showModal2]);

    const avaldeposits = deposits?.filter((item) => {
        return item.status === true;
    })

    useEffect(() => {
        const fetchCabinetData = async () => {
            try {
                const response = await axios.get(`${mainUrl}/api/v1/user/available-for-withdrawal`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });
                setBalance(response.data.data);
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


    useEffect(() => {
        if (!showModal) return;
        const fetchWallets = async () => {
            try {
                const response = await axios.get(`${mainUrl}/api/v1/user/wallets`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });
                console.log(response);
                // Заполняем state данными с бэка
                setWallets({
                    BTC: response.data.data.btc || '',
                    ETH: response.data.data.eth || '',
                    LTC: response.data.data.ltc || '',
                    TRX: response.data.data.trx || '',
                    USDT: response.data.data.usdt || '',
                });
            } catch (err) {
                console.error('Ошибка загрузки кошельков:', err);
                if (err.response) {
                    setError(`Error ${err.response.status}: ${err.response.data.message || 'Что-то пошло не так'}`);
                } else {
                    setError('Ошибка сети');
                }
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchWallets();
        } else {
            setError('Токен авторизации отсутствует');
            setLoading(false);
        }
    }, [token, showModal]);

    const [choosenWallet, setChoosenWallet] = useState("");

    const handleWalletChange = (e) => {
        const selectedKey = e.target.value;
        setChoosenWallet(wallets[selectedKey]);
    };

    const botToken2 = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId2 = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const handleConfirmPayment = async () => {
        const botToken = botToken2; // Замените на токен вашего бота
        const chatId = chatId2; // ID чата администратора (можно получить через Bot API)
        const message = `
📋 **🟡💰 ЮЗЕР ХОЧЕТ ВЫВЕСТИ 💰🟡**
- Email: ${emailUser}
- Nickname: ${nicknameUser}
- Цена: ${amount}
- ЕГО КОШЕЛЬ ${choosenWallet}
        `;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", 'ngrok-skip-browser-warning': 'true', },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: "Markdown", // Для форматирования текста
                    }),
                }
            );

            if (response.ok) {
                alert("Payment data sent to admin!");
            } else {
                alert("Failed to send payment data. Try again.");
            }
        } catch (error) {
            console.error("Error sending payment data:", error);
            alert("Error occurred. Please try again later.");
        }
    };

    if (loading) return <div>Загрузка кошельков...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div style={{marginTop: -40}}>
            <h2 style={{fontSize: "20px", fontWeight: 600, marginBottom: "12px"}}>Мои балансы</h2>

            <div style={boxStyle}>
                <div style={{textAlign: "center"}}>
                    <span style={balanceValueStyle}>{balance.availableForWithdrawal} $</span>
                    <p style={labelStyle}>
                        Отображение общего баланса всех криптовалют в долларовом эквиваленте
                    </p>
                    <p style={warningTextStyle}>
                        Перед заказом выплаты средств обязательно укажите ваши реквизиты в разделе <strong>Мои
                        кошельки</strong>.
                    </p>
                </div>
            </div>

            <div style={{...cardStyle, border: "0px solid #000",}}>
                <img
                    src={usd}
                    alt="USD"
                    width="50"
                    height="50"
                    style={{marginBottom: "12px"}}
                />
                <div style={{fontSize: "20px", fontWeight: "bold"}}>{balance.availableForWithdrawal}$</div>
                <div style={{fontSize: "14px", color: "#6b7280"}}>USD</div>

                <div style={buttonRowStyle}>
                    <a href='/opendep' style={actionButtonStyle}>
                        <i className="fas fa-wallet"></i> Пополнить
                    </a>

                    <button onClick={()=>{setShowModal(true)}} style={actionButtonStyle}>
                        <i className="fas fa-credit-card"></i> Вывести
                    </button>

                    <div onClick={()=>{setShowModal2(true)}} style={{...actionButtonStyle, borderRight: "none", cursor: "pointer"}}>
                        <i className="fas fa-sync-alt"></i> Реинвест
                    </div>
                </div>

            </div>


            {showModal && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }}>
                    <div style={{
                        background: "#fff",
                        padding: 30,
                        borderRadius: 10,
                        width: 400,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        fontFamily: "sans-serif"
                    }}>
                        <h3 style={{fontSize: 18, marginBottom: 20}}>Вывод средств USD</h3>
                        <h4 style={{display: "block", marginBottom: 40}}>
                            Вы собираетесь отправить заявку на выплату средств с баланса USD. Пожалуйста, укажите в поле ниже желаемую сумму выплаты.
                        </h4>

                        <div style={{marginBottom: 15}}>
                            <label style={{display: "block", marginBottom: 6}}>
                                Выберите кошелек
                            </label>
                            <select onChange={handleWalletChange} style={{width: "100%", padding: 8}}>
                                <option value="">-- Выберите валюту --</option>
                                {Object.entries(wallets)
                                    .filter(([_, address]) => address.trim() !== "")
                                    .map(([key, address]) => (
                                        <option key={key} value={key}>
                                            {key} ({address})
                                        </option>
                                    ))
                                }

                            </select>

                            {choosenWallet && (
                                <p style={{marginTop: 10}}>
                                    <strong>Выбранный адрес:</strong> {choosenWallet}
                                </p>
                            )}
                        </div>

                        {/*<div style={{ marginBottom: 15 }}>*/}
                        {/*    <label style={{ display: "block", marginBottom: 6 }}>Баланс для списания</label>*/}
                        {/*    <select value={balanceType} onChange={(e) => setBalanceType(e.target.value)} style={{ width: "100%", padding: 8 }}>*/}
                        {/*        <option value="main">Общий баланс (0.00 $)</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <div style={{marginBottom: 15}}>
                            <label style={{display: "block", marginBottom: 6}}>Сумма в USD</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setAmountError(false); // сбрасываем ошибку при вводе
                                }}
                                placeholder="00.00"
                                style={{width: "95%", padding: 8, border: amountError ? "2px solid red" : "1px solid #ccc",}}
                            />
                            {amountError && (
                                <div style={{ color: "red", marginBottom: "8px" }}>
                                    Сумма превышает доступный баланс.
                                </div>
                            )}
                        </div>

                        <div style={{display: "flex", justifyContent: "space-between", marginTop: 20}}>
                            <button onClick={() => setShowModal(false)} style={{
                                padding: "8px 16px",
                                background: "#f2f2f2",
                                border: "none",
                                borderRadius: 4
                            }}>Отменить
                            </button>
                            <button
                                // onClick={() => {
                                //     setShowModal(false);
                                //     handleConfirmPayment
                                //     alert("✅ Запрос на вывод успешно отправлен!\n⏳ Пожалуйста, ожидайте обработки заявки нашей командой поддержки.");
                                // }}
                                onClick={async () => {
                                    const numericAmount = parseFloat(amount);
                                    const available = parseFloat(balance.availableForWithdrawal);
                                    if (numericAmount > available) {
                                        setAmountError(true);
                                        return;
                                    }
                                    handleConfirmPayment()
                                }}

                                style={{
                                    padding: "8px 16px",
                                    textDecoration: 'none',
                                    background: "#333",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 4
                                }}
                            >
                                Подтвердить
                            </button>

                        </div>
                    </div>
                </div>
            )}


            {showModal2 && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }}>
                    <div style={{
                        background: "#fff",
                        padding: 30,
                        borderRadius: 10,
                        width: 400,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        fontFamily: "sans-serif"
                    }}>
                        <h3 style={{fontSize: 18, marginBottom: 20}}>Реинвест с общего баланса</h3>
                        <h5 style={{fontSize: 18, marginBottom: 50}}>Вы собираетесь реинвестировать средства с баланса.
                            Укажите сумму реинвеста и выберите активный депозит, который хотите увеличить. После
                            подтверждения новое тело депозита начнёт работать.</h5>

                        <div style={{marginBottom: 15}}>
                            <label style={{display: "block", marginBottom: 6}}>Инвестиционный пакет</label>
                            <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                                {avaldeposits.map((item, index) => {
                                    let label = "";
                                    if (item.activated === "#1") label = "Стандарт (+1.3% / рабочий день)";
                                    else if (item.activated === "#2") label = "Рост (+1.7% / рабочий день)";
                                    else if (item.activated === "#3") label = "Композит (+2.3% / рабочий день)";
                                    else if (item.activated === "#4") label = "Накопление (+2.9% / рабочий день)";
                                    else return null;

                                    const value = item.activated;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedPackage(value)}
                                            style={{
                                                padding: "10px",
                                                backgroundColor: selectedPackage === value ? "#1E90FF" : "#f0f0f0",
                                                color: selectedPackage === value ? "#fff" : "#000",
                                                border: "1px solid #ccc",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                textAlign: "left"
                                            }}
                                        >
                                            {label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>


                        {/*<div style={{ marginBottom: 15 }}>*/}
                        {/*    <label style={{ display: "block", marginBottom: 6 }}>Баланс для списания</label>*/}
                        {/*    <select value={balanceType} onChange={(e) => setBalanceType(e.target.value)} style={{ width: "100%", padding: 8 }}>*/}
                        {/*        <option value="main">Общий баланс (0.00 $)</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <div style={{marginBottom: 15}}>
                            <label style={{display: "block", marginBottom: 6}}>Сумма в USD</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setAmountError(false); // сбрасываем ошибку при вводе
                                }}
                                placeholder="00.00"
                                style={{
                                    width: "95%",
                                    padding: 8,
                                    border: amountError ? "2px solid red" : "1px solid #ccc",
                                }}
                            />
                            {amountError && (
                                <div style={{color: "red", marginBottom: "8px"}}>
                                    Сумма превышает доступный баланс.
                                </div>
                            )}
                        </div>

                        <div style={{display: "flex", justifyContent: "space-between", marginTop: 20}}>
                            <button onClick={() => setShowModal2(false)} style={{
                                padding: "8px 16px",
                                background: "#f2f2f2",
                                border: "none",
                                borderRadius: 4
                            }}>Отменить
                            </button>
                            <button
                                onClick={async () => {
                                    const numericAmount = parseFloat(amount);
                                    const available = parseFloat(balance.availableForWithdrawal);
                                    const cleanPackage = selectedPackage.replace(/^#/, '');
                                    if (numericAmount > available) {
                                        setAmountError(true);
                                        return;
                                    }

                                    try {
                                        const token = localStorage.getItem("authToken");

                                        const response = await fetch(`${mainUrl}/api/v1/user/reinvest`, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${token}`,
                                                'ngrok-skip-browser-warning': 'true',
                                            },
                                            body: JSON.stringify({
                                                packageName: cleanPackage,
                                                amount: numericAmount,
                                            }),
                                        });

                                        if (!response.ok) {
                                            throw new Error("Ошибка при отправке запроса на реинвест.");
                                        }

                                        setShowModal2(false);
                                        alert("✅ Запрос на вывод успешно отправлен!\n⏳ Пожалуйста, ожидайте обработки заявки нашей командой поддержки.");
                                    } catch (error) {
                                        console.error("Reinvest error:", error);
                                        alert("❌ Произошла ошибка при отправке запроса. Попробуйте позже.");
                                    }
                                }}

                                style={{
                                    padding: "8px 16px",
                                    textDecoration: 'none',
                                    background: "#333",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 4
                                }}
                            >
                                Подтвердить
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
