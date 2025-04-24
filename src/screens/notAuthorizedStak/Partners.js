import React from "react";
import ClassicProgramSection from "../../components/partners/ClassicProgramSection";
import ClassicProgramSection2 from "../../components/partners/ClassicProgramSection2";
import AboutCompanyHeader from "../../components/AboutCompanyHeader";

const Partners = () => {
    return (
        <div>
            <AboutCompanyHeader title='Партнёрская программа' subtitle='Партнёрам'/>
           <ClassicProgramSection/>
            <ClassicProgramSection2/>
        </div>
    );
};

export default Partners;
