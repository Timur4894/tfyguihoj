import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import QRCode from "react-qr-code";
import mainUrl from "../constants";
import axios from "axios";

// const ConfirmPay = () => {
//     const { t } = useTranslation();
//     const location = useLocation();
//     const emailUser = localStorage.getItem("emailUser");
//     const nicknameUser = localStorage.getItem("nicknameUser");
//     // Получаем данные из state
//     const { system, price, packageName } = location.state || {};
//     // Mobile detection logic
//     const [isMobile, setIsMobile] = useState(false);
//
//     useEffect(() => {
//         const mediaQuery = window.matchMedia("(max-width: 768px)");
//         setIsMobile(mediaQuery.matches);
//
//         const handleResize = () => {
//             setIsMobile(mediaQuery.matches);
//         };
//
//         mediaQuery.addEventListener("change", handleResize);
//         return () => {
//             mediaQuery.removeEventListener("change", handleResize);
//         };
//     }, []);
//
//     return (
//         <div style={styles.container(isMobile)}>
//             <h2 style={styles.invoiceTitle}>{t("Invoice ID")}: #36482351 <span
//                 style={styles.status}>{t("Waiting")}</span></h2>
//             <h3 style={styles.paymentMethod}>{system}</h3>
//             <h3 style={styles.paymentMethod}>{packageName}</h3>
//
//             <div style={styles.paymentDetails}>
//                 <div style={styles.detailItem}>
//                     <label>{t("Amount (approx)")}: (${price})</label>
//                     <input type="text" value={price} readOnly style={styles.input(isMobile)}/>
//                 </div>
//                 <div style={styles.detailItem}>
//                     <label>Wallet address {system}: </label>
//                     <div style={styles.walletContainer}>
//                         <input
//                             type="text"
//                             value="TACmtvsyfLXSEVHpBsZNSCPpNLd1s8GmL7"
//                             readOnly
//                             style={styles.input(isMobile)}
//                         />
//                         <button
//                             onClick={() => navigator.clipboard.writeText("TACmtvsyfLXSEVHpBsZNSCPpNLd1s8GmL7")}
//                             style={styles.copyButton}
//                         >
//                             {t("Copy")}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//
//             <div style={styles.qrContainer}>
//                 <QRCode
//                     size={isMobile ? 150 : 256}  // Dynamically change QR size for mobile
//                     style={styles.qrCode}
//                     value="TACmtvsyfLXSEVHpBsZNSCPpNLd1s8GmL7"
//                     viewBox={`0 0 256 256`}
//                 />
//                 <p>{t("Scan QR code for payment")}</p>
//             </div>
//
//             {/*<div style={styles.emailContainer}>*/}
//             {/*    <label>{t("Please leave your e-mail")}</label>*/}
//             {/*    <input type="email" placeholder="Email" style={styles.input(isMobile)}/>*/}
//             {/*</div>*/}
//             <Link to="/cabinetscreen" style={styles.seeMoreButton(isMobile)}>{t("ConfirmPayment")}</Link>
//         </div>
//     );
// };

const ConfirmPay = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const emailUser = localStorage.getItem("emailUser");
    const nicknameUser = localStorage.getItem("nicknameUser");
    const { price, packageName } = location.state || {};
    const token = localStorage.getItem('authToken');
    const [wallet, setWallet] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const res = await axios.get(`${mainUrl}/api/v1/user/wallet-to-pay`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });
                setWallet(res.data.data?.trc20 || '');
            } catch (err) {
                setError(err.response?.data?.message || 'Ошибка загрузки кошелька');
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchWallet();
        } else {
            setError('Токен отсутствует');
            setLoading(false);
        }
    }, [token]);

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

    const handleConfirmPayment = async () => {
        const botToken = "7655654388:AAHLayDxJNQoiD9DCiBKDXvZLGKMt6PSZjA"; // Замените на токен вашего бота
        const chatId = "-4719639762"; // ID чата администратора (можно получить через Bot API)
        const message = `
📋 **🟡💰Нужно подтвердить оплату💰🟡**
- Email: ${emailUser}
- Nickname: ${nicknameUser}
- Цена: ${price}
- Пакет: ${packageName}
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

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div style={styles.container(isMobile)}>
            <h2 style={styles.invoiceTitle}>{t("Invoice ID")}: #7865727 <span
                style={styles.status}>{t("Waiting")}</span></h2>
            <h3 style={styles.paymentMethod}>{packageName}</h3>

            <div style={styles.paymentDetails}>
                <div style={styles.detailItem}>
                    <label>{t("Amount (approx)")}: (${price})</label>
                    <input type="text" value={price} readOnly style={styles.input(isMobile)}/>
                </div>
                <div style={styles.detailItem}>
                    <label>Wallet address USDT TRC 20: </label>
                    <div style={styles.walletContainer}>
                        <input
                            type="text"
                            value={wallet}
                            readOnly
                            style={styles.input(isMobile)}
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText({wallet})}
                            style={styles.copyButton}
                        >
                            {t("Copy")}
                        </button>
                    </div>
                </div>
            </div>

            <div style={styles.qrContainer}>
                <QRCode
                    size={isMobile ? 150 : 256}
                    style={styles.qrCode}
                    value={wallet}
                    viewBox={`0 0 256 256`}
                />
                <p>{t("Scan QR code for payment")}</p>
            </div>

            <button onClick={handleConfirmPayment} style={styles.seeMoreButton(isMobile)}>
                {t("ConfirmPayment")}
            </button>
        </div>
    );
};


const styles = {
    container: (isMobile) => ({
        maxWidth: isMobile ? "70%" : "500px",  // Full width on mobile
        // marginTop: '5%',
        marginTop: isMobile ? "5%" : "5%",  // Full width on mobile
        marginBottom: '5%',
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
    }),
    seeMoreButton: (isMobile) => ({
        background: "transparent",
        border: "2px solid #00d474",
        color: "#00d474",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        padding: isMobile ? "8px 16px" : "10px 20px",  // Adjust padding for mobile
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: isMobile ? "1rem" : "1.5rem",  // Smaller font size on mobile
    }),
    invoiceTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    status: {
        color: "orange",
        fontSize: "14px",
    },
    paymentMethod: {
        fontSize: "16px",
        margin: "10px 0",
        fontWeight: "600",
    },
    paymentDetails: {
        margin: "20px 0",
    },
    detailItem: {
        marginBottom: "15px",
    },
    input: (isMobile) => ({
        width: "90%",
        padding: "10px",
        fontSize: isMobile ? "12px" : "14px",  // Smaller font size on mobile
        border: "1px solid #ccc",
        borderRadius: "5px",
    }),
    walletContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    copyButton: {
        padding: "10px 15px",
        fontSize: "14px",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    qrContainer: {
        textAlign: "center",
        marginTop: "20px",
    },
    qrCode: {
        margin: "10px 0",
    },
    emailContainer: {
        marginTop: "20px",
        marginBottom: "50px",
    },
};

export default ConfirmPay;
