import React, { useState } from "react";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import mainUrl from "../../constants";

const styles = {
    container: {
        display: 'flex',
        minHeight: '70vh',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
};

const ChangePasswordScreen = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const token = localStorage.getItem('authToken');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${mainUrl}/api/v1/user/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка при смене пароля');
            }

            setMessage('Пароль успешно изменён');
            setError('');
            setCurrentPassword('');
            setNewPassword('');
        } catch (err) {
            setError(err.message);
            setMessage('');
        }
    };

    return (
        <>
            <AboutCompanyHeader title="Смена пароля" subtitle="Пароль" />
            <div style={styles.container}>
                <div style={styles.formWrapper}>
                    <p style={styles.bottomText}>Форма смены пароля</p>

                    <form onSubmit={handleSubmit}>
                        <label style={styles.label}>Текущий пароль</label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Новый пароль</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            style={styles.input}
                            required
                        />

                        <button type="submit" style={styles.button}>Продолжить</button>
                    </form>

                    {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                </div>
            </div>
        </>
    );
};

export default ChangePasswordScreen;
