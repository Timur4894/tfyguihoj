import React, {useEffect, useState} from "react";
import ClassicProgramSection from "../../components/partners/ClassicProgramSection";
import ClassicProgramSection2 from "../../components/partners/ClassicProgramSection2";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import ReadyToStart from "../../components/ReadyToStart";
import AboutCompHedMob from "../../components/AboutCompHedMob";

const Partners = () => {
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
            {isMobile ? <AboutCompHedMob title='Партнёрская программа' subtitle='Партнёрам'/> : <AboutCompanyHeader title='Партнёрская программа' subtitle='Партнёрам'/>}
           <ClassicProgramSection/>
            <ClassicProgramSection2/>
            <ReadyToStart/>
        </div>
    );
};

export default Partners;
