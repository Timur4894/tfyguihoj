import React from "react";
import OfficesSection from "../../components/contact/OfficesSection";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import Map from "../../components/contact/Map";

const Contact = () => {
    return (
        <div>
            <AboutCompanyHeader title='Свяжитесь с нами' subtitle='Контакты'/>
            <OfficesSection/>
            <Map/>
        </div>
    );
};

export default Contact;
