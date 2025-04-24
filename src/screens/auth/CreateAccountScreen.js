import React from 'react';
import AboutCompanyHeader from "../../components/AboutCompanyHeader";

const styles = {
    container: {
        display: 'flex',
        minHeight: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // padding: '1rem',
    },
    formWrapper: {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#fff',
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '2.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    paragraph: {
        color: '#374151',
        fontFamily: "Ubuntu",
        marginBottom: '1.5rem',
        fontSize: '0.95rem',
    },
    heading: {
        fontSize: '1.25rem',
        fontFamily: "Ubuntu",
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
        fontFamily: "Ubuntu",
        marginBottom: '0.25rem',
        color: '#374151',
        fontSize: '0.95rem',
    },
    input: {
        width: '100%',
        padding: '0.5rem 1rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        marginBottom: '1rem',
        fontSize: '1rem',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#111827',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '6px',
        cursor: 'pointer',
        border: 'none',
        marginTop: '1rem',
    },
    bottomText: {
        fontFamily: "Ubuntu",
        marginTop: '1.5rem',
        fontSize: '0.875rem',
        color: '#374151',
    },
    bold: {
        fontWeight: '600',
        fontFamily: "Ubuntu",
    },
};

export default function CreateAccountScreen() {
    return (
        <>
        <AboutCompanyHeader title='Регистрация партнёра' subtitle='Регистрация'/>
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <p style={styles.paragraph}>
                    Заполните необходимые данные ниже и нажмите "Продолжить". Вы будете перенаправлены в личный кабинет, а важная информация также будет отправлена на вашу электронную почту.
                </p>
                <p style={styles.paragraph}>
                    Если Вы уже зарегистрированы, перейдите на страницу входа в систему.
                </p>

                <h2 style={styles.heading}>Основная информация</h2>

                <form>
                    <label style={styles.label}>Имя пользователя</label>
                    <input type="text" placeholder="Имя пользователя" style={styles.input} />

                    <label style={styles.label}>Email</label>
                    <input type="email" placeholder="Email" style={styles.input} />

                    <label style={styles.label}>Пароль</label>
                    <input type="password" placeholder="Пароль" style={styles.input} />

                    <label style={styles.label}>Подтвердите пароль</label>
                    <input type="password" placeholder="Подтвердите пароль" style={styles.input} />

                    <button type="submit" style={styles.button}>Продолжить</button>
                </form>

                <p style={styles.bottomText}>
                    Уже есть аккаунт? Воспользуйтесь формой <span style={styles.bold}>Авторизации</span>
                </p>
            </div>
        </div>
        </>
    );
}

