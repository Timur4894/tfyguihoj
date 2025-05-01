import React, {useEffect, useState} from "react";
import AboutSection from "../../components/company/AboutSection";
import MissionSection from "../../components/company/MissionSection";
import CompanyInfoSection from "../../components/company/CompanyInfoSection";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import RoadMap from "../../components/company/RoadMap";
import Partners from "../../components/company/Partners";
import ReadyToStart from "../../components/ReadyToStart";
import AboutCompHedMob from "../../components/AboutCompHedMob";
import AboutSectionMobile from "../../components/company/AboutSectionMobile";
import CompanyInfoSectionMob from "../../components/company/CompanyInfoSectionMob";
import PartnersMob from "../../components/company/PartnersMob";

const Company = () => {
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
            {isMobile ? <AboutCompHedMob title='О Компании'
                              subtitle='Подробнее о компании'/> : <AboutCompanyHeader title='О Компании' subtitle='Подробнее о компании'/>}
            {!isMobile ? <AboutSection/> : <AboutSectionMobile/>}
            <MissionSection/>
            {isMobile ? <CompanyInfoSectionMob/> : <CompanyInfoSection/>}
            <RoadMap/>
            {isMobile ? <PartnersMob/> :  <Partners/>}
            <ReadyToStart/>
        </div>
    );
};

export default Company;
