import React, {useContext, useEffect, useState} from 'react';
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import {AuthContext} from "../../context/AuthContext";
import mainUrl from "../../constants";
import AboutCompHedMob from "../../components/AboutCompHedMob";
import {useLocation} from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        minHeight: '90vh',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
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
        width: '95%',
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
        textDecoration: 'none',
        color: '#374151',
    },
};
export default function CreateAccountScreen() {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        ref: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const refFromUrl = queryParams.get("ref");

        if (refFromUrl) {
            setFormData(prev => ({ ...prev, ref: refFromUrl }));
        }
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        try {
            const response = await fetch(`${mainUrl}/api/v1/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    ref: formData.ref || undefined,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Ошибка: ${errorData.message || 'Не удалось зарегистрироваться'}`);
                return;
            }
            const data = await response.json();
            if (data.data.token) {
                login(data.data.token);
            }
            window.location.href = '/cabinetscreen';

        } catch (error) {
            console.error('Ошибка регистрации:', error);
            alert('Произошла ошибка сети.');
        }
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
        <>
            {isMobile ? <AboutCompHedMob title='Регистрация партнёра' subtitle='Регистрация'/> : <AboutCompanyHeader title='Регистрация партнёра' subtitle='Регистрация'/>}
            <div style={styles.container}>
                <div style={styles.formWrapper}>
                    <p style={styles.paragraph}>
                        Заполните необходимые данные ниже и нажмите "Продолжить". Вы будете перенаправлены в личный кабинет, а важная информация также будет отправлена на вашу электронную почту.
                    </p>
                    <p style={styles.paragraph}>
                        Если Вы уже зарегистрированы, перейдите на страницу входа в систему.
                    </p>

                    <h2 style={styles.heading}>Основная информация</h2>

                    <form onSubmit={handleSubmit}>
                        <label style={styles.label}>Имя пользователя</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Имя пользователя"
                            value={formData.username}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Пароль</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Подтвердите пароль</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Подтвердите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        {/* Опциональное поле для реферала */}
                        <label style={styles.label}>Реферальный код (необязательно)</label>
                        <input
                            type="text"
                            name="ref"
                            placeholder="Реферальный код"
                            value={formData.ref}
                            onChange={handleChange}
                            style={styles.input}
                        />

                        <button type="submit" style={styles.button}>Продолжить</button>
                    </form>

                    <p style={styles.bottomText}>
                        Уже есть аккаунт? Воспользуйтесь формой <a style={styles.bold} href='/login'>Авторизации</a>
                    </p>
                </div>
            </div>
        </>
    );
}
