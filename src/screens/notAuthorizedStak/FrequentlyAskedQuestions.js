import React, {useEffect, useState} from "react";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import AboutCompHedMob from "../../components/AboutCompHedMob";

const faqData = [
    {
        question: "Что представляет собой ваша платформа?",
        answer: "Наша платформа — это мощный инструмент, с помощью которого каждый партнёр компании может использовать наш уникальный софт и передовые технологии для создания стабильного дохода. Благодаря платформе, пользователи получают доступ к инновационным решениям на базе искусственного интеллекта, которые открывают возможности для роста и прибыльного инвестирования.",
    },
    {
        question: "Что нужно для активации инвестиционного пакета?",
        answer: "Для активации депозита необходимо заранее пополнить баланс в выбранной криптовалюте. В личном кабинете, в разделе открытия нового депозита, вы сможете выбрать инвестиционный пакет и активировать его.",
    },
    {
        question: "Какую выгоду я могу получить от партнёрской программы?",
        answer: "Наша трёхуровневая партнёрская программа позволяет зарабатывать с дохода приглашённых участников: 5% с первого уровня, 3% со второго и 2% с третьего. Помимо этого, мы предлагаем матчинг-бонус, благодаря которому вы будете зарабатывать каждый раз, когда получает доход ваш реферал. Подробнее вы можете узнать на странице Партнёрской программы .",
    },
    {
        question: "Как работает ваш искусственный интеллект и что он делает?",
        answer: "Все данные о доходах и транзакциях доступны в вашем личном кабинете. Вы можете просматривать статистику по каждому активному депозиту и следить за начислениями в режиме реального времени.",
    },
    {
        question: "Как я могу отслеживать свои доходы и транзакции?",
        answer: "Наши инвестиционные пакеты подходят как для частных инвесторов, так и для профессиональных брокеров и фондов. Мы предлагаем разнообразные тарифы, от базовых до накопительных, с гибкими условиями и сроками, чтобы каждый клиент мог найти подходящий вариант.",
    },
    {
        question: "Какие криптовалюты поддерживает платформа?",
        answer: "Мы поддерживаем USDT TRC20, TRX, Bitcoin, Ethereum и другие популярные криптовалюты. Полный список доступен в разделе \"Балансы\" вашего личного кабинета.",
    },
    {
        question: "Как происходит вывод прибыли и есть ли ограничения?",
        answer: "Вывод средств возможен в любое время после достижения минимальной суммы в эквиваленте 5 долларов. Мы гарантируем строгое соблюдение всех регламентов и безопасные переводы на указанный вами счёт.",
    },
    {
        question: "Что делать, если я забыл пароль?",
        answer: "Вы можете восстановить пароль, используя функцию \"Забыли пароль\" на странице входа. Вам будет отправлен новый пароль на электронный адрес, указанный при регистрации.",
    },
];
const FrequentlyAskedQuestions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Разделяем вопросы на 2 колонки
    const leftColumn = faqData.filter((_, idx) => idx % 2 === 0);
    const rightColumn = faqData.filter((_, idx) => idx % 2 !== 0);

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
            {isMobile ? <AboutCompHedMob title="F.A.Q." subtitle="Вопрос-Ответ"/> : <AboutCompanyHeader title="F.A.Q." subtitle="Вопрос-Ответ"/>}
            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2 style={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        marginBottom: "48px",
                        textAlign: "center",
                        color: "#1f2937"
                    }}>
                        Ответы на важные вопросы
                    </h2>

                    {/* FLEX-контейнер для двух колонок */}
                    <div style={{
                        display: "flex",
                        gap: "24px",
                        flexWrap: "wrap",
                    }}>
                        {/* Левая колонка */}
                        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "24px" }}>
                            {leftColumn.map((item, index) => {
                                const realIndex = index * 2;
                                return (
                                    <div
                                        key={realIndex}
                                        style={{
                                            background: "white",
                                            border: openIndex === realIndex ? "1px solid #000" : 'none',
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                                            overflow: "hidden",
                                            transition: "box-shadow 0.3s ease",
                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: "24px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                fontSize: "20px",
                                                fontWeight: "500",
                                                borderBottom: openIndex === realIndex ? "1px solid #e5e7eb" : "none",
                                            }}
                                            onClick={() => toggleIndex(realIndex)}
                                        >
                                            {item.question}
                                            <span style={{
                                                transform: openIndex === realIndex ? "rotate(360deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s"
                                            }}>
                                                {openIndex === realIndex ? "↑" : "↓"}
                                            </span>
                                        </div>

                                        {openIndex === realIndex && (
                                            <div style={{
                                                padding: "24px",
                                                fontSize: "16px",
                                                color: "#4b5563",
                                                lineHeight: "1.6"
                                            }}>
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Правая колонка */}
                        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "24px" }}>
                            {rightColumn.map((item, index) => {
                                const realIndex = index * 2 + 1;
                                return (
                                    <div
                                        key={realIndex}
                                        style={{
                                            background: "white",
                                            border: openIndex === realIndex ? "1px solid #000" : 'none',
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                                            overflow: "hidden",
                                            transition: "box-shadow 0.3s ease",
                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: "24px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                fontSize: "20px",
                                                fontWeight: "500",
                                                borderBottom: openIndex === realIndex ? "1px solid #e5e7eb" : "none",
                                            }}
                                            onClick={() => toggleIndex(realIndex)}
                                        >
                                            {item.question}
                                            <span style={{
                                                transform: openIndex === realIndex ? "rotate(360deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s"
                                            }}>
                                                {openIndex === realIndex ? "↑" : "↓"}
                                            </span>
                                        </div>

                                        {openIndex === realIndex && (
                                            <div style={{
                                                padding: "24px",
                                                fontSize: "16px",
                                                color: "#4b5563",
                                                lineHeight: "1.6"
                                            }}>
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrequentlyAskedQuestions;
