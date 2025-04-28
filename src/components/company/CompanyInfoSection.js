import React from 'react';
// import certificate1 from './path-to-doc1.png';
import certificate2 from '../../assets/img/doc_promo.png';

const styles = {
    section: {
        backgroundColor: '#f6f9fc',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '100px 40px',
        paddingLeft: '100px',
        // flexWrap: 'wrap',
        fontFamily: 'sans-serif',
    },
    left: {
        maxWidth: '50%',
    },
    subtitle: {
        color: '#666',
        fontSize: '14px',
        fontFamily: "Ubuntu",
        // marginBottom: '8px',
    },
    title: {
        fontSize: '36px',

        fontFamily: "Ubuntu",
        marginBottom: '8px',
        fontWeight: '900',
        color: '#22282c',
        lineHeight: '1.2',
    },
    companyNumber: {
        color: '#22282c',
        fontSize: '18px',
        fontWeight: '700',
        marginBottom: '20px',
        fontFamily: "Ubuntu",
    },
    description: {
        fontSize: '14px',
        width: '80%',
        color: '#444',
        fontFamily: "Ubuntu",
        marginBottom: '30px',
        lineHeight: '1.5',
    },
    buttons: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
    },
    button: {
        backgroundColor: '#22282c',
        color: '#fff',
        padding: '12px 20px',
        fontSize: '12px',
        fontWeight: '500',
        fontFamily: "Ubuntu",
        borderRadius: '10px',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
    },
    right: {
        position: 'relative',
        maxWidth: '600px',
        marginTop: '30px',
    },
    docImage: {
        width: '230px',
        borderRadius: '8px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        transform: 'rotate(-4deg)',
        position: 'absolute',
        top: '0',
        left: '60px',
        zIndex: 2,
    },
    docImage2: {
        width: '100%',
        borderRadius: '8px',
        // boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        transform: 'rotate(6deg)',
        // position: 'absolute',
        top: '40px',
        left: '100px',
        zIndex: 1,
    }
};

const CompanyInfoSection = () => {
    return (
        <section style={styles.section}>
            <div style={styles.left}>
                <p style={styles.subtitle}>Официально зарегистрированная компания в Англии</p>
                <h2 style={styles.title}>WHITE LION<br/>INVESTMENTS LIMITED</h2>
                <p style={styles.companyNumber}>Регистрационный номер компании: OE026801</p>
                <p style={styles.description}>
                    Мы — официально зарегистрированная компания, работающая в соответствии с законодательством стран
                    регистрации.
                    У нас есть офисы в Лондоне и Гонконге. Ознакомьтесь с нашими документами по ссылкам ниже.
                </p>
                <div style={styles.buttons}>
                    <a href="https://www.gov.uk" target="_blank" rel="noreferrer" style={styles.button}>
                        Ссылка на gov.uk ↗
                    </a>
                    {/*<a href="/docs/company.pdf" target="_blank" rel="noreferrer" style={styles.button}>*/}
                    {/*    Открыть .PDF документ ↗*/}
                    {/*</a>*/}
                </div>
            </div>

            <div style={styles.right}>
                {/*<img src={certificate1} alt="Документ 1" style={styles.docImage} />*/}
                <img src={certificate2} alt="Документ 2" style={styles.docImage2}/>
            </div>
        </section>
    );
};

export default CompanyInfoSection;
