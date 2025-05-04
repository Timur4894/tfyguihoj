import React, { useState } from 'react';
import fwqyf from '../assets/img/slide03.jpg'
import fwqyf2 from '../assets/img/do2wnload.jpg'

const slides = [
    {
        text: "Добро пожаловать в PRUDENTIAL INVEST! Используйте возможности современных технологий для стабильной прибыли. Чтобы начать, откройте депозит и начните зарабатывать уже сегодня.",
        button: "Поддержка",
        image: fwqyf2,
    },
    {
        text: "Наша служба поддержки всегда на связи! Мы рады вашим пожеланиям и готовы помочь каждому партнёру 24/7. Обратитесь к нам за консультацией или с вопросами в любое время!",
        button: "Связаться",
        image: fwqyf,
    },
];

const SlideSection = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div
            style={{
                position: "relative",
                // borderRadius: "12px",
                overflow: "hidden",
                width: "100%",
                // maxWidth: "800px",
                margin: "0 auto",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
        >
            {/* Фоновое изображение */}
            <div
                style={{
                    backgroundImage: `url(${slides[current].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* Затемнение */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                ></div>

                {/* Контент */}
                <div
                    style={{
                        position: "relative",
                        textAlign: "center",
                        color: "white",
                        padding: "20px",
                        maxWidth: "90%",
                        zIndex: 1,
                    }}
                >
                    <p style={{ fontSize: "16px", fontWeight: 400, marginBottom: "20px", fontFamily: 'Ubuntu' }}>
                        {slides[current].text}
                    </p>
                    <a
                        href='./contact'
                        style={{
                            backgroundColor: "#fbbf24", // жёлтая
                            color: "#1f2937",
                            border: "none",
                            textDecoration: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            // marginBottom: "20px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        {slides[current].button} →
                    </a>

                    {/* Индикаторы страниц */}
                    <div style={{ marginTop: "26px", display: "flex", justifyContent: "center", gap: "6px" }}>
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setCurrent(i)}
                                style={{
                                    width: i === current ? "24px" : "12px",
                                    height: "4px",
                                    backgroundColor: i === current ? "#fbbf24" : "#cbd5e1",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "width 0.3s",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideSection;
