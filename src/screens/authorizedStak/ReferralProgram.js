import React from "react";
import f from "../../assets/img/rtyui.png";
import f2 from "../../assets/img/fqwf.png";

const ReferralProgram = () => {
    const referralLink = "https://prudential-invest.com/?ref=fqwgyiuho";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        alert("Ссылка скопирована!");
    };

    return (
        <div style={{ padding: "24px", fontFamily: "Arial, sans-serif", color: "#111" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Моя команда</h2>

            <div
                style={{
                    backgroundColor: "#777",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "24px",
                    marginBottom: "24px",
                }}
            >
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
                    Классическая программа
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Присоединяйтесь к партнёрской программе, приглашайте новых участников и получайте стабильный доход с их депозитов.
                    Программа охватывает три уровня структуры, так что каждый новый партнёр приносит вам прибыль.
                    Создайте свою команду и наблюдайте, как ваш доход растёт с каждым новым шагом!
                </p>
                <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "12px" }}>5% - 3% - 2%</div>
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
                <div
                    style={{
                        flex: 1,
                        minWidth: "300px",
                        border: "2px solid #000",
                        // borderRadius: "8px",
                        padding: "16px",
                        backgroundColor: "#fff",
                    }}
                >
                    <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>Ваша уникальная партнёрская ссылка</h4>
                    <p style={{ fontSize: "14px", marginBottom: "12px" }}>
                        Делитесь своей персональной ссылкой для приглашения новых партнёров! Когда пользователь заходит на сайт по вашей ссылке,
                        система фиксирует это, и при любой последующей регистрации он становится вашим рефералом.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            padding: "6px 10px",
                        }}
                    >
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
                        Начните строить свою команду уже сейчас! Ваш доход не ограничен, и с каждым новым партнёром он растёт.
                        Нажмите на иконку справа, чтобы скопировать ссылку и начать прямо сейчас!
                    </p>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "200px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        display: "flex",
                        padding: "16px",
                        backgroundColor: "#fff",
                        textAlign: "center",
                        position: 'relative',
                        height: '100%',
                        alignItems: "flex-start",
                        flexDirection: "column",
                    }}
                >
                    <div style={{fontSize: "28px", fontWeight: "bold"}}>0</div>
                    <p style={{fontSize: "14px", marginTop: "4px"}}>Зарегистрировано партнёров</p>
                    <img src={f} style={{width: '7%', position: 'absolute', right: 22, bottom: '30%'}}/>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "200px",
                        display: "flex",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        flexDirection: "column",
                        backgroundColor: "#fff",
                        textAlign: "center",
                        alignItems: "flex-start",
                        position: 'relative',
                        height: '100%'
                    }}
                >
                    <div style={{fontSize: "28px", fontWeight: "bold"}}>0</div>
                    <p style={{fontSize: "14px", marginTop: "4px"}}>Общий доход от программ, $</p>
                    <img src={f2} style={{width: '7%', position: 'absolute', right: 22, bottom: '30%'}}/>
                </div>
            </div>

            <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    backgroundColor: "#fff",
                }}
            >
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
