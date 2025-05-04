import React, {useEffect, useRef, useState} from 'react';
// import certificate1 from './path-to-doc1.png';
import certificate2 from '../../assets/img/doc_promo.png';
import AArrow from "../../assets/svg/AArrow";

const styles = {

    left: {
        // maxWidth: '50%',
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
        fontSize: '14px',
        fontWeight: '900',
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
    },
    secLinks: {
        display: 'flex',
        gap: '12px',
        marginTop: '20px',
    },
    secButton: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px 18px',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '900',
        borderRadius: '8px',
        textDecoration: 'none',
    },

    textBlock: {
        fontSize: '15px',
        color: '#595959',
        fontWeight: '500',
        marginBottom: '20px',
        lineHeight: '1.6',
    },
    section: {
        display: "flex",
        // flexWrap: "wrap",
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "space-between",
        padding: "60px 20px",
        backgroundColor: "#fff",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 1.5s ease, transform 0.8s ease",
    },
    sectionVisible: {
        opacity: 1,
        transform: "translateY(0)",
    },
};

const CompanyInfoSectionMob = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // отключаем, чтобы не срабатывало повторно
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                ...styles.section,
                ...(isVisible ? styles.sectionVisible : {}),
            }}
        >
            <div style={styles.left}>
                <h2 style={styles.title}>Prudential Financial</h2>

                <p style={styles.textBlock}>
                    Мы — официально зарегистрированная компания, ведущая деятельность в соответствии с законодательством
                    стран регистрации.
                </p>
                <p style={styles.textBlock}>
                    Мы расположены в Бостоне, штат Массачусетс, по адресу: 800 Boylston Street, <span
                    style={styles.bold}>Prudential Tower (главный офис)</span>.
                </p>
                <p style={styles.textBlock}>
                    Кроме того, у нас есть офис в Токио по адресу: 2 Chome-13-10 Nagatachō, Chiyoda City, <span
                    style={styles.bold}>Prudential Tower Tokyo</span>.
                </p>
                <p style={styles.textBlock}>
                    Также вы можете ознакомиться с нашими флагманскими проектами, которыми мы по праву гордимся на нашем
                    сайте <span style={styles.link}>COMPANY BUILDINGS</span>.
                </p>
                <p style={styles.textBlock}>
                    Ознакомьтесь с нашими документами, перейдя по ссылкам ниже.
                </p>

                <div style={styles.buttons}>
                    <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001137774&type=10-K&dateb=&owner=exclude&count=40"
                       target="_blank" rel="noreferrer" style={styles.button}>
                        UNITED STATES SECURITIES AND EXCHANGE COMMISSION <AArrow width={24} height={24} color='#fff'/>
                    </a>
                    <a href="https://d18rn0p25nwr6d.cloudfront.net/CIK-0001137774/31d1fb8d-f0e4-4986-aa28-e60869a98738.pdf"
                       target="_blank" rel="noreferrer" style={styles.button}>
                        Открыть документ .PDF <AArrow width={24} height={24} color='#fff'/>
                    </a>
                </div>

                <p style={styles.description}>
                    “Следите за котировками Prudential Financial в режиме реального времени. Ознакомьтесь с текущими
                    торгами и динамикой акций нашей компании на бирже.”
                </p>

                <a href="https://www.reuters.com/markets/companies/PRU.N/" target="_blank" rel="noreferrer"
                   style={styles.button}>
                    Котировки на бирже <AArrow width={24} height={24} color='#fff'/>

                </a>

                <p style={styles.description}>
                    “Мы предоставляем полную прозрачность наших финансовых данных. Ознакомьтесь с официальными отчетами
                    Prudential Financial, поданными в Комиссию по ценным бумагам и биржам США (SEC):”
                </p>

                <div style={styles.secLinks}>
                    <a href="https://www.sec.gov/Archives/edgar/data/1137774/000119312506041378/d10k.htm"
                       style={styles.secButton}>SEC 2005 <AArrow width={24} height={24} color='#fff'/></a>
                    <a href="https://www.sec.gov/Archives/edgar/data/1137774/000113777416000226/pfi201510-k.htm"
                       style={styles.secButton}>SEC 2015 <AArrow width={24} height={24} color='#fff'/></a>
                </div>
            </div>

            <div style={styles.right}>
                {/*<img src={certificate1} alt="Документ 1" style={styles.docImage} />*/}
                <img src={certificate2} alt="Документ 2" style={styles.docImage2}/>
                <p style={{...styles.description, textAlign: 'center'}}>
                    “Также на нашей платформе Prudent Financial вы можете оформить страхование и воспользоваться другими
                    финансовыми услугами. Перейдите по ссылке, чтобы узнать больше и выбрать нужный вам сервис.”
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a style={{
                        color: '#595959',
                        fontWeight: '500',
                    }} href='https://www.prudential.com/'>https://www.prudential.com/</a>
                </p>


            </div>
        </section>
    );
};

export default CompanyInfoSectionMob;
