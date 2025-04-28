import React from "react";
import usd from '../../assets/img/usd.png'

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
    return (
        <div style={{marginTop: -40}}>
            <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Мои балансы</h2>

            <div style={boxStyle}>
                <div style={{ textAlign: "center" }}>
                    <span style={balanceValueStyle}>0.00 $</span>
                    <p style={labelStyle}>
                        Отображение общего баланса всех криптовалют в долларовом эквиваленте
                    </p>
                    <p style={warningTextStyle}>
                        Перед заказом выплаты средств обязательно укажите ваши реквизиты в разделе <strong>Мои кошельки</strong>.
                    </p>
                </div>
            </div>

            <div style={{...cardStyle, border: "0px solid #000",}}>
                <img
                    src={usd}
                    alt="USD"
                    width="50"
                    height="50"
                    style={{ marginBottom: "12px" }}
                />
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>0.00$</div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>USD $</div>

                <div style={buttonRowStyle}>
                    <div style={actionButtonStyle}>
                        <i className="fas fa-wallet"></i> Пополнить
                    </div>
                    <div style={actionButtonStyle}>
                        <i className="fas fa-credit-card"></i> Вывести
                    </div>
                    <div style={{ ...actionButtonStyle, borderRight: "none" }}>
                        <i className="fas fa-sync-alt"></i> Реинвест
                    </div>
                </div>
            </div>
        </div>
    );
}
