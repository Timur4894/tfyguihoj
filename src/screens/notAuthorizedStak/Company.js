import React, {useEffect, useState} from "react";
import AboutSection from "../../components/company/AboutSection";
import MissionSection from "../../components/company/MissionSection";
import CompanyInfoSection from "../../components/company/CompanyInfoSection";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import RoadMap from "../../components/company/RoadMap";
import Partners from "../../components/company/Partners";
import ReadyToStart from "../../components/ReadyToStart";
import AboutCompHedMob from "../../components/AboutCompHedMob";

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
