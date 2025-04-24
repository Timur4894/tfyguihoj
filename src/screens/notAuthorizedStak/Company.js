import React from "react";
import AboutSection from "../../components/company/AboutSection";
import MissionSection from "../../components/company/MissionSection";
import CompanyInfoSection from "../../components/company/CompanyInfoSection";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";

const Company = () => {
    return (
        <div>
            <AboutCompanyHeader title='О Компании' subtitle='Подробнее о компании'/>
          <AboutSection/>
            <MissionSection/>
            <CompanyInfoSection/>
        </div>
    );
};

export default Company;
