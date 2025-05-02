import React, {useEffect, useState} from 'react';

const styles = {
    section: {
        padding: '40px 90px',
        // maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
        color: '#1a1a1a',
    },
    heading: {
        fontSize: '28px',
        fontFamily: "Ubuntu",
        fontWeight: '900',
        marginBottom: '10px',
    },
    subheading: {
        fontSize: '28px',
        fontFamily: "Ubuntu",
        fontWeight: '900',
        marginTop: '30px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        lineHeight: '1.6',
        fontWeight: '400',
        fontFamily: "Ubuntu",
        marginBottom: '10px',
    },
    list: {
        paddingLeft: '20px',
        fontFamily: "Ubuntu",
        marginBottom: '10px',
    },
    listItem: {
        marginBottom: '10px',
    },
    bold: {
        fontWeight: '900',
    },
    button: {
        backgroundColor: '#22282c',
        color: '#fff',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '900',
        fontFamily: "Ubuntu",
        borderRadius: '10px',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
    },
};

const MissionSection = () => {

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
        <section style={{...styles.section, ...(isMobile && {padding: '20px 30px',})}}>
            <h2 style={styles.heading}>Наша миссия и цели</h2>
            <p style={styles.text}>
                Наша миссия — сделать передовые технологии доступными для каждого, кто стремится к успеху на финансовых
                рынках и в других важных отраслях. Мы уверены, что интеллектуальные решения могут не только увеличить
                прибыль, но и минимизировать риски, а также открыть новые возможности для бизнеса. Главная цель нашей
                работы — предоставить надёжные инструменты, которые можно интегрировать в повседневное управление
                активами и процессы принятия решений.
            </p>

            <h3 style={styles.subheading}>Ключевые направления и инновации</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Финансовый сектор</span>: Наши решения востребованы среди брокеров и
                    частных инвесторов, которым мы предоставляем доступ к интеллектуальным алгоритмам анализа финансовых
                    данных, прогнозирования рынка и управления активами.
                </li>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Сельскохозяйственный сектор</span>: С помощью нашего искусственного
                    интеллекта компании агробизнеса получают точные прогнозы урожайности, рекомендации по посевам и
                    советы по повышению продуктивности.
                </li>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Медицина</span>: В медицине наш искусственный интеллект помогает в
                    разработке вакцин и медицинских решений, ускоряя процесс создания эффективных препаратов и методов
                    лечения.
                </li>
            </ul>

            <h3 style={styles.subheading}>Доход и стратегия роста</h3>
            <p style={styles.text}>
                Мы предлагаем уникальное программное обеспечение, которое компании могут арендовать для оптимизации
                рабочих процессов и получения конкурентных преимуществ. Это позволяет нам получать доход как от аренды
                ПО, так и от предоставления услуг частным инвесторам и фондам, использующим наши инструменты управления
                активами.
            </p>
            <p style={styles.text}>
                Наша стратегия основана на долгосрочном сотрудничестве и расширении сфер применения нашего программного
                обеспечения. Мы активно разрабатываем новые решения и внедряем их в различные отрасли, что делает наш
                продукт ещё более универсальным и востребованным.
            </p>

            <h3 style={styles.subheading}>Больше о компании</h3>
            <p style={styles.text}>
                Prudential Financial — американская компания, специализирующаяся на страховании, разработки ИИ, а также
                инвестициях. Основные рынки деятельности — США, Япония, а также ряд стран Азии и Латинской Америки.
                Около трети выручки приходится на международные операции. Ключевые направления работы — пенсионное и
                групповое страхование. Объём активов под управлением на 2020 год составил $1,72 трлн.
            </p>
            <p style={styles.text}>
                Prudential Financial преимущественно ведёт деятельность в США, а среди международных рынков ключевую
                роль играет Япония. Через дочернюю компанию Gibraltar Life компания также предоставляет услуги в
                Бразилии, Аргентине и Мексике. Кроме того, у Prudential Financial есть совместные предприятия в Чили,
                Китае, Индии, Индонезии и Гане. Общая численность сотрудников составляет 41,7 тыс. человек, из которых
                16,2 тыс. работают в США.
            </p>
            <p style={styles.text}>
                Два основных направления деятельности компании:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Страхование</span>: (пенсионное, групповое страхование сотрудников, рента
                    и страхование жизни, медицинское страхование).
                </li>
                <li style={styles.listItem}>
                    <span style={styles.bold}>Управление активами </span>: через дочерние компанию Prudential Financial,
                    PGIM.
                </li>
            </ul>
            <p style={styles.text}>
                В списке Forbes Global 2000 в 2016 году Prudential Financial заняла 81-е место, в том числе 42-е по
                размеру активов, 85-е по чистой прибыли, 134-е по обороту и 291-е по рыночной капитализации.
            </p>
            <a href="https://www.forbes.com/companies/prudential-financial/" target="_blank" rel="noreferrer"
               style={styles.button}>
                Forbes Global 2000 ↗
            </a>
        </section>

    );
};

export default MissionSection;
