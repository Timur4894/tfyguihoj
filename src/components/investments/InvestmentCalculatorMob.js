import React, {useEffect, useRef, useState} from "react";

const packages = {
    Standard: 0.013,
    Growth: 0.017,
    Compound: 0.023,
    Accumulation: 0.029,
};

const CustomSelect = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    // Закрытие при клике вне компонента
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
                }}
            >
                {selected}
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
                            key={option}
                            onClick={() => handleSelect(option)}
                            style={{
                                padding: "1rem",
                                cursor: "pointer",
                                fontWeight: option === selected ? "bold" : "normal",
                                fontFamily: "Ubuntu",
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default function InvestmentCalculatorMob() {
    const [selectedPackage, setSelectedPackage] = useState("Standard");
    const [deposit, setDeposit] = useState(0);
    const [dailyProfit, setDailyProfit] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);

    const calculateProfit = () => {
        const rate = packages[selectedPackage];
        const days = 30; // assuming 30 business days
        const daily = deposit * rate;
        const total = daily * days + Number(deposit);
        setDailyProfit(daily.toFixed(2));
        setTotalProfit(total.toFixed(2));
    };

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
        <div style={{ display: "flex",paddingTop: '10rem', justifyContent: 'space-around', gap: "2rem", padding: "2rem", paddingLeft: "20rem", paddingRight: "20rem", ...(isMobile && {flexDirection: "column", paddingLeft: "2rem", paddingRight: "0rem",}) }}>
            <div>
                <h2 style={{ color: "#6b7280", marginBottom: "20px", fontFamily: "Ubuntu",fontSize: 16, fontWeight: '500' }}>Рассчитайте ваши доходы</h2>
                <h1 style={{ fontSize: "2.4rem", fontWeight: "500", fontFamily: "Ubuntu"}}>Калькулятор</h1>
            </div>

            <div style={{borderRadius: "1rem", paddingRight: "20px"}}>
                <CustomSelect
                    options={Object.keys(packages)}
                    selected={selectedPackage}
                    onSelect={setSelectedPackage}
                />

                <div style={{marginBottom: "1rem"}}>
                    <label style={{display: "block", marginBottom: "0.5rem"}}>Сумма депозита</label>
                    <input
                        type="number"
                        placeholder="Введите сумму"
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        style={{ width: "90%",
                            padding: "1rem",
                            border: "1px solid #C1C1C1FF",
                            borderRadius: "6px",
                            cursor: "pointer",
                            position: "relative",
                            backgroundColor: "#fff",}}
                    />
                </div>

                <button
                    onClick={calculateProfit}
                    style={{
                        padding: "1rem 2rem",
                        fontFamily: "Ubuntu",
                        backgroundColor: "#111827",
                        color: "white",
                        // borderRadius: "0.5rem",
                        fontWeight: "bold",
                        border: "none"
                    }}
                >
                    Рассчитать
                </button>

                <div style={{marginTop: "1rem"}}>
                    <p>
                        <strong>Доход по бизнес дням:</strong> {dailyProfit}
                    </p>
                    <p>
                        <strong>Общий доход по завершению:</strong> {totalProfit}
                    </p>
                </div>
            </div>
        </div>
    );
}
