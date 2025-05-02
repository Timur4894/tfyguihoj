import React, { useState } from "react";

const faqData = [
    {
        question: "Что представляет собой ваша платформа?",
        answer: "Наша платформа — это мощный инструмент, с помощью которого каждый партнёр компании может использовать уникальное программное обеспечение и передовые технологии для создания стабильного дохода. Благодаря платформе пользователи получают доступ к инновационным решениям на базе искусственного интеллекта, которые открывают возможности для роста и выгодных инвестиций."
    },
    {
        question: "Какие преимущества я получу от партнёрской программы?",
        answer: "Наша трёхуровневая партнёрская программа позволяет зарабатывать на доходе приглашённых участников: 5% с первого уровня, 3% со второго и 2% с третьего. Кроме того, мы предлагаем matching-бонус, благодаря которому вы будете получать деньги каждый раз, когда ваш реферал получает доход. Подробнее вы можете узнать на странице партнёрской программы."
    },
    {
        question: "Как работает ваш искусственный интеллект и что он делает?",
        answer: "Наш искусственный интеллект анализирует рынок, отслеживает тренды и предоставляет точные прогнозы по различным активам. Но самое главное — наш ИИ постоянно обучается и совершенствуется, чтобы обеспечивать ещё более высокую точность. Дополнительно над его обучением работает команда опытных специалистов, чтобы максимально повысить эффективность алгоритмов."
    },
    {
        question: "Кому подходит ваше инвестиционное предложение?",
        answer: "Наши инвестиционные пакеты подходят как частным инвесторам, так и профессиональным брокерам и фондам. Мы предлагаем различные тарифы — от базовых до накопительных, с гибкими условиями, чтобы каждый клиент мог найти подходящий вариант."
    },
    {
        question: "Как присоединиться к платформе и начать зарабатывать?",
        answer: "Вы можете зарегистрироваться на нашей платформе, чтобы выбрать подходящий инвестиционный пакет или воспользоваться партнёрской программой. После регистрации вам будут доступны уникальные инвестиционные инструменты на базе ИИ, которые помогут вам максимизировать прибыль и укрепить свои позиции на рынке."
    },
    {
        question: "Как производится вывод прибыли и есть ли ограничения?",
        answer: "Вывод средств возможен в любое время после достижения минимальной суммы в эквиваленте 5$. Мы гарантируем строгое соблюдение всех регламентов и безопасные переводы на указанный вами счёт."
    },
];

const styles = {
    section: {
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
    },
    subtitle: {
        color: "#6B7280",
        fontSize: "16px",
        marginBottom: "8px",
        fontFamily: "Ubuntu",
    },
    title: {
        fontSize: "48px",
        fontWeight: "500",
        color: "#374151",
        fontFamily: "Ubuntu",
        marginBottom: "40px",
    },
    item: {
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        marginBottom: "16px",
        overflow: "hidden",
        transition: "0.3s ease",
        textAlign: "left",
    },
    question: {
        padding: "20px 24px",
        fontSize: "20px",
        fontWeight: "700",
        color: "#374151",
        fontFamily: "Ubuntu",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    answer: {
        padding: "0 24px 20px 24px",
        fontSize: "16px",
        color: "#374151",
        lineHeight: "1.6",
        fontFamily: "Ubuntu",
    },
    arrow: {
        transition: "transform 0.3s ease",
    },
    rotated: {
        transform: "rotate(180deg)",
    },
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={styles.section}>
            <div style={styles.subtitle}>Ответы на важные вопросы о платформе и партнёрстве</div>
            <div style={styles.title}>F.A.Q.</div>
            {faqData.map((item, index) => (
                <div key={index} style={styles.item}>
                    <div style={{width: "100%", height: 1, backgroundColor: '#000'}} />
                        <div style={styles.question} onClick={() => toggle(index)}>
                            {item.question}
                            <span style={{...styles.arrow, ...(openIndex === index ? styles.rotated : {})}}>↓</span>
                        </div>
                        {openIndex === index && (
                            <div style={styles.answer}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                    ))}
                </section>
            );
            }
