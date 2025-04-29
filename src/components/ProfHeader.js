import React, {useContext, useState} from "react";
import ava from "../assets/img/avatar.jpg";
import {AuthContext} from "../context/AuthContext";

export default function ProfHeader() {
    const [open, setOpen] = useState(false);
    const { logout } = useContext(AuthContext);
    const name = localStorage.getItem('nicknameUser');
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 20px",
            // backgroundColor: "#000",
            color: "white",
            position: "relative",
            width: "100%",
            marginLeft: -24,
            marginBottom: 40
        }}>
            <div style={{ fontSize: "18px", fontWeight: "bold", color: '#000' }}></div>

            <div style={{ position: "relative" }}>
                <button
                    onClick={() => setOpen(!open)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        gap: "8px"
                    }}
                >
                    <div style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000"
                    }}>
                        <img src={ava} style={{width: '100%'}}/>
                    </div>
                    <span style={{fontSize: "14px", color: "#000"}}>{name}</span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </button>

                {open && (
                    <div style={{
                        position: "absolute",
                        right: 0,
                        top: "45px",
                        width: "220px",
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
                        zIndex: 1000,
                        overflow: "hidden",
                        color: "#000"
                    }}>
                        <div style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                            <p style={{ fontSize: "12px", color: "#666" }}>Общий баланс:</p>
                            <p style={{ fontWeight: "bold", fontSize: "16px" }}>0.00 $</p>
                            <a
                                href='/balance' style={{
                                marginTop: "10px",
                                width: "100%",
                                backgroundColor: "#f9b233",
                                border: "none",
                                padding: "6px",
                                borderRadius: "4px",
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "14px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}>
                                Пополнить/Вывести →
                            </a>
                        </div>
                        <div>
                            <a href='/wallets' style={menuItemStyle}>
                                <ion-icon name="settings-outline"></ion-icon>
                                Настройки
                            </a>
                            <a href='/support' style={menuItemStyle}>
                                <ion-icon name="help-outline"></ion-icon>
                                Поддержка
                            </a>
                            <div style={{...menuItemStyle, color: "red"}} onClick={logout}>
                                <ion-icon name="log-out-outline"></ion-icon>
                                Выйти
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const menuItemStyle = {
    padding: "10px 12px",
    display: "flex",
    gap: 2,
    textDecoration: "none",
    color: "#000",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "14px",
    borderBottom: "1px solid #f0f0f0",
    transition: "background 0.2s",
    backgroundColor: "white"
};
