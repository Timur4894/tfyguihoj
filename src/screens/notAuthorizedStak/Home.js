import React from "react";
import HeroSection from "../../components/landing/HeroSection";
import InvestmentProposals from "../../components/landing/InvestmentProposals";
import HowItWorks from "../../components/landing/HowItWorks";
import TeamPotentialSection from "../../components/landing/TeamPotentialSection";
import FAQSection from "../../components/landing/FAQSection";
import MarqueeText from "../../components/MarqueeText";

const Home = () => {
    return (
        <div>
            <MarqueeText/>
            <HeroSection/>
            <InvestmentProposals/>
            <HowItWorks/>
            <TeamPotentialSection/>
            <FAQSection/>
        </div>
    );
};

export default Home;
