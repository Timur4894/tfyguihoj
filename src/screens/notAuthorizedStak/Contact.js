import React, {useEffect, useState} from "react";
import OfficesSection from "../../components/contact/OfficesSection";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import Map from "../../components/contact/Map";
import AboutCompHedMob from "../../components/AboutCompHedMob";

const Contact = () => {
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
        <div>
            {isMobile ? <AboutCompHedMob title='Свяжитесь с нами' subtitle='Контакты'/> : <AboutCompanyHeader title='Свяжитесь с нами' subtitle='Контакты'/>}
            <OfficesSection/>
            <Map/>
        </div>
    );
};

export default Contact;
