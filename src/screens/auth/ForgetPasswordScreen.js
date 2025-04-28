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
    },
};

const ForgotPassword = () => {

    return (
        <>
            <AboutCompanyHeader title='Сброс пароля' subtitle='Пароль' />
            <div style={styles.container}>
                <div style={styles.formWrapper}>
                    <p style={styles.bottomText}>
                        Введите адрес электронной почты вашей учетной записи. Нажмите кнопку Продолжить, чтобы получить
                        пароль по электронной почте.
                    </p>

                    <form onSubmit={{}}>
                        <label style={styles.label}>E-Mail:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            // value={formData.email}
                            // onChange={handleChange}
                            style={styles.input}
                            required
                        />

                        <button type="submit" style={styles.button}>Продолжить</button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
