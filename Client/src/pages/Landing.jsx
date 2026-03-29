import "../pages/CSS/Landing.css"
import Header from "../components/common/Header/Header";
import Hero from "../components/landing/Hero/Hero";
import FeatureSection from "../components/landing/FeatureSection/FeatureSection";
import HowItwork from "../components/landing/HowItwork/HowItwork";
function Landing(){
    return(
        <div>
            <Hero />
            <FeatureSection />
            <HowItwork />
        </div>
    );
}
export default Landing;