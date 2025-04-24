import React from 'react';
import img from '../../assets/img/partner01.jpg'

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
        // gridTemplateColumns: '1fr',
        padding: '2rem',
        // alignItems: 'center',
    },
    image: {
        width: '100%',
        // boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    heading: {
        fontSize: '2.9rem',
        marginLeft: '10%',
        fontWeight: '600',
        fontFamily: "Ubuntu",
        // alignSelf: 'center',
        marginBottom: '1rem',
        color: '#1a1a1a',
    },
    paragraph: {
        color: '#4b5563',
        marginLeft: '10%',
        marginBottom: '1.5rem',
        fontFamily: "Ubuntu",
        width: '60%',
        lineHeight: '1.6',
    },
    subheading: {
        fontSize: '1.5rem',
        marginLeft: '20%',
        fontFamily: "Ubuntu",
        fontStyle: 'italic',
        fontWeight: '900',
        marginBottom: '0.5rem',
    },
    percentages: {
        fontSize: '2.5rem',
        fontFamily: "Ubuntu",
        marginLeft: '20%',
        fontWeight: '300',
        color: '#1f2937',
    },
};

export default function ClassicProgramSection() {
    return (
        <section style={styles.section}>
            <div style={{width:'100%', marginLeft: 50}}>
                <img
                    src={img}
                    alt="Two businessmen shaking hands"
                    style={styles.image}
                />
            </div>

            <div style={styles.sectionMd}>
                <h2 style={styles.heading}>Classic program</h2>
                <p style={styles.paragraph}>
                    Join the affiliate program, invite new members and receive a stable income
                    from their deposits. The program covers three levels of structure, so that each
                    new partner brings you profit. Create your team and watch your income grow
                    with every new step!
                </p>
                <div>
                    <h3 style={styles.subheading}>3 levels of structure</h3>
                    <p style={styles.percentages}>
                        5% - 3% - 2%
                    </p>
                </div>
            </div>
        </section>
    );
}
