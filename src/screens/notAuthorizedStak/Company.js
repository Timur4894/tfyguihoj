import React from "react";
import AboutSection from "../../components/company/AboutSection";
import MissionSection from "../../components/company/MissionSection";
import CompanyInfoSection from "../../components/company/CompanyInfoSection";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import RoadMap from "../../components/company/RoadMap";
import Partners from "../../components/company/Partners";
import ReadyToStart from "../../components/ReadyToStart";

const Company = () => {
    return (
        <div>
            <AboutCompanyHeader title='О Компании' subtitle='Подробнее о компании'/>
            <AboutSection/>
            <MissionSection/>
            <CompanyInfoSection/>
            <RoadMap/>
            <Partners/>
            <ReadyToStart/>
        </div>
    );
};

export default Company;
