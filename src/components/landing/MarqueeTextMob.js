import React from 'react';
import bg from "../../assets/img/download.jpg";

const styles = {
    wrapper: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        background: 'transparent',
        position: 'relative',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
    },
    text: {
        display: 'inline-block',
        fontSize: '26vw',
        fontWeight: 900,
        fontFamily: "Ubuntu",
        color: '#1f2937',
        padding: '80px 0',
        paddingBottom: '20px',
        animation: 'scrollText 520s linear infinite',
    },
};

// Вставка keyframes через JS
function withKeyframes() {
    const styleSheet = document.styleSheets[0];
    if (!styleSheet) return;

    const existing = [...styleSheet.cssRules].find(rule =>
        rule.name === 'scrollText'
    );

    if (!existing) {
        styleSheet.insertRule(`
      @keyframes scrollText {
        0% { transform: translateX(0%) }
        100% { transform: translateX(-100%) }
      }
    `, styleSheet.cssRules.length);
    }
}

const MarqueeText = () => {
    withKeyframes();

    return (
        <div style={styles.wrapper}>
            <div style={styles.text}>
                Modern Instincts of AI Technology Modern Instincts of AI Technology Modern Instincts of AI Technology
                Modern Instincts of AI Technology Modern Instincts of AI Technology Modern Instincts of AI Technology
                Modern Instincts of AI Technology Modern Instincts of AI Technology Modern Instincts of AI Technology
                Modern Instincts of AI Technology Modern Instincts of AI Technology Modern Instincts of AI Technology
                Modern Instincts of AI Technology Modern Instincts of AI Technology Modern Instincts of AI Technology
                Modern Instincts of AI Technology Modern Instincts of AI Technology Modern Instincts of AI Technology
            </div>
            {/*<div>*/}
            <p style={{
                fontSize: '10vw',
                fontWeight: 900,
                fontFamily: "Ubuntu",
                color: '#1f2937',
                marginLeft: '10%',

            }}>
                <span style={{display: 'block'}}>Эффективные</span>
                <span style={{display: 'block'}}>инвестиции</span>
                <span style={{display: 'block'}}>с поддержкой AI</span>
            </p>

            <div style={{display: "flex", alignItems: 'center',justifyContent: 'center', width: '100%', flexDirection: 'row',}}>
                <ion-icon name="leaf-outline"></ion-icon>
                <p style={{
                    fontSize: '5vw',
                    // fontWeight: 900,
                    fontFamily: "Ubuntu",
                    // marginTop: -5,
                    marginLeft: 10,
                    color: '#1f293s7',
                }}>
                    <span style={{display: 'block'}}>Создаём ИИ-софт,</span>
                    <span style={{display: 'block'}}>усиливающий работу</span>
                    <span style={{display: 'block'}}>и успех брокеров</span>

                </p>
            </div>


        </div>
    );
};

export default MarqueeText;
