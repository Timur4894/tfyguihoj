import React, {useContext, useEffect, useState} from "react";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import {AuthContext} from "../../context/AuthContext";
import mainUrl from "../../constants";
import AboutCompHedMob from "../../components/AboutCompHedMob";

const styles = {
    container: {
        display: 'flex',
        minHeight: '70vh',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
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
    },
};


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${mainUrl}/api/v1/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка при сбросе пароля');
            }

            setMessage('Новый пароль отправлен на вашу почту.');
            setError('');
            setEmail('');
        } catch (err) {
            setError(err.message);
            setMessage('');
        }
    };

    return (
        <>
            {isMobile ? <AboutCompHedMob title="Сброс пароля" subtitle="Пароль"/> : <AboutCompanyHeader title="Сброс пароля" subtitle="Пароль"/>}
            <div style={styles.container}>
                <div style={styles.formWrapper}>
                    <p style={styles.bottomText}>
                        Введите адрес электронной почты вашей учетной записи. Нажмите кнопку Продолжить, чтобы получить
                        пароль по электронной почте.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <label style={styles.label}>E-Mail:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />

                        <button type="submit" style={styles.button}>Продолжить</button>
                    </form>

                    {/* Сообщения об успехе или ошибке */}
                    {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;

