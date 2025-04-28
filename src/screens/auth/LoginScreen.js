import React, {useContext, useState} from "react";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import {AuthContext} from "../../context/AuthContext";
import mainUrl from "../../constants";

const styles = {
    container: {
        display: 'flex',
        minHeight: '70vh',
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
        padding: '1rem',
        backgroundColor: '#111827',
        color: '#fff',
        fontWeight: '600',
        // borderRadius: '6px',
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
        textDecoration: 'none',
        color: '#374151',
    },
};

const LoginScreen = () => {
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${mainUrl}/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Ошибка входа: ${errorData.message || 'Проверьте email и пароль'}`);
                return;
            }

            const data = await response.json();
            console.log('Успешный вход:', data);

            if (data.token) {
                login(data.token);
            }

            window.location.href = '/cabinetscreen';

        } catch (error) {
            console.error('Ошибка входа:', error);
            alert('Ошибка сети. Попробуйте позже.');
        }
    };

    return (
        <>
            <AboutCompanyHeader title='Вход в кабинет' subtitle='Вход' />
            <div style={styles.container}>
                <div style={styles.formWrapper}>

                    <form onSubmit={handleSubmit}>
                        <label style={styles.label}>E-Mail:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Пароль:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        <p style={{
                            fontWeight: '900',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: -10,

                            marginTop: 0,
                            backgroundColor: '#fff',
                        }}>
                            Забыли пароль?
                        </p>

                        <button type="submit" style={styles.button}>Продолжить</button>
                    </form>

                    <p style={styles.bottomText}>
                        Ещё нет аккаунта? Воспользуйтесь формой <a style={styles.bold} href='/createaccountscreen'>Регистрации</a>
                    </p>
                    <p style={styles.bottomText}>
                        Забыли пароль? Воспользуйтесь формой <a style={styles.bold} href='/forgotpassword'>Восстановления</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginScreen;
