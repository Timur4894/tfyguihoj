import React from 'react';
import img1 from '../../assets/img/fqwfff.png';

const styles = {
    section: {
        display: 'flex',
        justifyContent: 'center',
        // gap: '4rem',
        // padding: '5rem 2rem',
        // flexWrap: 'wrap',
    },

};

export default function Map() {
    return (
        <section style={styles.section}>
            <img src={img1} style={{width:'100%'}} />
        </section>
    );
}
