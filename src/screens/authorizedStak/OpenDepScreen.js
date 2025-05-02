import React, {useEffect, useRef, useState} from "react";
import Cards from "../../components/Cards";
import {Link} from "react-router-dom";

const CustomSelect = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div style={{ marginBottom: "1rem", position: 'relative' }} ref={ref}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "400", fontFamily: "Ubuntu" }}>
                Выберите инвестиционный пакет
            </label>
            <div
                onClick={toggleDropdown}
                style={{
                    width: "90%",
                    padding: "1rem",
                    border: "1px solid #C1C1C1FF",
                    borderRadius: "6px",
                    cursor: "pointer",
                    position: "relative",
                    backgroundColor: "#fff",
                    fontFamily: "Ubuntu",
                }}
            >
                {options.find((o) => o.value === selected)?.label || "Выберите..."}
                <span style={{ position: "absolute", right: "1rem", top: "1.2rem" }}>▾</span>
            </div>
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        border: "1px solid #C1C1C1FF",
                        borderRadius: "6px",
                        backgroundColor: "#fff",
                        zIndex: 10,
                        marginTop: "0.2rem",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }}
                >
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            style={{
                                padding: "1rem",
                                cursor: "pointer",
                                fontWeight: option.value === selected ? "bold" : "normal",
                                fontFamily: "Ubuntu"
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const OpenDepScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState("standard");
    const [balanceType, setBalanceType] = useState("main");
    const [amount, setAmount] = useState("");

    const investmentOptions = [
        { value: "standard", label: "Стандарт (+1.3% / рабочий день)" },
        { value: "growth", label: "Рост (+1.7% / рабочий день)" },
        { value: "compound", label: "Композит (+2.3% / рабочий день)" },
        { value: "accumulation", label: "Накопление (+2.9% / рабочий день)" },
    ];


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

    return (
        <div style={{ marginTop: -40 }}>
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
                    Ознакомьтесь с нашими инвестиционными предложениями, выберите подходящее и активируйте его. Перед активацией, пожалуйста, пополните необходимый баланс в разделе Балансы . После подтверждения активации с баланса будет списана сумма, равная сумме депозита. Инвестиционные пакеты Standard и Growth обеспечивают ежедневные начисления на баланс, с которого средства доступны к выводу. Пакеты Compound и Accumulation предлагают накопительный эффект: начисления также происходят каждый бизнес-день, но автоматически добавляются к телу депозита, работая по принципу сложного процента.                </p>
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
                        ...(isMobile && { width: '80%',})
                    }}>
                        <h3 style={{ fontSize: 18, marginBottom: 20, fontFamily: 'Ubuntu', fontWeight: '400', color: '#3a3a3a'}}>Открыть новый депозит</h3>

                        <p style={{fontSize: 14, marginBottom: 20, fontFamily: 'Ubuntu', fontWeight: '400', color: '#3a3a3a'}}>
                            Вы собираетесь передать средства в управление. Пожалуйста, выберите криптовалюту и укажите сумму для открытия депозита.
                        </p>

                        <CustomSelect
                            options={investmentOptions}
                            selected={selectedPackage}
                            onSelect={setSelectedPackage}
                        />
                    {/*    style={{*/}
                    {/*    width: "90%",*/}
                    {/*    padding: 16,*/}
                    {/*    border: "1px solid #CACACAFF", // толщина и цвет бордера*/}
                    {/*    borderRadius: "6px",         // по желанию — скругление*/}
                    {/*    outline: "none"              // убирает синий контур при фокусе*/}
                    {/*}}*/}

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
                                style={{
                                    width: "90%",
                                    padding: 16,
                                    border: "1px solid #CACACAFF", // толщина и цвет бордера
                                    borderRadius: "6px",         // по желанию — скругление
                                    outline: "none"              // убирает синий контур при фокусе
                                }}
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, gap: 20, fontFamily: 'Ubuntu', fontSize: 14, fontWeight: '500', }}>
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
                                Открыть депозит
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OpenDepScreen;
