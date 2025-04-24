import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logoopy.png";

const sidebarStyle = {
    width: "20%",
    backgroundColor: "#fff",
    borderRight: "1px solid #e5e7eb",
    padding: "24px 0",
};

const navItem = {
    padding: "12px 24px",
    display: "flex",
    color: "#111827",
    fontFamily: "Ubuntu",
    gap: 4,
    alignItems: "center",
    textDecoration: "none",
    fontWeight: 500,
};

const activeStyle = {
    backgroundColor: "#f3f4f6",
    borderLeft: "4px solid #f59e0b",
};

export default function Sidebar() {
    const location = useLocation();

    return (
        <div style={sidebarStyle}>
            <img src={logo} style={{width: '45%', marginLeft: 20, marginBottom: 40}} />
            <Link to="/cabinetscreen" style={{ ...navItem, ...(location.pathname === "/cabinetscreen" ? activeStyle : {}) }}><ion-icon name="home-outline"></ion-icon>
                Панель управления</Link>
            <Link to="/balance" style={{ ...navItem, ...(location.pathname === "/balance" ? activeStyle : {}) }}><ion-icon name="wallet-outline"></ion-icon>
                Баланс</Link>
            <Link to="/opendep" style={{ ...navItem, ...(location.pathname === "/opendep" ? activeStyle : {}) }}><ion-icon name="add-outline"></ion-icon>
                Открыть депозит</Link>
            <Link to="/mydeps" style={{ ...navItem, ...(location.pathname === "/mydeps" ? activeStyle : {}) }}><ion-icon name="analytics-outline"></ion-icon>
                Мои депозиты</Link>
            <Link to="/refprogram" style={{ ...navItem, ...(location.pathname === "/refprogram" ? activeStyle : {}) }}><ion-icon name="accessibility-outline"></ion-icon>
                Моя команда</Link>
            <Link to="/support" style={{ ...navItem, ...(location.pathname === "/support" ? activeStyle : {}) }}><ion-icon name="help-outline"></ion-icon>
                Поддержка</Link>
            <Link to="/wallets" style={{ ...navItem, ...(location.pathname === "/wallets" ? activeStyle : {}) }}><ion-icon name="settings-outline"></ion-icon>
                Моя кошельки</Link>
        </div>
    );
}
