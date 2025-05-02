import React, {useEffect, useRef, useState} from 'react';
import img from '../../assets/img/partner02.jpg'
import dots from "../../assets/img/pattern.png";

// const styles = {
//     section: {
//         display: 'flex',
//         // gridTemplateColumns: '1fr',
//         gap: '2rem',
//         padding: '2rem',
//         alignItems: 'center',
//     },
//     sectionMd: {
//         display: 'flex',
//         position: 'relative',
//         flexDirection: 'column',
//         // gridTemplateColumns: '1fr',
//         padding: '2rem',
//         // alignItems: 'center',
//     },
//     image: {
//         width: '110%',
//         // boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//     },
//     heading: {
//         fontSize: '2.9rem',
//         marginLeft: '10%',
//         fontWeight: '600',
//         fontFamily: "Ubuntu",
//         // alignSelf: 'center',
//         marginBottom: '1rem',
//         color: '#1a1a1a',
//     },
//     paragraph: {
//         color: '#4b5563',
//         marginLeft: '10%',
//         marginBottom: '1.5rem',
//         fontFamily: "Ubuntu",
//         width: '60%',
//         lineHeight: '1.6',
//     },
//     subheading: {
//         fontSize: '1.5rem',
//         marginLeft: '20%',
//         fontFamily: "Ubuntu",
//         fontStyle: 'italic',
//         fontWeight: '900',
//         marginBottom: '0.5rem',
//     },
//     percentages: {
//         fontSize: '4.5rem',
//         fontFamily: "Ubuntu",
//         color: 'transparent',
//         WebkitTextStroke: '1px rgba(0, 0, 0)',
//         marginLeft: '20%',
//         fontWeight: '300',
//         // color: '#1f2937',
//     },
// };
//
// export default function ClassicProgramSection2() {
//     return (
//         <section style={styles.section}>
//             <div style={styles.sectionMd}>
//                 <img src={dots} alt="Cyber Lion" style={{
//                     width: "30%",
//                     height: "auto",
//                     position: "absolute",
//                     right: '-20%',
//                     top: '30%',
//                     zIndex: 0
//                 }}/>
//                 <h2 style={styles.heading}>Матчинг-бонус</h2>
//                 <p style={styles.paragraph}>
//                     Зарабатывайте ещё больше с матчинг-бонусом! Каждый раз, когда ваш партнёр первого уровня получает доход, вы зарабатываете вместе с ним. Получайте дополнительный бонус в размере 5% от его прибыли и увеличивайте свой доход без ограничений!
//                 </p>
//                 <div>
//                     <h3 style={styles.subheading}>1-й уровень структуры</h3>
//                     <p style={styles.percentages}>
//                         5%
//                     </p>
//                 </div>
//             </div>
//             <div style={{width: '100%', marginRight: 50}}>
//                 <img
//                     src={img}
//                     alt="Two businessmen shaking hands"
//                     style={styles.image}
//                 />
//             </div>
//         </section>
//     );
// }


const styles = {
    section: {
        display: 'flex',
        // gridTemplateColumns: '1fr',
        gap: '2rem',
        padding: '2rem',
        alignItems: 'center',
    },
    sectionMd: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        // gridTemplateColumns: '1fr',
        padding: '2rem',
        // alignItems: 'center',
    },
    image: {
        width: '110%',
        zIndex: 1
        // boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    heading: {
        fontSize: '2.9rem',
        // marginLeft: '10%',
        fontWeight: '600',
        fontFamily: "Ubuntu",
        // alignSelf: 'center',
        marginBottom: '1rem',
        color: '#1a1a1a',
    },
    paragraph: {
        color: '#4b5563',
        // marginLeft: '10%',
        marginBottom: '1.5rem',
        fontFamily: "Ubuntu",
        width: '60%',
        lineHeight: '1.6',
    },
    subheading: {
        fontSize: '2.2rem',
        // marginLeft: '20%',
        fontFamily: "Ubuntu",
        marginTop: 0,
        // fontStyle: 'italic',
        fontWeight: '900',
        marginLeft: '18%',
        marginBottom: '0rem',
    },
    percentages: {
        fontSize: '4.5rem',
        marginTop: 0,
        fontFamily: "Ubuntu",
        marginLeft: '25%',
        color: 'transparent',
        WebkitTextStroke: '0.5px rgba(0, 0, 0)',
        fontWeight: '900',
        // color: '#1f2937',
    },
    section: {
        display: "flex",
        // flexWrap: "wrap",
        flexDirection: 'column',
        alignItems: "center",
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

export default function ClassicProgramSectionMob2() {
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
        <section
            ref={sectionRef}
            style={{
                ...styles.section,
                ...(isVisible ? styles.sectionVisible : {}),
            }}
        >

            <div style={{...styles.sectionMd, ...(isMobile && {padding: '0rem',})}}>
                <img src={dots} alt="Cyber Lion" style={{
                    width: "70%",
                    height: "auto",
                    position: "absolute",
                    right: '0%',
                    bottom: '-3%',
                    zIndex: 0
                }}/>
                <h2 style={{...styles.heading, ...(isMobile && {fontSize: '34px'})}}>Матчинг-бонус <br/>программа</h2>
                <p style={{...styles.paragraph, ...(isMobile && {width: '100%',})}}>
                    Зарабатывайте ещё больше с матчинг-бонусом! Каждый раз, когда ваш партнёр первого уровня получает доход, вы зарабатываете вместе с ним. Получайте дополнительный бонус в размере 5% от его прибыли и увеличивайте свой доход без ограничений!
                </p>
                <div>
                    <h3 style={styles.subheading}>1-й уровень структуры</h3>
                    <p style={{...styles.percentages}}>
                        5%
                    </p>
                </div>
            </div>

            <div style={{width: '90%', marginRight: 50}}>
                <img
                    src={img}
                    alt="Two businessmen shaking hands"
                    style={styles.image}
                />
            </div>
        </section>
    );
}
