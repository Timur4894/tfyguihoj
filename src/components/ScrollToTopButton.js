import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        visible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1d20',
                    color: '#fff',
                    border: '1px solid #1a1d20',
                    cursor: 'pointer',
                    fontSize: '20px',
                    zIndex: 1000,
                    transition: 'opacity 0.3s ease'
                }}
                aria-label="Наверх"
            >
                <ion-icon name="chevron-up-outline"></ion-icon>
            </button>
        )
    );
};

export default ScrollToTopButton;
