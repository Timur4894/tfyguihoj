import React from "react";
import ClassicProgramSection from "../../components/partners/ClassicProgramSection";
import ClassicProgramSection2 from "../../components/partners/ClassicProgramSection2";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";
import ReadyToStart from "../../components/ReadyToStart";

const Partners = () => {
    return (
        <div>
            <AboutCompanyHeader title='Партнёрская программа' subtitle='Партнёрам'/>
           <ClassicProgramSection/>
            <ClassicProgramSection2/>
            <ReadyToStart/>
        </div>
    );
};

export default Partners;
