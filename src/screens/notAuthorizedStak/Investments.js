import React, {useEffect, useState} from "react";
import InvestmentCalculator from "../../components/investments/InvestmentCalculator";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import Cards from "../../components/Cards";
import CryptoScroll from "../../components/investments/CryptoScroll";
import AboutCompHedMob from "../../components/AboutCompHedMob";


const styles = {
    section: {
        padding: "100px 40px",
        backgroundColor: "#F3F6FA",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        flexWrap: "wrap",
    },
    image: {
        maxWidth: "450px",
        width: "90%",
        height: "auto",
    },
    content: {
        textAlign: "left",
        marginBottom: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    subtitle: {
        fontSize: "16px",
        color: "#6B7280",
        marginBottom: "8px",
        fontFamily: "Ubuntu",
    },
    title: {
        fontSize: "56px",
        // fontWeight: "700",
        color: "#111827",
        fontFamily: "Ubuntu",
        marginBottom: "24px",
        lineHeight: "1.2",
    },
    paragraph: {
        fontSize: "16px",
        color: "#4B5563",
        width: '30%',
        fontFamily: "Ubuntu",
        lineHeight: "1.9",
        zIndex: 1,
        marginBottom: "32px",
    },
    button: {
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "Ubuntu",
        padding: "14px 28px",
        borderRadius: "10px",
        fontWeight: "600",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
    },
};

const Investments = () => {
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
        <div>
            {isMobile ? <AboutCompHedMob title='Инвестиции' subtitle='Инвестиции'/> : <AboutCompanyHeader title='Инвестиции' subtitle='Инвестиции'/>}
            <div style={{height: 100,}}/>
            <div style={{...styles.content, ...(isMobile && {flexDirection: 'column',paddingLeft: '1rem'}) }}>
                <div style={{width: '30%', ...(isMobile && {width: '90%'})}}>
                    <div style={styles.subtitle}>Инвестиционные предложения с оптимальными условиями и высокой
                        доходностью.
                    </div>
                    <div style={{...styles.title, ...(isMobile && { fontSize: "24px",})}}>Выгодные инвестиции</div>
                </div>

                <div style={{...styles.paragraph, ...(isMobile && {width: '90%'})}}>
                    Мы предлагаем несколько типов инвестиционных пакетов, подходящих как начинающим, так и опытным
                    инвесторам. Наши стандартные пакеты "Standard" и "Growth" позволяют получать до +1.7% дохода
                        ежедневно с возможностью моментального вывода на счёт. Для тех, кто предпочитает накопительный
                        эффект, доступны пакеты "Compound" и "Accumulation", где прибыль автоматически добавляется к
                        телу депозита, повышая его и увеличивая ваш доход с каждым днём.
                    </div>

            </div>
            <div style={{...(isMobile && { paddingLeft: '0.7rem', paddingRight: '1rem'}) }}>
                <Cards/>
            </div>
            <div style={{height: 100}}/>
            <CryptoScroll/>
            <InvestmentCalculator/>
        </div>
    );
};

export default Investments;
