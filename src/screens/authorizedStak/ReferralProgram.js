import React, { useEffect, useState } from "react";
import f from "../../assets/img/rtyui.png";
import f2 from "../../assets/img/fqwf.png";
import mainUrl from "../../constants";

const ReferralProgram = () => {
    const name = localStorage.getItem('nicknameUser');
    const referralLink = `https://prudential-invest.com/?ref=${name}`;
    const [affiliateData, setAffiliateData] = useState({
        partnersInvited: 0,
        activePartners: 0,
        earningsFromPartners: 0,
    });

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        alert("Ссылка скопирована!");
    };

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token) return;

        fetch(`${mainUrl}/api/v1/user/affiliateProgram`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Ошибка при получении данных партнёрской программы");
                return res.json();
            })
            .then((data) => {
                setAffiliateData(data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    console.log('referralLink: ', affiliateData);

    return (
        <div style={{ padding: "24px", fontFamily: "Arial, sans-serif", color: "#111", marginTop: -40 }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Моя команда</h2>

            <div style={{
                backgroundColor: "#777",
                color: "#fff",
                padding: "24px",
                marginBottom: "24px",
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center'
            }}>
                <h3 style={{ fontSize: '2rem', fontWeight: "bold", marginBottom: "8px" }}>
                    Классическая программа
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: "1.6", textAlign: "center", fontWeight: '800' }}>
                    Присоединяйтесь к партнёрской программе, приглашайте новых участников и получайте стабильный доход с их депозитов.
                    Программа охватывает три уровня структуры, так что каждый новый партнёр приносит вам прибыль.
                    Создайте свою команду и наблюдайте, как ваш доход растёт с каждым новым шагом!
                </p>
                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: "bold",
                    marginTop: "12px",
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(255, 255, 255)',
                }}>5% - 3% - 2%</div>
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
                <div style={{
                    flex: 1,
                    minWidth: "300px",
                    border: "2px solid #000",
                    padding: "16px",
                    backgroundColor: "#fff",
                }}>
                    <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>Ваша уникальная партнёрская ссылка</h4>
                    <p style={{ fontSize: "14px", marginBottom: "12px" }}>
                        Делитесь своей персональной ссылкой для приглашения новых партнёров! ...
                    </p>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #ccc",
                        padding: "6px 10px",
                    }}>
                        <input
                            type="text"
                            value={referralLink}
                            readOnly
                            style={{
                                flex: 1,
                                border: "none",
                                outline: "none",
                                fontSize: "14px",
                            }}
                        />
                        <button
                            onClick={copyToClipboard}
                            style={{
                                marginLeft: "8px",
                                fontSize: "16px",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            📋
                        </button>
                    </div>
                    <p style={{ fontSize: "13px", color: "#555", marginTop: "10px" }}>
                        Начните строить свою команду уже сейчас! ...
                    </p>
                </div>

                <div style={{
                    flex: 1,
                    minWidth: "200px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    padding: "16px",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    position: 'relative',
                    height: '100%',
                    alignItems: "flex-start",
                    flexDirection: "column",
                }}>
                    <div style={{ fontSize: "28px", fontWeight: "bold" }}>
                        {affiliateData.activePartners}
                    </div>
                    <p style={{ fontSize: "14px", marginTop: "4px" }}>Зарегистрировано партнёров</p>
                    <img src={f} style={{ width: '7%', position: 'absolute', right: 22, bottom: '30%' }} />
                </div>

                <div style={{
                    flex: 1,
                    minWidth: "200px",
                    display: "flex",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    padding: "16px",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    alignItems: "flex-start",
                    position: 'relative',
                    height: '100%'
                }}>
                    <div style={{ fontSize: "28px", fontWeight: "bold" }}>
                        ${affiliateData.earningsFromPartners.toFixed(2)}
                    </div>
                    <p style={{ fontSize: "14px", marginTop: "4px" }}>Общий доход от программ, $</p>
                    <img src={f2} style={{ width: '7%', position: 'absolute', right: 22, bottom: '30%' }} />
                </div>
            </div>

            <div style={{
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                padding: "16px",
                backgroundColor: "#fff",
            }}>
                <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}>Таблица партнёров</h4>
                <table style={{ width: "100%", fontSize: "14px", borderCollapse: "collapse" }}>
                    <thead>
                    <tr style={{ backgroundColor: "#f0f0f0" }}>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ccc", textAlign: "left" }}>Регистрация</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ccc", textAlign: "left" }}>Логин</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ccc", textAlign: "left" }}>Доход</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="3" style={{ textAlign: "center", padding: "16px", color: "#999" }}>
                            Нет данных
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReferralProgram;
