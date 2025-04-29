import React, { useState } from "react";
import Cards from "../../components/Cards";
import {Link} from "react-router-dom";

const OpenDepScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState("growth");
    const [balanceType, setBalanceType] = useState("main");
    const [amount, setAmount] = useState("");


    return (
        <div style={{ width: "140vh", marginTop: -40 }}>
            <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>
                Открыть новый депозит
            </h2>

            <div style={{
                borderRadius: "0px",
                padding: "16px",
                backgroundColor: "#fff",
                marginBottom: "24px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                border: "1px solid #000",
            }}>
                <p style={{ fontSize: "14px", color: "#000", textAlign: "center" }}>
                    Вы собираетесь передать средства в управление. Пожалуйста, выберите криптовалюту и укажите сумму для открытия депозита.
                </p>
            </div>

            <Cards authTrue={true} onActivate={() => setShowModal(true)} />

            {showModal && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
                }}>
                    <div style={{
                        background: "#fff",
                        padding: 30,
                        borderRadius: 10,
                        width: 400,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        fontFamily: "sans-serif"
                    }}>
                        <h3 style={{ fontSize: 18, marginBottom: 20 }}>Открыть новый депозит</h3>

                        <div style={{ marginBottom: 15 }}>
                            <label style={{ display: "block", marginBottom: 6 }}>Инвестиционный пакет</label>
                            <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} style={{ width: "100%", padding: 8 }}>
                                <option value="growth">Стандарт (+1.3% / рабочий день)</option>
                                <option value="standard">Рост (+1.7% / рабочий день)</option>
                                <option value="compound">Композит (+2.3% / рабочий день)</option>
                                <option value="accumulation">Накопление (+2.9% / рабочий день)</option>
                            </select>
                        </div>

                        {/*<div style={{ marginBottom: 15 }}>*/}
                        {/*    <label style={{ display: "block", marginBottom: 6 }}>Баланс для списания</label>*/}
                        {/*    <select value={balanceType} onChange={(e) => setBalanceType(e.target.value)} style={{ width: "100%", padding: 8 }}>*/}
                        {/*        <option value="main">Общий баланс (0.00 $)</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <div style={{ marginBottom: 15 }}>
                            <label style={{ display: "block", marginBottom: 6 }}>Сумма в USD</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="00.00"
                                style={{ width: "95%", padding: 8 }}
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                            <button onClick={() => setShowModal(false)} style={{ padding: "8px 16px", background: "#f2f2f2", border: "none", borderRadius: 4 }}>Отменить</button>
                            <Link
                                to="/confirmPay"
                                state={{ price: amount, packageName: selectedPackage }}
                                style={{
                                    padding: "8px 16px",
                                    textDecoration: 'none',
                                    background: "#333",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 4
                                }}
                            >
                                Перейти к оплате
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OpenDepScreen;
