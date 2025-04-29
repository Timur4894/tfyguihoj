import React, {useEffect, useState} from "react";
import HeroSection from "../../components/landing/HeroSection";
import InvestmentProposals from "../../components/landing/InvestmentProposals";
import HowItWorks from "../../components/landing/HowItWorks";
import TeamPotentialSection from "../../components/landing/TeamPotentialSection";
import FAQSection from "../../components/landing/FAQSection";
import MarqueeText from "../../components/MarqueeText";
import ReadyToStart from "../../components/ReadyToStart";
import HeroSecMob from "../../components/landing/HeroSecMob";

const Home = () => {
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
            <MarqueeText/>
            {isMobile ? <HeroSecMob/> : <HeroSection/>}
            <InvestmentProposals/>
            <HowItWorks/>
            <TeamPotentialSection/>
            <FAQSection/>
            <ReadyToStart/>
        </div>
    );
};

export default Home;
