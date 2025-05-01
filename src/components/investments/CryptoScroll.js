import React, {useEffect, useRef, useState} from "react";
import ETH from '../../assets/img/01.png';
import LTC from '../../assets/img/02.png';
import TRC from '../../assets/img/03.png';
import TRX from '../../assets/img/04.png';
import USDT from '../../assets/img/05.png';

const styles = {
    wrapper: {
        overflow: "hidden",
        padding: "24px",
        backgroundColor: "#F9FAFB",
        position: "relative",
    },
    scrollArea: {
        display: "flex",
        gap: "16px",
        animation: "scroll 40s linear infinite",
    },
    item: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        minWidth: "200px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        fontFamily: "Ubuntu",
    },
    icon: {
        // width: "40px",
        // height: "40px",
    },
    name: {
        fontWeight: "600",
        fontSize: "16px",
        marginBottom: "4px",
        color: "#111827",
    },
    symbol: {
        fontSize: "12px",
        color: "#6B7280",
    },
    title: {
        fontSize: "3.5rem",
        fontWeight: "400",
        textAlign: "center",
        // marginBottom: "16px",
        fontFamily: "Ubuntu",
        color: "#1F2937",
    },
};

const cryptocurrencies = [
    { name: "Ethereum", symbol: "ETH", icon: ETH },
    { name: "Litecoin", symbol: "LTC", icon: LTC },
    { name: "Tether", symbol: "USDT TRC20", icon: TRC },
    { name: "Tron", symbol: "TRX", icon: TRX },
    { name: "Tether", symbol: "USDT TRC20", icon: USDT },
];

export default function CryptoScroll() {
    const scrollRef = useRef(null);

    // Duplicate list to create infinite scroll effect
    const extendedList = [...cryptocurrencies, ...cryptocurrencies];


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
        <div style={{ backgroundColor: "#f4f8ff", padding: "100px 0", position: "relative" }}>
            <div style={{ width: '100%', height: 1, backgroundColor: '#000', position: 'absolute', top: 0 }} />
            <h2 style={{...styles.title, ...(isMobile && { fontSize: "24px",})}}>Поддерживаемые криптовалюты</h2>
            <div style={styles.wrapper}>
                <style>
                    {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }

                        ::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                </style>
                <div style={{ ...styles.scrollArea, width: "max-content" }} ref={scrollRef}>
                    {extendedList.map((crypto, index) => (
                        <div style={styles.item} key={index}>
                            <img src={crypto.icon} alt={crypto.name} style={styles.icon} />
                            {/*<div>*/}
                            {/*    <div style={styles.name}>{crypto.name}</div>*/}
                            {/*    <div style={styles.symbol}>{crypto.symbol}</div>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ width: '100%', height: 1, backgroundColor: '#000', position: 'absolute', bottom: 0 }} />
        </div>
    );
}
