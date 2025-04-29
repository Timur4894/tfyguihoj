import React, {useEffect, useState} from 'react';
import AboutCompanyHeader from "../components/AboutCompanyHeader";
import AboutCompHedMob from "../components/AboutCompHedMob";

const styles = {
    wrapper: {
        padding: '60px 40px',
        maxWidth: '960px',
        margin: '0 auto',
        fontFamily: 'Ubuntu, sans-serif',
        color: '#222',
        lineHeight: '1.6',
        // backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: '36px',
        fontWeight: '700',
        marginBottom: '30px',
    },
    section: {
        marginBottom: '40px',
    },
    sectionTitle: {
        fontSize: '22px',
        fontWeight: '600',
        marginBottom: '10px',
        color: '#111',
    },
    paragraph: {
        marginBottom: '16px',
    },
    list: {
        paddingLeft: '20px',
        marginBottom: '16px',
    },
};

const PrivacyPolicyScreen = () => {
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
        <>
            {isMobile ? <AboutCompHedMob title='Политика конфиденциальности' subtitle='Конфиденциальность'/> : <AboutCompanyHeader title='Политика конфиденциальности' subtitle='Конфиденциальность'/>}
        <div style={styles.wrapper}>
            <h1 style={styles.title}>Политика конфиденциальности</h1>

            <div style={styles.section}>
                <p style={styles.paragraph}>
                    Все соответствующие юридические термины и информация, необходимые для управления и понимания ваших юридических отношений с нашей компанией, представлены на этом сайте для всеобщего ознакомления. Прежде чем открывать счет на этом веб-сайте, убедитесь, что вы поняли и согласны со всеми юридическими условиями.
                </p>
                <p style={styles.paragraph}>
                    Мы осознаем важность соблюдения норм, правил и эксплуатационных требований. Мы стремимся вести коммерческую инвестиционную деятельность в рамках разрешенных нормативных актов и соблюдать дисциплину и ответственность.
                </p>
                <p style={styles.paragraph}>
                    Обеспечение прозрачности ликвидности и строгого финансового управления капиталом и аудита для инвесторов.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Наши обязательства</h2>
                <p style={styles.paragraph}>
                    PRUDENTIAL INVEST INVESTMENTS LIMITED управляет <a href="https://prudential-invest.com/" target="_blank" rel="noreferrer">https://prudential-invest.com</a> и может управлять другими веб-сайтами. Мы признаем, что ваша конфиденциальность очень важна, и мы уважаем личную информацию и частную жизнь каждого пользователя.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Обработка персональной информации</h2>
                <p style={styles.paragraph}>
                    Мы собираем личную информацию только на законных основаниях — по вашему согласию, для выполнения контракта или в рамках законных интересов. Если обработка данных требуется по закону — мы сообщим об этом заранее.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Хранение и защита вашей личной информации</h2>
                <ul style={styles.list}>
                    <li>Защищённые помещения и серверы.</li>
                    <li>Зашифрованные каналы передачи.</li>
                    <li>Брандмауэры, аутентификация, контроль доступа.</li>
                    <li>Регулярная проверка мер защиты.</li>
                    <li>Ограничение доступа для сотрудников и подрядчиков.</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Наш сайт</h2>
                <p style={styles.paragraph}>
                    Сайт может содержать ссылки на сторонние ресурсы, которые не подпадают под нашу политику. Мы рекомендуем проверять их условия конфиденциальности отдельно.
                </p>
                <p style={styles.paragraph}>
                    Мы используем cookie и логи веб-сервера для сбора статистических данных и повышения удобства использования сайта.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Настройки Cookie</h2>
                <p style={styles.paragraph}>
                    Мы используем обязательные, функциональные и маркетинговые cookies. Вы можете изменить настройки в вашем браузере или в разделе настроек cookie на нашем сайте.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Хранение данных</h2>
                <p style={styles.paragraph}>
                    Мы храним вашу личную информацию только в течение необходимого срока, в соответствии с целями и юридическими обязательствами.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Ваши права на защиту данных</h2>
                <ul style={styles.list}>
                    <li>Право на доступ и копию ваших данных.</li>
                    <li>Право на исправление и обновление.</li>
                    <li>Право на переносимость данных.</li>
                    <li>Право отказаться от маркетинга и отозвать согласие.</li>
                    <li>Право на удаление и ограничение обработки.</li>
                    <li>Право подать жалобу в надзорный орган.</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Обновления настоящей политики</h2>
                <p style={styles.paragraph}>
                    Мы можем периодически обновлять настоящую Политику. Изменения будут отображены на этой странице, и мы рекомендуем регулярно проверять её.
                </p>
            </div>
        </div>
        </>
    );
};

export default PrivacyPolicyScreen;
